# Configuración de Supabase Auth para Dictum

Este proyecto utiliza Supabase para la autenticación de usuarios. Sigue estos pasos para configurar tu proyecto:

## 1. Crear un proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Crea una cuenta o inicia sesión
3. Crea un nuevo proyecto
4. Espera a que se complete la configuración inicial

## 2. Obtener las credenciales

1. En tu dashboard de Supabase, ve a **Settings** > **API**
2. Copia la **URL** del proyecto
3. Copia la **anon public** key

## 3. Configurar el proyecto

### Opción A: Editar config.js
1. Abre el archivo `config.js`
2. Reemplaza `TU_SUPABASE_URL` con tu URL de Supabase
3. Reemplaza `TU_SUPABASE_ANON_KEY` con tu clave anónima

### Opción B: Editar directamente en los archivos HTML
1. Abre `login.html` y `register.html`
2. Busca las líneas:
   ```javascript
   const SUPABASE_URL = 'TU_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'TU_SUPABASE_ANON_KEY';
   ```
3. Reemplaza con tus credenciales reales

## 4. Configurar autenticación en Supabase

1. Ve a **Authentication** > **Settings**
2. Configura las siguientes opciones:
   - **Enable email confirmations**: Desactivado (para desarrollo)
   - **Enable phone confirmations**: Desactivado
   - **Enable email change confirmations**: Activado

## 5. Crear usuario administrador

1. Ve a **Authentication** > **Users**
2. Haz clic en **Add user**
3. Crea un usuario con:
   - Email: `root@root.com`
   - Password: `root`
   - Marca como **Confirmed**

## 6. Configurar políticas de seguridad (opcional)

En **Authentication** > **Policies**, puedes configurar políticas adicionales para mayor seguridad.

## 7. Probar la autenticación

1. Abre `login.html` en tu navegador
2. Intenta iniciar sesión con las credenciales de administrador
3. Verifica que funcione correctamente

## Estructura de archivos

```
├── login.html          # Página de inicio de sesión
├── register.html       # Página de registro
├── config.js          # Configuración de Supabase
├── gta-style.html     # Página principal
├── gta-style.css      # Estilos
└── gta-style.js       # JavaScript principal
```

## Características implementadas

- ✅ Autenticación con email y contraseña
- ✅ Registro de nuevos usuarios
- ✅ Validación de contraseñas
- ✅ Manejo de errores
- ✅ Interfaz responsiva
- ✅ Estilo GTA consistente
- ✅ Detección de usuario administrador
- ✅ Redirección automática

## Notas de seguridad

- En producción, asegúrate de habilitar la confirmación de email
- Cambia las credenciales por defecto del administrador
- Configura HTTPS en tu servidor web
- Considera implementar autenticación de dos factores

## Solución de problemas

### Error: "Supabase no está cargado"
- Verifica que el script de Supabase esté incluido en el HTML
- Comprueba tu conexión a internet

### Error: "Invalid login credentials"
- Verifica que las credenciales de Supabase sean correctas
- Asegúrate de que el usuario exista en Supabase

### Error: "User already registered"
- El email ya está registrado, usa la función de recuperación de contraseña

## Próximos pasos

1. Implementar recuperación de contraseña
2. Agregar autenticación social (Google, GitHub)
3. Implementar autenticación de dos factores
4. Crear panel de administración
5. Agregar gestión de usuarios 