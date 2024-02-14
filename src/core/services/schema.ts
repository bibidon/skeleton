import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('user', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique()
});

export const sessions = sqliteTable('session', {
    sessionToken: text('sessionToken').notNull().primaryKey(),
    userId: text('userId')
        .notNull()
        .references(() => users.id, {onDelete: 'cascade'}),
    expires: integer('expires', {mode: 'timestamp_ms'}).notNull()
});
