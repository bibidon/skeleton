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
      name: 'admin',
      email: 'admin@test.com',
      password: await bcrypt.hash('admin', 10)
  });
}

initializeUserTable();
