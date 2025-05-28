# QRing Pro

QRing Pro es una plataforma para el control de accesos y la gestión de visitantes en edificios, barrios y oficinas. Permite administrar timbres inteligentes, usuarios y accesos desde una app móvil y una web, facilitando la comunicación y la seguridad.

---

## 🚀 Tecnologías principales
- **Next.js** (web)
- **React** (interfaces)
- **TypeScript** (tipado seguro)
- **Prisma** (base de datos)
- **SQLite** (desarrollo local)
- **TurboRepo** (monorepo)

---

## 📁 Estructura básica

```
apps/
  web/
    app/
      acceso/   # Página pública por QR
      admin/    # Panel de administración
      api/      # Endpoints API
      tienda/   # (Futuro) Tienda online
      web/      # (Futuro) Landings
    public/     # Imágenes y assets
    globals.css # Estilos globales
    layout.tsx  # Layout general
packages/
  ui/           # Componentes reutilizables
  utils/        # Funciones utilitarias
prisma/
  schema.prisma # Modelo de datos
  seed.ts       # Seed de ejemplo
  migrations/   # Migraciones DB
```

---

## 🛠️ ¿Cómo lo pruebo?

1. Instalá dependencias:
   ```
   npm install
   ```
2. Migrá y seed:
   ```
   npx prisma migrate dev --name init
   npx prisma db seed
   ```
3. Levantá la web:
   ```
   cd apps/web
   npm run dev
   ```
4. Abrí en el navegador:
   ```
   http://localhost:3000/acceso/qr_demo123
   ```

---

## 📖 Glosario rápido
- **Monorepo:** Un solo repo con varios proyectos (web, mobile, librerías)
- **ORM:** Traduce entre base de datos y código (Prisma)
- **Endpoint:** Ruta de la API que devuelve/recibe datos
- **CRUD:** Crear, Leer, Actualizar, Borrar datos

---

## RESUMEN

QRing Pro es una plataforma para el control de accesos y la gestión de visitantes en edificios, barrios y oficinas. La estructura del proyecto se basa en un monorepo con dos aplicaciones principales: una app móvil y una app web.

### Estructura del Proyecto
- **App Móvil**: Actualmente no se está desarrollando.
- **App Web**: Se divide en:
  - **Panel Público**: Accesible mediante un QR único.
  - **Administración/Configuración**: Para gestionar usuarios y configuraciones.
  - **Tienda**: Con sistema de pagos (dejada de lado por ahora).

### Funcionalidad del QR
- El QR, basado en un ID único, abre un panel público.
- Permite seleccionar Piso/Área/Zona y Dpto/Usuario/Unidad.
- Establece un vínculo por WhatsApp según la configuración (Texto, Llamada, Video).

### Diseño Común
- **Header**: Común a toda la aplicación.
- **Cuerpo**: Fondo suave con un contenedor central de bordes grises y sombreado.
- **Footer**: Iconos de Inicio, Invitaciones, Ayuda y un Icono Hamburguesa para configuración.

### Flujo de Usuario
- El visitante escanea el QR y se abre el panel en su navegador.
- El panel muestra la dirección configurada y permite elegir el departamento.
- Dos tabs: Piso y Dpto, con estilos activos e inactivos.

### FLUJO DE COMPRA, CONFIGURACIÓN Y USO DEL QRING

1. **Compra y Generación de QR**
   - El cliente ingresa a la tienda (shop) y compra un QRing + pack de 10 timbres.
   - Al completar la compra, se genera un **IDUNICO** y se asocia a la dirección (Calle + Altura, ciudad, etc.).
   - Se genera un QR que contiene la URL de acceso público con el IDUNICO embebido (ejemplo: `https://qring.app/acceso/qr_demo123`).

2. **Configuración de Timbres**
   - El cliente escanea el QR (o ingresa el IDUNICO y dirección manualmente) para acceder a la configuración.
   - Puede configurar los 10 timbres: uno propio y los demás para vecinos/invitados.
   - Para cada timbre se configuran:
     - Piso
     - Dpto
     - Número de celular (hasta 3 por timbre)
     - Método de contacto (Texto, Llamada, Video)
     - Estado DND (No molestar)
   - Los vecinos pueden ser invitados a configurar su timbre mediante invitación.

3. **Uso por Visitante**
   - El visitante escanea el QR en la puerta.
   - Se abre la web pública mostrando:
     - Título: Dirección configurada
     - Tabs: Piso / Dpto
     - Botón grande: "Tocar Timbre [Piso] [Dpto]" (todo del mismo ancho y en negrita)
   - El visitante selecciona el timbre y contacta al residente según la configuración (WhatsApp, llamada, video, etc.).

**Notas:**
- El QR debe contener el IDUNICO y la URL de acceso.
- La dirección se obtiene de la base de datos a partir del IDUNICO.
- Todo este flujo debe estar reflejado en la base de datos y la lógica de la app.

Este resumen se irá ampliando a medida que se avance en el desarrollo y se detecten nuevas necesidades o mejoras.

Para más detalles, mirá el archivo `README_COMPLETO.md`.

---

### NUEVO FLUJO VISUAL Y DE USUARIO PARA LA PÁGINA PÚBLICA

1. **Header** (siempre visible)
2. **Título:** Dirección principal (ejemplo: "Av. Demo 100")
3. **Subtítulo:** Ciudad (ejemplo: "Ciudad Demo")
4. **QR real:** generado a partir del IDUNICO (visible para escanear o compartir)
5. **Tabs:** "Piso" y "Dpto" con formato pill/redondeado, bien visual y moderno (como la imagen de referencia)
6. **Botones de selección de piso/dpto:** bordes suaves, sombra, bien visibles
7. **Botón grande:** "Tocar Timbre [Piso] [Dpto]"
8. **(Solo en Comunidad, NO en público):**
   - CInfo con la lamparita y el texto "¿Sabías que...?"

**Notas:**
- El CInfo no se muestra en la web pública, solo en la Comunidad.
- El QR debe ser generado dinámicamente usando el IDUNICO y la URL de acceso.
- El diseño debe ser limpio, moderno y fácil de usar para visitantes y residentes.

---

**Estado actual:**
- El endpoint público funciona y devuelve la dirección, timbres y usuarios asociados.
- La página pública ya muestra la dirección, ciudad, tabs y botones con datos reales.
- Próximo paso: agregar el QR real y mejorar el formato visual de los tabs y botones.

---
 