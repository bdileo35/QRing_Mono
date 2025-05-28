// prisma/seed.ts
import { PrismaClient, Usuario } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed...');
// Borra los datos existentes para evitar duplicados
  await prisma.telefono.deleteMany();
  await prisma.timbre.deleteMany();
  await prisma.usuario.deleteMany();
  await prisma.direccion.deleteMany();

  // Crea la dirección
  const direccion = await prisma.direccion.create({
    data: {
      idUnico: 'qr_demo123',
      calle: 'Av. Demo',
      numero: '100',
      ciudad: 'Ciudad Demo',
      provincia: 'Provincia Demo',
      pais: 'Argentina',
    },
  });

  // Crea usuarios y teléfonos
  const usuarios: Usuario[] = [];
  for (let i = 1; i <= 3; i++) {
    const usuario = await prisma.usuario.create({
      data: {
        nombre: `Usuario ${i}`,
        email: `usuario${i}@demo.com`,
      },
    });
    // Crea teléfono para cada usuario
    await prisma.telefono.create({
      data: {
        numero: `+54911111111${i}`,
        activo: true,
        whatsapp: true,
        voz: i !== 2,
        video: i === 3,
        usuarioId: usuario.id,
      },
    });
    usuarios.push(usuario);
  }

  // Crea timbres y los asocia a la dirección y a los usuarios
  const timbres = [
    { piso: '1', dpto: 'A', usuarioId: usuarios[0].id },
    { piso: '1', dpto: 'B', usuarioId: usuarios[1].id },
    { piso: '2', dpto: 'A', usuarioId: usuarios[2].id },
  ];

  for (const t of timbres) {
    await prisma.timbre.create({
      data: {
        piso: t.piso,
        dpto: t.dpto,
        direccionId: direccion.id,
        usuarioId: t.usuarioId,
      },
    });
  }

  console.log('🌱 Seed de demo insertado correctamente.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
