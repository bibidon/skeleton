import DatabaseConstructor, { Database } from 'better-sqlite3';

const db: Database = new DatabaseConstructor('databases/database.db');

export default db;
