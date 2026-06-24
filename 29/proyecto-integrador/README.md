# 🛍️ Proyecto Integrador - E-commerce Frontend

Este es el frontend del **Proyecto Integrador** desarrollado con **React**, **Vite** y **Bootstrap 5**. Es una aplicación web moderna (Single Page Application - SPA) de comercio electrónico interactiva que incluye autenticación de usuarios, gestión completa (CRUD) de productos y almacenamiento local de sesiones.

---

## 🚀 Características Principales

*   **Autenticación de Usuarios**: 
    *   Registro de usuarios (`/user/register`).
    *   Inicio de sesión (`/user/login`) con persistencia en `sessionStorage` mediante hooks dedicados.
    *   Cierre de sesión dinámico con cambio de estado global.
*   **CRUD Completo de Productos**:
    *   **Lectura**: Listado interactivo de productos con tarjetas descriptivas (`/products`).
    *   **Creación**: Formulario controlado para dar de alta nuevos productos con validación (`/products/create`).
    *   **Edición**: Formulario de edición con precarga de datos según ID (`/products/edit/:id`).
    *   **Eliminación**: Borrado seguro con confirmación del navegador.
*   **Enrutamiento Dinámico**: Sistema de rutas implementado con `react-router-dom` (v7).
*   **Diseño Responsivo**: Maquetado adaptable utilizando **Bootstrap 5**.

---

## 🛠️ Tecnologías y Librerías

El stack principal de desarrollo incluye:

*   **[React](https://react.dev/) (v19)**: Biblioteca core de JavaScript para construir interfaces de usuario declarativas y basadas en componentes.
*   **[Vite](https://vite.dev/) (v8)**: Herramienta de construcción frontend extremadamente veloz para el servidor de desarrollo y bundler de producción.
*   **[React Router](https://reactrouter.com/) (v7)**: Para el manejo de navegación interna y rutas dinámicas.
*   **[Bootstrap](https://getbootstrap.com/) (v5.3)**: Framework de CSS integrado mediante CDN para estilos rápidos y componentes responsivos.
*   **[ESLint](https://eslint.org/) (v10)**: Herramienta de análisis estático para garantizar la calidad y consistencia del código JavaScript.

---

## 📁 Estructura del Proyecto

A continuación se detalla la organización de los archivos del proyecto para facilitar su mantenimiento y escalabilidad:

```text
proyecto-integrador/
├── .env                  # Variables de entorno locales (URL de la API)
├── .env.example          # Plantilla para variables de entorno requeridas
├── index.html            # Punto de entrada HTML (Integra Bootstrap 5 desde CDN)
├── vite.config.js        # Configuración del empaquetador Vite
├── package.json          # Dependencias y scripts de ejecución npm
├── src/
│   ├── main.jsx          # Punto de entrada de React (montaje en el DOM)
│   ├── App.jsx           # Componente principal que envuelve el Layout
│   ├── App.css           # Estilos CSS globales y específicos
│   ├── router.jsx        # Configuración centralizada de rutas (React Router)
│   ├── config.js         # Configuración y mapeo de variables de entorno
│   ├── hooks/            # Hooks personalizados para separar la lógica de la UI
│   │   ├── products/     # Hooks para la gestión de productos
│   │   │   ├── useDeleteProduct.jsx
│   │   │   ├── useGetProductById.jsx
│   │   │   ├── useGetProducts.jsx
│   │   │   ├── usePatchProduct.jsx
│   │   │   └── usePostProduct.jsx
│   │   └── user/         # Hooks para la gestión de usuarios y sesión
│   │       ├── useAuth.jsx
│   │       ├── useLoginUser.jsx
│   │       └── useRegisterUser.jsx
│   └── components/       # Componentes de React estructurados por rol
│       ├── ProductCard.jsx  # Tarjeta individual para mostrar datos del producto
│       ├── Input.jsx        # Componente reutilizable para formularios
│       ├── layout/          # Componentes de estructura global de la página
│       │   ├── Header.jsx   # Barra de navegación adaptable (Navbar)
│       │   ├── Footer.jsx   # Pie de página de la aplicación
│       │   └── Layout.jsx   # Layout general (utiliza <Outlet />)
│       └── pages/           # Vistas o páginas principales de la aplicación
│           ├── Home.jsx              # Página de inicio
│           ├── Products.jsx          # Listado y visualización de productos
│           ├── CreateProductPage.jsx # Formulario de creación de producto
│           ├── EditProductPage.jsx   # Formulario de modificación de producto
│           ├── RegisterUserPage.jsx  # Registro de nuevo usuario
│           └── LoginUserPage.jsx     # Login de usuario existente
```

---

## ⚙️ Configuración del Entorno

La aplicación necesita conectarse a una API REST (generalmente un servidor `json-server` o un backend propio). Para configurar la URL de conexión:

1.  Crea un archivo llamado `.env` en la raíz del proyecto.
2.  Agrega la siguiente variable especificando la dirección de tu servidor backend:

```env
VITE_API_URL="http://localhost:3000/"
```

---

## 🚦 Instalación y Ejecución

Sigue estos pasos para levantar la aplicación en tu entorno local:

### Requisitos Previos

*   [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
*   Un gestor de paquetes como **npm** (incluido por defecto con Node.js) o **yarn**

### Paso 1: Instalar dependencias
Abre tu terminal en la raíz del proyecto y ejecuta:
```bash
npm install
```

### Paso 2: Ejecutar el servidor de desarrollo
Inicia el proyecto de forma local con soporte HMR (Hot Module Replacement) ejecutando:
```bash
npm run dev
```
La consola te mostrará la URL de acceso local (por defecto `http://localhost:5173/`).

---

## 🛠️ Scripts de npm Disponibles

*   `npm run dev`: Inicia el servidor de desarrollo local de Vite.
*   `npm run build`: Compila y optimiza la aplicación para el despliegue en producción dentro de la carpeta `dist`.
*   `npm run lint`: Ejecuta ESLint para analizar errores sintácticos y buenas prácticas de código.
*   `npm run preview`: Previsualiza localmente el build de producción generado.

---

## 🎯 Próximas Implementaciones (Roadmap)

Según las necesidades identificadas, se planifica implementar próximamente las siguientes funcionalidades:
1.  🛒 **Carrito de Compras**: Gestión de pedidos en tiempo real con persistencia.
2.  🔒 **Rutas Protegidas**: Restricción de acceso para rutas administrativas (`/products/create` y `/products/edit`) solo para usuarios autenticados.
3.  🛡️ **Panel de Administrador**: Listado de usuarios con filtros avanzados de búsqueda y asignación de roles.
