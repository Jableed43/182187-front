# 🚀 Trabajo Práctico: Dominando el DOM con JavaScript

¡Bienvenido al laboratorio de manipulación del DOM! En esta sesión, dejarás de escribir HTML estático para empezar a crear interfaces que **reaccionan** al usuario.

## 🎯 Objetivo General
Desarrollar habilidades de selección, modificación de estilos, gestión de clases y creación dinámica de elementos mediante JavaScript nativo.

---

## 📂 Actividades a realizar

### 1. El Interruptor Inteligente (`/dom/classlist`)
*   **Misión:** Aprender a cambiar el "estado" de un componente.
*   **Consigna:** Implementa un botón que, al ser clickeado, alterne una clase CSS en un elemento de la página. 
*   **Reto:** El elemento debe cambiar visualmente (color, borde o visibilidad) cada vez que toques el botón.
*   **Conceptos clave:** `querySelector`, `addEventListener('click', ...)` y `.classList.toggle()`.

### 2. Editor en Tiempo Real (`/dom/input-full`)
*   **Misión:** Capturar datos del usuario y ver resultados inmediatos.
*   **Consigna:** Crea un formulario con inputs de tipo texto y color. Lo que el usuario escriba debe reflejarse en un título en tiempo real, y el color elegido debe aplicarse al fondo de una tarjeta.
*   **Conceptos clave:** Evento `input`, propiedad `.value` y manipulación de `.style` (recordar el uso de *camelCase* como `backgroundColor`).

### 3. Fábrica Dinámica de Nodos (`/dom/creacion-dinamica`)
*   **Misión:** Construir la interfaz desde el código.
*   **Consigna:** Desarrolla un sistema donde, al presionar un botón, se cree un nuevo elemento HTML (como un `<li>` o un `<div>`) con un texto específico y se añada automáticamente a un contenedor existente.
*   **Conceptos clave:** `document.createElement`, `.textContent` y `.appendChild`.

### 4. Lógica de Interfaz y Estado (`/dom/extra`)
*   **Misión:** Aplicar lógica condicional a la vista.
*   **Consigna:** Implementa un contador o sistema de validación. La interfaz debe cambiar su estilo dependiendo del valor (ejemplo: si el número es mayor a 10, el texto se pone verde; si es menor a 0, se pone rojo).
*   **Conceptos clave:** Lógica `if/else` aplicada a propiedades del DOM.

---

## 💡 Consejos de Supervivencia
*   **Seguridad:** Prefiere siempre `.textContent` antes que `.innerHTML` para evitar inyecciones de código.
*   **Orden:** Selecciona tus elementos al principio del script y guárdalos en constantes (`const`).
*   **Depuración:** Si un elemento no se comporta como esperas, usa `console.log(miElemento)` para ver su estado real en la consola del navegador.

---

**¡A darle vida a ese HTML! 🚀**

---

**Material de Apoyo - UTN Frontend**
