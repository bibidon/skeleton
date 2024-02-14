import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { DrizzleAdapter } from '@auth/drizzle-adapter';

import { drizzle } from 'drizzle-orm/better-sqlite3';

import db from '@/core/services/db';

export const authConfig: AuthOptions = {
    adapter: DrizzleAdapter(drizzle(db)),
    providers: [CredentialsProvider({
        name: 'Credentials',
        credentials: {
            username: {label: 'Username', type: 'text'},
            password: {label: 'Password', type: 'password'}
        },
        async authorize(credentials) {
            return {name: credentials!.username, email: credentials!.username};
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
};
