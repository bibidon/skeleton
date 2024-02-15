import { eq } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { drizzle } from 'drizzle-orm/better-sqlite3';

import rowDb from '@/core/db/create-db';

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

export function getUserByEmail(email: string) {
    return db.query.user.findFirst({
        where: eq(user.email, email)
    });
}
