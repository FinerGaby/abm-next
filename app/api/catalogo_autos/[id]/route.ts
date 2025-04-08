import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { openDb } from "../../database";

export const PUT = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  const getParams = async () => context.params;
  const { id } = await getParams();
  const { nombre, modelo } = await req.json();

  const db = await openDb();
  await db.run(
    "UPDATE catalogo_autos SET nombre = ?, modelo = ? WHERE id = ?",
    [nombre, modelo, id]
  );

  return NextResponse.json({ message: "Auto actualizado" });
};

export const DELETE = async (
  request: Request,
  context: { params: { id: string } }
) => {
  const getParams = async () => context.params;
  const { id } = await getParams();

  const db = await openDb();
  await db.run("DELETE FROM catalogo_autos WHERE id = ?", [id]);

  return NextResponse.json({ message: "Auto eliminado" });
};
