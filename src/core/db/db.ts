import DatabaseConstructor, { Database } from 'better-sqlite3';

import { BetterSQLite3Database, drizzle } from 'drizzle-orm/better-sqlite3';

import * as schema from '@/core/db/schema';

const sqlite: Database = new DatabaseConstructor('databases/database');

export const db: BetterSQLite3Database<typeof schema> = drizzle(sqlite, {schema});
