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

## RESUMEN ACTUALIZADO QRing Pro

### 1. Objetivo y estructura
QRing Pro es una plataforma para el control de accesos y gestión de visitantes en edificios, barrios y oficinas. El sistema se basa en un monorepo con dos apps principales:
- **Web** (panel público y de administración)
- **Mobile** (en pausa por ahora)

### 2. Flujo principal del sistema
- **Compra y generación de QR:** El cliente compra un QRing + pack de timbres. Se genera un IDUNICO y se asocia a la dirección. Se genera un QR con la URL pública: `https://tudominio.vercel.app/acceso/IDUNICO`.
- **Configuración de timbres:** El cliente accede a la web (escaneando el QR o ingresando el IDUNICO). Puede configurar los timbres: piso, dpto, teléfonos, método de contacto, DND, etc. Los vecinos pueden ser invitados a configurar su timbre.
- **Uso por visitante:** El visitante escanea el QR en la puerta. Se abre la web pública mostrando:
  - Título: Dirección
  - Subtítulo: Ciudad
  - Tabs: Piso / Dpto (formato pill/redondeado)
  - Botones de selección (bordes suaves, sombra)
  - Botón grande: "Tocar Timbre [Piso] [Dpto]"
  - **No se muestra QR ni CInfo en el panel público.**
- **Comunidad (panel de propietario/admin):** Incluye QR real (arriba de las tabs), CInfo (debajo del CardContainer), Footer/NavBar.

### 3. Coherencia visual y carrousel de ayuda
- **CardContainer:** Bordes grises, sombra, fondo blanco, igual en web y mobile.
- **Tabs:** Formato pill/redondeado, bien visual, colores y estilos coherentes con QRing mobile.
- **Botones:** Bordes suaves, sombra, bien visibles.
- **CInfo:** Fondo celeste, lamparita, solo en Comunidad.
- **Carrousel de ayuda:**
  - **Step 1:** Escanear el QR (dibujo ya hecho)
  - **Step 2:** Seleccionar piso/dpto y tocar timbre (hacer dibujo en el mismo estilo)
  - **Step 3:** Llamada o mensaje (dibujo ya hecho)
  - **Step 4:** Videollamada/contacto exitoso (dibujo ya hecho)

### 4. Estado actual
- Endpoint público `/api/publico/[idUnico]` funcionando.
- Página pública `/acceso/[idUnico]` muestra dirección, ciudad, tabs y botones con datos reales.
- Estilos mejorados: padding, tabs pill, botones con sombra.
- Dependencias instaladas y commiteadas.
- Todo el avance respaldado en GitHub.

### 5. Próximos pasos
1. Terminar la página de Comunidad con QR, CInfo y Footer/NavBar.
2. Preparar el carrousel de ayuda con los 4 pasos, usando los dibujos y capturas.
3. Avanzar con Invitaciones (flujo y UI).
4. Dejar Configuración para el final.

**Notas:**
- El archivo `cursor_an_lisis_de_monorepo_para_app_y.md` contiene el historial y decisiones del proyecto.
- El README se irá actualizando con cada avance importante.
- Si necesitas ayuda para el deploy en Vercel, revisa que todas las dependencias estén en el `package.json` de cada app.

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
 