import 'dotenv/config';
import bcrypt from 'bcrypt';

import db from '../src/core/db/create-db';

db.prepare(`
   CREATE TABLE IF NOT EXISTS user (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       email TEXT NOT NULL UNIQUE,
       password TEXT NOT NULL
   )
`).run();

db.prepare(`
   CREATE TABLE IF NOT EXISTS session (
       sessionToken TEXT NOT NULL PRIMARY KEY,
       userId TEXT NOT NULL REFERENCES user (id)
           ON DELETE CASCADE ON UPDATE NO ACTION,
       expires INTEGER NOT NULL
   )
`).run();

async function initializeUserTable() {
  const stmt = db.prepare(`
      INSERT INTO user VALUES (
         null,
         @name,
         @email,
         @password
      )
   `);

  stmt.run({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: await bcrypt.hash(process.env.ADMIN_PASSWORD as string, 10)
  });
}

initializeUserTable();
