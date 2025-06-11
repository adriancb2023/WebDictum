# WebDictum

Una aplicación web moderna construida con Astro y Supabase para autenticación y gestión de usuarios.

## Características

- 🚀 **Astro** - Framework web moderno y rápido
- 🔐 **Supabase** - Autenticación y base de datos
- 🎨 **Tailwind CSS** - Diseño moderno y responsive
- ⚛️ **React** - Componentes interactivos
- 📱 **Responsive** - Diseño adaptativo para todos los dispositivos

## Páginas Incluidas

- **Inicio** (`/`) - Página principal con información de la aplicación
- **Login** (`/login`) - Formulario de inicio de sesión
- **Registro** (`/register`) - Formulario de creación de cuenta
- **Dashboard** (`/dashboard`) - Panel de control para usuarios autenticados

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd WebDictum
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Supabase**
   - Las credenciales ya están configuradas en `src/lib/supabase.js`
   - Asegúrate de que tu proyecto de Supabase tenga habilitada la autenticación por email

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:4321
   ```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción

## Estructura del Proyecto

```
WebDictum/
├── src/
│   ├── components/          # Componentes React
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   └── Dashboard.jsx
│   ├── layouts/            # Layouts de Astro
│   │   └── Layout.astro
│   ├── lib/               # Utilidades y configuración
│   │   └── supabase.js
│   └── pages/             # Páginas de la aplicación
│       ├── index.astro
│       ├── login.astro
│       ├── register.astro
│       └── dashboard.astro
├── public/                # Archivos estáticos
│   └── favicon.svg
├── package.json
├── astro.config.mjs
└── README.md
```

## Funcionalidades

### Autenticación
- Registro de usuarios con email y contraseña
- Inicio de sesión seguro
- Protección de rutas
- Cierre de sesión

### Dashboard
- Información del usuario
- Estadísticas simuladas
- Actividad reciente
- Acciones rápidas
- Diseño responsive

## Tecnologías Utilizadas

- **Astro** - Framework web
- **React** - Componentes interactivos
- **Supabase** - Backend y autenticación
- **Tailwind CSS** - Estilos
- **JavaScript ES6+** - Lógica de la aplicación

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 