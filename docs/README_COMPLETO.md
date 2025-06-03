# QRing Pro - Documentación Completa

## ¿Qué es QRing Pro?
QRing Pro es una solución integral para el control de accesos y la gestión de visitantes en edificios, barrios, consorcios y oficinas. Permite administrar timbres inteligentes, usuarios y accesos desde una app móvil y un panel web, facilitando la comunicación y la seguridad entre residentes, visitantes y encargados.

---

## Tecnologías utilizadas
- **Next.js**: Framework para construir la web (React, SSR, API routes).
- **React**: Librería para construir interfaces de usuario.
- **TypeScript**: Lenguaje que agrega tipado a JavaScript (más seguro y fácil de mantener).
- **Prisma**: ORM para manejar la base de datos de forma sencilla y segura.
- **SQLite**: Base de datos liviana para desarrollo local.
- **TurboRepo**: Herramienta para organizar y acelerar el desarrollo de monorepos (varios proyectos juntos).
- **Node.js**: Entorno para ejecutar JavaScript en el servidor.
- **Firebase**: (Opcional) Para autenticación, notificaciones o almacenamiento en la nube.
- **CSS Modules**: Para estilos personalizados y aislados por componente.

---

## Estructura del proyecto  

```
apps/
  web/
    app/
      acceso/         # Página pública de acceso por QR (wizard para visitantes y usuarios)
      admin/          # Panel de administración (gestión de usuarios, timbres, invitaciones)
      api/            # Endpoints API (Next.js API routes)
      tienda/         # (Futuro) Tienda online de productos domóticos
      web/            # (Futuro) Otras páginas públicas o landings
      admin.module.css
      favicon.ico
      globals.css     # Estilos globales de la web
      layout.tsx      # Layout general (header, footer, navegación)
      page.module.css
    public/           # Imágenes, logos, assets estáticos accesibles desde la web
    .gitignore
    next-env.d.ts
    next.config.js
    package-lock.json
    package.json
    README.md
    tsconfig.json
node_modules/
packages/
  firebase/           # Lógica y utilidades para integración con Firebase (si usás)
  ui/                 # Componentes de UI reutilizables (botones, cards, etc)
  utils/              # Funciones utilitarias compartidas
prisma/
  migrations/         # Migraciones de la base de datos Prisma
  dev.db              # Base de datos SQLite local (desarrollo)
  schema.prisma       # Definición del modelo de datos
  seed.ts             # Script para poblar la base con datos de ejemplo
.gitignore
package-lock.json
package.json
```

---

## ¿Para qué sirve cada carpeta/archivo?

