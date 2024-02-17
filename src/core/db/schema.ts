import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

import { uuid } from '@/core/services/utilities';

export const user = sqliteTable('user', {
    id: integer('id').primaryKey({autoIncrement: true}),
    uuid: text('uuid').notNull().unique().$defaultFn(() => uuid()),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull()
});
