import DatabaseConstructor, { Database } from 'better-sqlite3';

const db: Database = new DatabaseConstructor('databases/database');

export default db;
