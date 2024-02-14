import db from '../src/core/services/db';
import { User } from '../src/shared/models/user';

const users: Array<Omit<User, 'id'>> = [{
    name: 'admin',
    email: 'admin@test.com'
}];

db.prepare(`
   CREATE TABLE IF NOT EXISTS user (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       email TEXT NOT NULL UNIQUE
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

async function initializeTables(): Promise<void> {
  const stmt = db.prepare(`
      INSERT INTO user VALUES (
         null,
         @name,
         @email
      )
   `);

  for (const user of users) {
      stmt.run(user);
  }
}

initializeTables();
