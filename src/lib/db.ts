import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'interns.db');
export const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

// Initialize the database schema
db.exec(`
  CREATE TABLE IF NOT EXISTS credentials (
    id TEXT PRIMARY KEY,
    internName TEXT NOT NULL,
    role TEXT NOT NULL,
    department TEXT NOT NULL,
    programName TEXT NOT NULL,
    startDate TEXT NOT NULL,
    endDate TEXT NOT NULL,
    issueDate TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'Active',
    verificationCount INTEGER DEFAULT 0
  )
`);
