import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { DrizzleAdapter } from '@auth/drizzle-adapter';

import bcrypt from 'bcrypt';

import { db, getUserByEmail } from '@/core/db/schema';
import { ServerUser } from '@/shared/models/user';

export const authConfig  = {
    adapter: DrizzleAdapter(db),
    providers: [CredentialsProvider({
        name: 'Credentials',
        credentials: {
            username: {label: 'Username', type: 'text'},
            password: {label: 'Password', type: 'password'}
        },
        async authorize(credentials) {
            if (!credentials!.username || !credentials!.password) {
                return null;
            }

            const user: ServerUser | undefined = await getUserByEmail(credentials!.username, true) as ServerUser | undefined;

            if (!user) {
                return null;
            }

            const passwordsMatch: boolean = await bcrypt.compare(credentials!.password, user.password);

            if (!passwordsMatch) {
                return null;
            }

            return {
                id: user.id,
                name: user.name,
                email: user.email
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
} as AuthOptions;
