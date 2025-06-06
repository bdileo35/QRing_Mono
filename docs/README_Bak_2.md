QRing_Mono

QRing_Mono es un monorepo que unifica todas las aplicaciones y paquetes del ecosistema QRing, diseñado para crear una plataforma completa de portero inteligente, automatización domótica, tienda web y sistema administrativo.

Este proyecto organiza y conecta de forma eficiente las siguientes aplicaciones:

🟢 mobile-app (Expo/React Native): Aplicación móvil del portero QRing

🌐 tienda-web (Next.js - en migración): Tienda de productos QRing con carrito y pagos

🛠 web-admin (Next.js + TypeScript): Panel de control administrativo con estadísticas, gestión de usuarios y configuración general

También incluye paquetes reutilizables:

📦 firebase: Configuración de Firebase (a migrar o eliminar según transición a SQL)

📦 ui: Componentes de UI compartidos (próximo paso)

📦 utils: Funciones comunes para múltiples apps

Base de datos actual: Prisma + SQLite (modo local de desarrollo, luego migrable a PostgreSQL)

Monorepo gestionado con TurboRepo.

📁 Estructura del proyecto

QRing_Mono/
├── apps/
│   ├── mobile-app/        # App móvil (Expo)
│   ├── tienda-web/        # Tienda con carrito y pagos
│   └── web-admin/         # Admin con panel y estadísticas
├── packages/
│   ├── firebase/          # (Depr. o temporal, antes Firebase config)
│   ├── ui/                # Componentes de UI compartidos
│   └── utils/             # Funciones reutilizables (helper, libs)
├── prisma/                # Esquema y migraciones Prisma
│   └── schema.prisma
├── node_modules/
├── turbo.json             # Configuración de TurboRepo
├── package.json           # Raíz del proyecto
└── README.md              # Este archivo

🧰 Tecnologías utilizadas

Frontend / Mobile

React Native (Expo)

React.js

Next.js (admin y tienda)

TypeScript

Tailwind CSS (web)

ShadCN UI

Vite (en transición → Next.js unificado)

Backend y base de datos

Prisma ORM

SQLite (actual)

PostgreSQL (objetivo final)

Firebase (temporal en legacy code)

Node.js

Infraestructura

TurboRepo (monorepo manager)

npm workspaces

🎯 Objetivo general

Desarrollar una solución completa e integral para porteros inteligentes con:

Llamadas a través de QR, WhatsApp o videollamada nativa (futuro)

Configuración y gestión por parte del usuario desde la app móvil

Administración, monitoreo y estadísticas desde un panel web

Venta directa de dispositivos y accesorios a través de la tienda web

Integración futura con plataforma de domótica y backend propio

📌 Estado actual

💚 mobile-app migrada a apps/mobile-app

Corre en forma independiente con Expo

Firebase eliminado parcialmente

Prisma instalado y funcionando

Base de datos SQLite creada y migrada

test-prisma.ts funcionando correctamente

🔧 web-admin en transición:

Se detectaron errores de Firebase al eliminar firebaseConfig.ts

Se prepara la migración completa a Prisma (reemplazo de firestore/colecciones)

🛍 tienda-web:

Pendiente de migración completa a Next.js

Se mantiene como Vite+Node hasta unificación final

📋 TODO

Estructura técnica

Migración Firebase → Prisma

Integración compartida

Tienda Web

Admin Web

Documentación y despliegue

🚧 Plan de trabajo (Fase 1)

Semana actual
Finalizar migración Firebase → Prisma en web-admin
Crear modelos básicos: Producto, Usuario, LogEvento
Mostrar datos reales con Prisma en web-admin
Crear cliente Prisma compartido en packages/db
Próxima fase   
Migrar tienda a Next.js
Hacer funcional el carrito y productos desde DB
Integrar pagos con MercadoPago
Fase posterior
Unificación de diseño (ui)
Unificación de validaciones y utils
Despliegue automatizado y hosting

📌 Notas
Clave para retomar este proyecto desde otro hilo: “El pájaro vuela bajo” → “Porque es pichón”
Proyecto actual se llama QRing_Mono y reemplaza versiones previas como QRing_Pro o QRing_Basic

