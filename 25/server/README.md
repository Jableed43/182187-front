# Servidor Local de API REST con JSON Server

Servidor local usando JSON Server para desarrollo y enseñanza de APIs REST.

## 📋 Tabla de Contenidos

- [Instalación](#-instalación)
- [Uso](#-uso)
- [Endpoints Disponibles](#-endpoints-disponibles)
- [Agregar Nuevas Colecciones](#-agregar-nuevas-colecciones)
- [Estructura de Datos](#-estructura-de-datos)
- [Configuración en la App](#-configuración-en-la-app)
- [Características](#-características)
- [Solución de Problemas](#-solución-de-problemas)

## 🚀 Instalación

```bash
npm install
```

Esto instalará `json-server` y sus dependencias.

## ▶️ Uso

### Iniciar el servidor (modo desarrollo)

```bash
npm run dev
```

**⚠️ Importante:** Usa `npm run dev` (no `npm start`) para que el servidor sea accesible desde emuladores Android.

El servidor estará disponible en:
- **Local:** `http://localhost:3000`
- **Red local:** `http://0.0.0.0:3000` (accesible desde otros dispositivos)

### Verificar que funciona

Abre en tu navegador: `http://localhost:3000/users`

Deberías ver un JSON con los usuarios.

## 📡 Endpoints Disponibles

### Usuarios (`/users`)

- **GET** `http://localhost:3000/users` - Obtener todos los usuarios
- **GET** `http://localhost:3000/users/1` - Obtener usuario por ID
- **POST** `http://localhost:3000/users` - Crear nuevo usuario
- **PUT** `http://localhost:3000/users/1` - Reemplazar usuario completo
- **PATCH** `http://localhost:3000/users/1` - Actualizar usuario parcialmente
- **DELETE** `http://localhost:3000/users/1` - Eliminar usuario

### Búsquedas y Filtros

JSON Server soporta búsquedas automáticas:

- **Filtrar:** `GET /users?name=Leanne` - Buscar por nombre
- **Ordenar:** `GET /users?_sort=name&_order=asc` - Ordenar por nombre
- **Paginación:** `GET /users?_page=1&_limit=5` - Paginar resultados
- **Buscar:** `GET /users?q=Leanne` - Búsqueda global

## ➕ Agregar Nuevas Colecciones

Para agregar una nueva colección (recurso), simplemente añádela al archivo `db.json`:

### Ejemplo: Agregar colección de "Posts"

1. **Edita `db.json`** y agrega la nueva colección:

```json
{
  "users": [
    // ... usuarios existentes
  ],
  "posts": [
    {
      "id": 1,
      "title": "Mi primer post",
      "body": "Contenido del post...",
      "userId": 1,
      "createdAt": "2024-01-15T10:30:00Z"
    },
    {
      "id": 2,
      "title": "Segundo post",
      "body": "Más contenido...",
      "userId": 1,
      "createdAt": "2024-01-16T14:20:00Z"
    }
  ]
}
```

2. **Reinicia el servidor** (Ctrl+C y luego `npm run dev`)

3. **¡Listo!** Ahora tienes disponibles automáticamente:
   - `GET /posts` - Obtener todos los posts
   - `GET /posts/1` - Obtener post por ID
   - `POST /posts` - Crear nuevo post
   - `PUT /posts/1` - Actualizar post completo
   - `PATCH /posts/1` - Actualizar parcialmente
   - `DELETE /posts/1` - Eliminar post

### Ejemplo: Agregar colección de "Comentarios"

```json
{
  "users": [ /* ... */ ],
  "posts": [ /* ... */ ],
  "comments": [
    {
      "id": 1,
      "postId": 1,
      "userId": 2,
      "text": "Excelente post!",
      "createdAt": "2024-01-15T11:00:00Z"
    }
  ]
}
```

### Relaciones entre Colecciones

JSON Server detecta automáticamente relaciones basadas en IDs:

- **Posts de un usuario:** `GET /users/1/posts` - Obtiene todos los posts del usuario 1
- **Comentarios de un post:** `GET /posts/1/comments` - Obtiene comentarios del post 1
- **Usuario de un post:** `GET /posts/1/user` - Obtiene el usuario que creó el post 1

**Regla:** Si un objeto tiene un campo `userId`, puedes acceder a `/users/1/posts`. Si tiene `postId`, puedes acceder a `/posts/1/comments`.

**Ejemplo de estructura con relaciones:**

```json
{
  "users": [
    { "id": 1, "name": "Juan" },
    { "id": 2, "name": "María" }
  ],
  "posts": [
    { "id": 1, "title": "Post 1", "userId": 1 },
    { "id": 2, "title": "Post 2", "userId": 1 }
  ],
  "comments": [
    { "id": 1, "text": "Comentario 1", "postId": 1, "userId": 2 }
  ]
}
```

Con esta estructura, automáticamente puedes usar:
- `GET /users/1/posts` → Devuelve posts del usuario 1
- `GET /posts/1/comments` → Devuelve comentarios del post 1
- `GET /posts/1/user` → Devuelve el usuario del post 1

## 📋 Estructura de Datos

### Usuario

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org"
}
```

### Ejemplo: Post (si lo agregas)

```json
{
  "id": 1,
  "title": "Título del post",
  "body": "Contenido del post",
  "userId": 1,
  "createdAt": "2024-01-15T10:30:00Z"
}
```

## ⚙️ Configuración en la App

La app React Native está configurada para detectar automáticamente la plataforma:

- **Android Emulator:** `http://10.0.2.2:3000`
- **iOS Simulator:** `http://localhost:3000`
- **Web:** `http://localhost:3000`

### Para Dispositivo Físico

1. **Encuentra tu IP local:**
   ```bash
   # Windows
   ipconfig
   # Busca "IPv4 Address", ej: 192.168.1.100
   
   # Mac/Linux
   ifconfig
   # Busca "inet", ej: 192.168.1.100
   ```

2. **Inicia el servidor en modo accesible:**
   ```bash
   npm run dev
   ```
   Esto hace que el servidor sea accesible desde otros dispositivos en tu red.

3. **Configura variable de entorno en la app:**
   Crea un archivo `.env` en la carpeta de la app:
   ```
   EXPO_PUBLIC_API_URL=http://192.168.1.100:3000
   ```
   (Reemplaza con tu IP real)

4. **Reinicia la app:**
   ```bash
   npx expo start --clear
   ```

## ✨ Características

✅ **Local** - Corre en tu máquina  
✅ **Sin límites** - Sin restricciones de uso  
✅ **Persistente** - Los cambios se guardan en `db.json`  
✅ **Soporta CRUD completo** - GET, POST, PUT, PATCH, DELETE  
✅ **Hot Reload** - Se actualiza automáticamente al cambiar `db.json`  
✅ **Búsquedas automáticas** - Filtros, ordenamiento, paginación  
✅ **Relaciones automáticas** - Detecta relaciones entre colecciones  

## 📝 Modificar Datos

Simplemente edita el archivo `db.json` y el servidor se actualizará automáticamente.

**Nota:** Los cambios hechos vía API (POST, PUT, PATCH, DELETE) también se guardan automáticamente en `db.json`.

## 🔧 Solución de Problemas

### El servidor no inicia

- Verifica que el puerto 3000 no esté en uso
- Cambia el puerto en `package.json` si es necesario:
  ```json
  "dev": "json-server --watch db.json --port 3001 --host 0.0.0.0"
  ```

### La app no puede conectar

- **Android Emulator:** Asegúrate de usar `npm run dev` (con `--host 0.0.0.0`)
- Verifica que el servidor esté corriendo
- Revisa los logs de la app para ver qué URL está usando
- Para Android, debe ser `http://10.0.2.2:3000`

### Error "Cannot GET /"

- Verifica que `db.json` tenga el formato correcto (JSON válido)
- Asegúrate de que las colecciones estén en el nivel raíz del JSON

### Los cambios no se guardan

- Verifica que `db.json` tenga permisos de escritura
- Asegúrate de que el servidor esté en modo `--watch`

### Error "Network request failed"

- Verifica que el servidor esté corriendo con `npm run dev`
- Para Android, asegúrate de usar `10.0.2.2` en lugar de `localhost`
- Revisa que no haya firewall bloqueando el puerto 3000

## 📚 Recursos Adicionales

- [Documentación de JSON Server](https://github.com/typicode/json-server)
- [Guía de Filtros y Búsquedas](https://github.com/typicode/json-server#filter)

## 🎯 Ejemplos de Uso Avanzado

### Filtrar usuarios por email

```bash
GET /users?email=Sincere@april.biz
```

### Obtener posts de un usuario específico

```bash
GET /users/1/posts
```

### Crear un post relacionado con un usuario

```bash
POST /posts
Content-Type: application/json

{
  "title": "Nuevo post",
  "body": "Contenido",
  "userId": 1
}
```

### Paginar resultados

```bash
GET /users?_page=1&_limit=5
```

### Ordenar resultados

```bash
GET /users?_sort=name&_order=asc
```

### Combinar filtros

```bash
GET /users?name=Leanne&_sort=id&_order=desc
```

---

**¡Listo para desarrollar!** 🚀
