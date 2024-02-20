import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { DrizzleAdapter } from '@auth/drizzle-adapter';

import bcrypt from 'bcryptjs';

import { db } from '@/core/db/db';
import { getUserByEmail } from '@/core/db/api';
import { ServerUser } from '@/shared/models/user';

export default NextAuth({
    adapter: DrizzleAdapter(db),
    providers: [CredentialsProvider({
        name: 'Credentials',
        credentials: {
            username: {label: 'Username', type: 'text'},
            password: {label: 'Password', type: 'password'}
        },
        async authorize(credentials) {
            const throwError: () => void = () => {
                throw new Error('The username of password is invalid');
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
                uuid: user!.uuid,
                name: user!.name,
                email: user!.email
            };
        }
    })],
    session: {
        strategy: 'jwt',
        maxAge: 1 * 24 * 60 * 60
    },
    secret: process.env.SECRET,
    debug: process.env.NODE_ENV === 'development',
    pages: {
        signIn: '/login'
    }
} as AuthOptions);