- **acceso/**  
  Página pública a la que accede un visitante al escanear el QR.  
  Muestra los timbres configurados y permite contactar a los usuarios (WhatsApp, llamada, video).

- **admin/**  
  Panel de administración para el usuario dueño de la dirección.  
  Permite gestionar usuarios, timbres, teléfonos, invitaciones, etc.

- **api/**  
  Endpoints de la API (por ejemplo, para obtener datos de la dirección, usuarios, etc).

- **tienda/**  
  (Futuro) Sección para la tienda online de productos domóticos, automatización, cámaras, etc.

- **web/**  
  (Futuro) Otras páginas públicas, landings, o secciones informativas.

- **public/**  
  Imágenes, logos y archivos estáticos accesibles desde la web (por ejemplo, el logo QRing, imágenes de ayuda, etc).

- **globals.css**  
  Estilos globales para toda la web.

- **layout.tsx**  
  Layout general de la app: define el header, footer y la estructura base de todas las páginas.

- **page.module.css**  
  Estilos específicos para la página principal.

- **ui/**  
  Componentes de interfaz reutilizables (botones, cards, modales, etc).

- **utils/**  
  Funciones utilitarias compartidas entre web y mobile.

- **schema.prisma**  
  Modelo de datos de la base (Dirección, Timbre, Usuario, Teléfono, etc).

- **seed.ts**  
  Script para poblar la base con datos de ejemplo/demo.

- **migrations/**  
  Historial de migraciones de la base de datos.

---

## Herramientas de control y administración

- **Prisma Studio**  
  Interfaz visual para ver y editar los datos de la base.  
  Se abre con:  
  ```
  npx prisma studio
  ```

- **TurboRepo**  
  Permite correr varios proyectos (web, mobile, etc) juntos y compartir código fácilmente.

- **Next.js Dev Server**  
  Para levantar la web en modo desarrollo:  
  ```
  cd apps/web
  npm run dev
  ```

- **Seed de datos**  
  Para poblar la base con datos de ejemplo:  
  ```
  npx prisma db seed
  ```

---

## Glosario básico

- **Monorepo:** Un solo repositorio que contiene varios proyectos (web, mobile, librerías compartidas).
- **ORM:** Herramienta que traduce entre la base de datos y el código (en este caso, Prisma).
- **Endpoint:** Ruta de la API que devuelve o recibe datos.
- **CRUD:** Crear, Leer, Actualizar, Borrar (operaciones básicas de datos).

---

## Ejemplo de flujo de uso

1. El visitante escanea el QR de la dirección.
2. Accede a la página pública y elige el timbre (piso/dpto).
3. Puede contactar al usuario por WhatsApp, llamada o videollamada.
4. El administrador puede gestionar usuarios, timbres y teléfonos desde el panel admin.

---

## Tips y buenas prácticas

- Mantené la estructura de carpetas clara y ordenada.
- Usá componentes reutilizables para evitar repetir código.
- Documentá cada función o componente importante.
- Usá el seed para poblar la base y probar el flujo real.
- Consultá el glosario y este README cuando tengas dudas.

---

## ¿Cómo empiezo?

1. Instalá las dependencias:
   ```
   npm install
   ```
2. Corré las migraciones y el seed:
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

## ¿Dónde pido ayuda?
- Consultá este README y el glosario.
- Buscá ejemplos en los archivos de código.
- Si algo no funciona, revisá la consola y los logs.
- ¡No dudes en preguntar o buscar ayuda online!

---

¡Gracias por confiar en QRing Pro y por apostar a aprender y crecer con tu proyecto!

# Base de Conocimiento y Aprendizaje QRing Pro

## Definiciones Clave
- **Monorepo:** Un solo repositorio que contiene varias aplicaciones y/o paquetes relacionados, facilitando la gestión y el versionado conjunto.
- **Ruta dinámica ([param]):** En Next.js, una carpeta entre corchetes (por ejemplo, [idUnico]) define una URL dinámica, permitiendo que la página reciba parámetros variables desde la URL.
- **IDUNICO:** Identificador único generado para cada dirección/compra, usado para asociar timbres, usuarios y generar el QR.
- **Timbre:** Unidad configurable asociada a una dirección, puede tener piso, dpto, teléfonos y modos de contacto.
- **CInfo:** Componente visual de ayuda contextual, con fondo celeste y lamparita, usado solo en Comunidad/Admin.

## Herramientas y Tecnologías
- **Next.js:** Framework de React para aplicaciones web modernas, soporta rutas dinámicas, SSR y SSG.
- **React:** Librería principal para construir interfaces de usuario.
- **Prisma:** ORM para gestionar la base de datos de forma tipada y sencilla.
- **SQLite:** Base de datos ligera, ideal para desarrollo local. Para producción se recomienda PostgreSQL o MySQL.
- **Vercel:** Plataforma de despliegue serverless, ideal para Next.js.
- **TurboRepo:** Herramienta para gestionar monorepos y acelerar builds.
- **react-icons:** Librería de íconos para React.
- **qrcode.react:** Componente para generar códigos QR en React.

## Componentes Clave
- **CardContainer:** Contenedor central con bordes grises, sombra y fondo blanco, usado en todas las vistas principales.
- **Tabs pill:** Botones de navegación (Piso/Dpto) con formato redondeado y visual moderno.
- **Footer/NavBar:** Barra de navegación inferior con iconos de Inicio, Invitaciones, Ayuda y Configuración.
- **CInfo:** Ayuda contextual, solo visible en Comunidad/Admin.

## Flujo de Usuario
1. **Compra y generación de QR:** El cliente compra un QRing, se genera un IDUNICO y un QR con la URL pública.
2. **Configuración de timbres:** El admin configura los timbres y puede invitar usuarios.
3. **Acceso público:** El visitante escanea el QR y accede a la web pública para tocar timbre.
4. **Comunidad/Admin:** El admin puede ver el QR, gestionar timbres y ver ayuda contextual.

## Buenas Prácticas
- Mantener el README y README_COMPLETO.md actualizados con cada avance importante.
- Documentar decisiones de arquitectura y flujos en el .md para facilitar el aprendizaje y la colaboración.
- Usar commits claros y frecuentes para respaldar el trabajo.

---

¡Sigue aprendiendo y mejorando QRing Pro! Si tienes dudas, consulta este archivo o pregunta a la comunidad (¡o a tu primo GPT!). 