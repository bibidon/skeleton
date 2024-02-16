import { eq } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { drizzle } from 'drizzle-orm/better-sqlite3';

import rowDb from '@/core/db/create-db';
import { ServerUser, User } from '@/shared/models/user';

const user = sqliteTable('user', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull()
});

const session = sqliteTable('session', {
    sessionToken: text('sessionToken').notNull().primaryKey(),
    userId: text('userId')
        .notNull()
        .references(() => user.id, {onDelete: 'cascade'}),
    expires: integer('expires', {mode: 'timestamp_ms'}).notNull()
});

export const db = drizzle(
    rowDb,
    {
        schema: {user, session}
    }
);

export async function getUserByEmail(email: string, withPassword: boolean = false): Promise<User | ServerUser | undefined> {
    try {
        return db
            .query
            .user
            .findFirst({
                columns: {
                    id: true,
                    name: true,
                    email: true,
                    password: withPassword
                },
                where: eq(user.email, email)
            });
    } catch (error) {
        return;
    }
}

export async function createUser(newUser: Omit<ServerUser, 'id'>): Promise<Array<User>> {
    try {
        return db
            .insert(user)
            .values(newUser)
            .returning({
                id: user.id,
                name: user.name,
                email: user.email
            });
    } catch (error) {
        return [];
    }
}
