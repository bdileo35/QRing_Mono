# QRing\_Mono

Repositorio monorepo de QRing ✨

Incluye todas las aplicaciones del ecosistema QRing:

* 📱 mobile-app (Expo React Native)
* 🛒 tienda-web (Frontend para usuarios)
* 💻 web-admin (Panel de administración y configuración de dispositivos)

---

## 💡 Objetivo del Proyecto

Desarrollar una plataforma integral QRing que permita:

1. Mostrar una tienda de productos inteligentes. 
2. Realizar la compra y asociación del dispositivo.
3. Configurar y activar el "Timbre QRing".
4. Integración futura con sistema domótico y vehicular.

---

## 📚 Estructura del Monorepo (TurboRepo)

```
QRing_Mono/
├── apps/
│   ├── mobile-app/       # App Expo (timbre, QR, escaneo)
│   ├── tienda-web/       # Tienda online (Expo Router / React Native Web)
│   └── web-admin/        # Panel de administración (Next.js + TypeScript)
├── packages/
│   ├── firebase/         # Configuración compartida de Firebase (a migrar a SQL)
│   ├── ui/               # Componentes de interfaz reutilizables
│   └── utils/            # Utilidades compartidas
├── prisma/               # Base de datos SQL (SQLite dev)
│   ├── schema.prisma
│   ├── dev.db
├── turbo.json           # Configuración del monorepo
├── package.json         # Dependencias comunes
├── .gitignore           # Ignora secrets, .next, dist, etc.
└── README.md            # Este archivo
```

---

## 💻 Tecnologías Usadas

* Expo + React Native
* React Native Web + Expo Router
* Next.js (Admin Panel)
* TypeScript
* Prisma + SQLite (modo desarrollo)
* TurboRepo
* Firebase (solo usado para pruebas anteriores, a eliminar completamente)

---

## 📈 Flujo Principal QRing

```
Usuario compra producto QRing → Se registra →
Recibe código ID y acceso al admin QRing →
Asocia WhatsApp + Dirección →
Accede a la web para administrar x cant de timbres
Puede enviar "Invitaciones" a distintos usuarios (hasta completar el cupo)
QR generado y activado → Timbre funcional con llamada/vídeo
```

En el futuro:

* Integración con domótica (Tuya / Home Assistant)
* Estado y control vehicular desde la misma app (lectura de OBD2)

---

## 📝 TODO (Fases del Proyecto)

### ✅ Fase 1: Monorepo funcional

* [x] apps/mobile-app movido y funcionando independiente
* [x] apps/web-admin funcionando con Next.js
* [x] apps/tienda-web reconfigurada con Expo Web
* [x] Prisma instalado y migrado con DB SQLite
* [x] Repo limpio y subido a GitHub (QRing\_Mono)

### 🎯 Fase 2: Unificación de apps web

* [ ] Mover tienda-web como módulo/página de web-admin
* [ ] Crear flujo de compra completo
* [ ] Iniciar sesión y crear usuario en admin luego de compra

### ⚙️ Fase 3: Backend + Base de datos

* [ ] Definir entidades Prisma: Usuario, Producto, Compra, Dispositivo
* [ ] Crear panel de control para administrador
* [ ] Crear API REST o RPC (Next.js App Router o trpc)

### 🏁 Fase 4: Preparación Producción

* [ ] Migrar DB a PostgreSQL / PlanetScale
* [ ] Deploy web-admin en Vercel
* [ ] Deploy tienda-web pública
* [ ] Generación de APK/IPA para mobile-app

---

## 🚀 Comandos útiles

Desde la raíz del monorepo:

```bash
# Iniciar mobile-app (Expo)
cd apps/mobile-app
npm install
npm start

# Iniciar tienda-web (Expo web con router)
cd apps/tienda-web/frontend
npm install
npm run web

# Iniciar panel admin (Next.js)
cd apps/web-admin
npm install
npm run dev

# Prisma
npx prisma generate
npx prisma migrate dev --name init
```

---

## 🤝 Colaboración

Pull Requests, Issues o mejoras bienvenidas.

Este proyecto se encuentra en desarrollo activo. Utilizá la frase:

> "El pájaro vuela bajo" para reanudar contexto técnico.

---

## 📦 Licencia

QRing\_Mono (c) 2025 - Uso privado para desarrollo de sistema QRing Pro.
