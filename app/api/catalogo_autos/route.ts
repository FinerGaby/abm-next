import { openDb } from '../database'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const GET = async () => {
  const db = await openDb()
  const autos = await db.all('SELECT * FROM catalogo_autos')
  return NextResponse.json(autos)
}

export const POST = async (req: NextRequest) => {
  const body = await req.json()
  const { nombre, modelo } = body

  const db = await openDb()
  const result = await db.run(
    'INSERT INTO catalogo_autos (nombre, modelo) VALUES (?, ?)',
    [nombre, modelo]
  )

  return NextResponse.json({ id: result.lastID, nombre, modelo })
}
