import { openDb } from './database'

const createTable = async () => {
  const db = await openDb()
  await db.exec(`
    CREATE TABLE IF NOT EXISTS catalogo_autos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      modelo TEXT NOT NULL
    );
  `)
  console.log('Tabla creada')
}

createTable()