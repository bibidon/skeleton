import { integer, sqliteTable, text, primaryKey, index } from 'drizzle-orm/sqlite-core'
import type { AdapterAccount } from '@auth/core/adapters'

import { uuid } from '@/core/services/utilities';
import { Role } from '@/shared/configs/role';

export const user = sqliteTable(
    'user',
    {
        id: text('id').notNull().primaryKey().default(uuid()),
        name: text('name').notNull(),
        email: text('email').notNull(),
        emailVerified: integer('emailVerified', {mode: 'timestamp_ms'}),
        password: text('password'),
        image: text('image'),
        role: text('role', {enum: [Role.ADMIN, Role.USER]}).notNull().default(Role.USER),
    }, (table) => ({
        emailIdx: index('email_idx').on(table.email)
    })
);

export const account = sqliteTable(
    'account',
    {
        userId: text('userId').notNull().references(() => user.id, {onDelete: 'cascade'}),
        type: text('type').$type<AdapterAccount['type']>().notNull(),
        provider: text('provider').notNull(),
        providerAccountId: text('providerAccountId').notNull(),
        refresh_token: text('refresh_token'),
        access_token: text('access_token'),
        expires_at: integer('expires_at'),
        token_type: text('token_type'),
        scope: text('scope'),
        id_token: text('id_token'),
        session_state: text('session_state')
    },
    (account) => ({
        compoundKey: primaryKey({
            columns: [account.provider, account.providerAccountId]
        })
    })
);