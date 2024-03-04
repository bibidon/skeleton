import NextAuth, { AuthOptions } from 'next-auth';
import Google from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

import { DrizzleAdapter } from '@auth/drizzle-adapter';

import bcrypt from 'bcryptjs';

import { db } from '@/core/db';
import { getUserByEmail, getUserById } from '@/core/db/api/user';
import { ServerUser, User } from '@/shared/models/user';

export const authOptions = {
    adapter: DrizzleAdapter(db),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: 'Username', type: 'text'},
                password: {label: 'Password', type: 'password'}
            },
            // @ts-ignore
            async authorize(credentials) {
                const throwError: () => void = () => {
                    throw new Error('Invalid credentials');
                };

                if (!credentials!.username || !credentials!.password) {
                    throwError();
                }

                const user: ServerUser | undefined = await getUserByEmail(
                    credentials!.username,
                    true
                ) as ServerUser | undefined;

                if (!user) {
                    throwError();
                }

                const passwordsMatch: boolean = await bcrypt.compare(credentials!.password, user!.password);

                if (!passwordsMatch) {
                    throwError();
                }

                return {
                    id: user!.id,
                    name: user!.name,
                    email: user!.email,
                    emailVerified: user!.emailVerified,
                    image: user!.image,
                    role: user!.role
                };
            }
        })
    ],
    session: {
        strategy: 'jwt',
        maxAge: 1 * 24 * 60 * 60
    },
    callbacks: {
        async session({session, token}) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role;
            }

            return session;
        },
        async jwt({token}) {
            if (!token.sub) {
                return token;
            }

            const user: User = await getUserById(token.sub) as User;

            if (!user) {
                return token;
            }

            token.role = user.role;

            return token;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    pages: {
        signIn: '/login'
    }
} as AuthOptions;

export default NextAuth(authOptions);
