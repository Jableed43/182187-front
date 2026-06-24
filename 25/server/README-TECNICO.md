# ⚙️ Guía Técnica - Backend API Mock (JSON Server)

Este documento detalla la arquitectura, el funcionamiento técnico y los endpoints disponibles para el backend del proyecto, el cual está construido sobre **JSON Server**. Sirve como un mock API completo y rápido para simular una base de datos en un entorno local de desarrollo.

---

## 🛠️ Especificaciones Técnicas

*   **Motor**: `json-server` (v0.17.4).
*   **Base de datos**: Archivo JSON estático (`db.json`) que se reescribe dinámicamente con cada petición de escritura (`POST`, `PUT`, `PATCH`, `DELETE`).
*   **Puerto**: `3000` (configurable en `package.json`).
*   **Host**: `0.0.0.0` (permite el enlace a todas las interfaces de red local, facilitando pruebas desde emuladores móviles de Android/iOS o dispositivos físicos en la misma red wifi).

---

## 📁 Estructura del Servidor

```text
server/
├── db.json              # Base de datos en formato JSON (Usuarios, Categorías y Productos)
├── package.json         # Scripts de inicio y dependencias del servidor
├── package-lock.json    # Historial detallado del árbol de dependencias
└── .gitignore           # Archivos omitidos en el control de versiones (node_modules)
```

---

## 📡 Esquema de Datos y Recursos (`db.json`)

El servidor expone automáticamente tres recursos principales mapeados a partir de las llaves del archivo `db.json`:

### 1. `products` (Productos)
Colección de artículos para el e-commerce.
*   `id` (Number): Identificador único autoincremental.
*   `name` (String): Nombre del producto.
*   `price` (Number): Precio unitario.
*   `profitRate` (Number): Coeficiente de ganancia/impuestos (ej: 1.21).
*   `description` (String): Descripción detallada.
*   `quantity` (Number): Stock disponible.
*   `status` (String): Estado de disponibilidad (`AVAILABLE`, `DISCONTINUED`, `NOT_AVAILABLE`).
*   `category` (String): ID de la categoría correspondiente.
*   `highlighted` (Boolean): Indica si el producto es destacado.
*   `image` (String): URL de la imagen del producto.

### 2. `category` (Categorías)
Colección para agrupar productos.
*   `id` (String): Identificador único.
*   `name` (String): Nombre de la categoría (ej. `"electronica"`).

### 3. `user` (Usuarios)
Colección de credenciales y perfiles.
*   `id` (String/Number): Identificador único.
*   `email` (String): Correo electrónico del usuario (utilizado para el login).
*   `name` (String): Nombre del usuario.
*   `password` (String): Contraseña en texto plano.

---

## 🕹️ Documentación de Endpoints (API Reference)

### Productos (`/products`)

| Método | Endpoint | Descripción | Cuerpo de Petición (Payload) |
| :--- | :--- | :--- | :--- |
| **GET** | `/products` | Recupera todos los productos de la base de datos | N/A |
| **GET** | `/products/:id` | Obtiene los detalles de un producto específico por ID | N/A |
| **POST** | `/products` | Inserta un nuevo producto (el `id` se auto-genera) | Objeto del producto sin `id` |
| **PUT** | `/products/:id` | Reemplaza completamente un producto existente | Objeto completo modificado |
| **PATCH**| `/products/:id` | Actualiza de manera parcial ciertos campos de un producto | Objeto con los atributos a modificar |
| **DELETE**| `/products/:id` | Elimina permanentemente el producto especificado | N/A |

### Usuarios (`/user`)

| Método | Endpoint | Descripción | Cuerpo de Petición (Payload) |
| :--- | :--- | :--- | :--- |
| **GET** | `/user` | Obtiene el listado completo de usuarios registrados | N/A |
| **GET** | `/user/:id` | Obtiene la información de un usuario por ID | N/A |
| **POST** | `/user` | Registra/crea un nuevo usuario (usado en el registro) | `{ email, name, password }` |
| **DELETE**| `/user/:id` | Elimina un usuario por ID | N/A |

### Categorías (`/category`)

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| **GET** | `/category` | Retorna todas las categorías cargadas |
| **GET** | `/category/:id` | Retorna una categoría en específico |

---

## ⚡ Funcionalidades Avanzadas de JSON Server

JSON Server cuenta con parámetros integrados de query strings para búsquedas, ordenamiento y paginación rápidos sin necesidad de código adicional:

### Filtros directos
Filtra registros que coincidan exactamente con un valor de propiedad:
*   `GET /products?status=AVAILABLE`
*   `GET /products?highlighted=true`

### Búsqueda global (Full-text Search)
Utiliza la propiedad `q` para buscar coincidencias de texto en cualquiera de los campos de la colección:
*   `GET /products?q=monitor` *(Retorna los productos que contengan la palabra "monitor")*

### Ordenamiento
Usa `_sort` y `_order` para ordenar las listas de resultados:
*   `GET /products?_sort=price&_order=asc` *(Ordena de menor a mayor precio)*
*   `GET /products?_sort=quantity&_order=desc` *(Ordena de mayor a menor según el stock)*

### Paginación
Divide los resultados usando `_page` y `_limit`:
*   `GET /products?_page=1&_limit=6` *(Obtiene los primeros 6 productos)*

---

## 🚀 Puesta en Marcha

### Instalación de Dependencias
```bash
npm install
```

### Ejecución del Servidor
```bash
npm run dev
```

El servidor quedará a la escucha en:
*   Local: `http://localhost:3000`
*   Red Local: `http://<IP_LOCAL_DE_TU_MAQUINA>:3000`
