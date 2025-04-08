import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export const openDb = async () => {
  const dbPath = path.resolve(process.cwd(), "db/catalogo_autos.sqlite");

  return open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
};
