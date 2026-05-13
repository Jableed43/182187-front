# 🚀 Desafío DOM: El Personalizador de Perfil

Este desafío está diseñado para aplicar lo aprendido en las actividades de `input-full` (manipulación de estilos y valores) y `classlist` (gestión de estados mediante clases).

## 🎯 El Objetivo
Construir una "Tarjeta de Usuario" interactiva que reaccione a los controles del formulario en tiempo real.

---

## 🏗️ Paso 1: Estructura HTML
Copia este código en tu archivo `index.html`:

```html
<div id="app">
    <!-- VISTA PREVIA -->
    <div class="user-card" id="card">
        <h2 id="display-name">Tu Nombre Aquí</h2>
        <p>Estudiante de Programación</p>
    </div>

    <!-- CONTROLES -->
    <div class="form">
        <label>Nombre:</label>
        <input type="text" id="user-input" placeholder="Escribe tu nombre...">
        
        <label>Color de texto:</label>
        <input type="color" id="color-picker">
        
        <button id="theme-toggle">Cambiar Estilo (Dark/Light)</button>
    </div>
</div>
```

---

## 💻 Paso 2: El Desafío (JavaScript)

Escribe el código necesario para cumplir estas 3 misiones:

### Misión 1: Escritura Mágica
Haz que el texto dentro del `<h2>` cambie automáticamente mientras el usuario escribe en el input de texto.
*   **Concepto:** Evento `input` y propiedad `.textContent`.

### Misión 2: Selector de Personalidad
Haz que el color del nombre (`display-name`) cambie al color que el usuario elija en el selector de colores.
*   **Concepto:** Propiedad `.style.color`.

### Misión 3: Modo Oscuro
Haz que al pulsar el botón "Cambiar Estilo", la tarjeta (`#card`) alterne una clase CSS llamada `special-theme`. (Debes crear esta clase en tu CSS con un fondo oscuro y texto claro).
*   **Concepto:** Método `.classList.toggle()`.

---

## 💡 Consejos para el Éxito
1.  No olvides encerrar todo tu código en el evento `DOMContentLoaded`.
2.  Usa `const` para capturar los elementos del DOM al principio de tu script.
3.  Prueba tu código paso a paso: primero la escritura, luego el color y al final el botón.

---

**Material de Práctica - Nivel Inicial**
