import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: NextRequest, context: { params: { idUnico: string } }) {
  const { idUnico } = context.params;
  try {
    const direccion = await prisma.direccion.findUnique({
      where: { idUnico },
      include: {
        timbres: {
          include: {
            usuario: {
              include: {
                telefonos: true,
              },
            },
          },
        },
      },
    });
    if (!direccion) return Response.json(null);
    return Response.json(direccion);
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
