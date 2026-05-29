# 🌡️ Práctica de React: Conversor de Temperatura (°C a °F)

¡Hola! Ahora que ya construimos un **contador de likes** y una **calculadora interactiva**, es momento de poner en práctica lo aprendido creando nuestra propia herramienta de conversión de temperatura. 

El objetivo es crear una aplicación donde el usuario ingrese una temperatura en **grados Celsius (°C)** y obtenga al instante su equivalente en **grados Fahrenheit (°F)**.

---

## 🎯 ¿Qué vas a practicar en este ejercicio?
* **Crear y gestionar el estado** en React usando el hook `useState`.
* **Capturar datos** ingresados por el usuario mediante un `<input>` y el evento `onChange`.
* **Manipular datos** en controladores de eventos (`handlers`).
* **Renderizar dinámicamente** los resultados matemáticos en pantalla en tiempo real.

---

## 📐 La Fórmula Matemática
Para pasar de grados Celsius a grados Fahrenheit, la ecuación que debemos usar es:

$$\text{Fahrenheit} = (\text{Celsius} \times 1.8) + 32$$

*(O en código JavaScript: `(celsius * 1.8) + 32`)*

---

## 🚀 Pasos sugeridos para la resolución

### 1. Inicializar el proyecto
Si vas a trabajar en una carpeta nueva:
1. Abre tu terminal en la carpeta correspondiente.
2. Asegúrate de tener los archivos iniciales limpios y listos para programar en tu componente `App.jsx`.

### 2. Configurar los Estados (`useState`)
En la parte superior de tu componente `App` vas a necesitar gestionar la información:
* Crea un estado para guardar el número de grados Celsius que escriba el usuario (puedes llamarlo `celsius` y `setCelsius`).
* Inicialízalo con un valor numérico por defecto (por ejemplo, `0`).
* *Opcional:* Puedes crear un estado para el `resultado`, o calcularlo directamente en la renderización.

### 3. Crear la Interfaz (JSX)
Dentro del `return` del componente, estructura los elementos HTML básicos:
* Un título llamativo con `<h1>`.
* Una etiqueta `<label>` y un `<input type="number">` donde el usuario escriba los grados.
* Un **botón** que diga "Convertir" (o bien resolverlo en tiempo real).
* Una sección o contenedor donde se muestre claramente el resultado final. ¡Dale un diseño amigable!

### 4. Capturar la Entrada del Usuario (`onChange`)
* Asigna la variable de estado `celsius` al atributo `value` del input.
* Utiliza el evento `onChange` del input para capturar lo que el usuario escribe.
* **⚠️ Muy importante:** Recuerda que el valor que obtenemos de los inputs (`evento.target.value`) siempre llega como texto (*string*). Asegúrate de transformarlo en número usando la función `Number()` antes de guardarlo en tu estado:
  ```javascript
  onChange={(e) => setCelsius(Number(e.target.value))}
  ```

### 5. Crear la Función de Conversión (`handler`)
* Escribe una función (por ejemplo: `const handleConvertir = () => { ... }`) que realice el cálculo matemático usando el valor guardado en el estado `celsius`.
* Guarda el resultado calculado en un estado para mostrarlo.
* Conecta esta función al botón mediante el atributo `onClick`.

---

## 🌟 Desafíos Opcionales (Para ir más allá)

Si terminaste rápido y quieres seguir ganando superpoderes con React, prueba agregar estos desafíos:
1. **Conversión en tiempo real ⚡**: Haz que el resultado se calcule automáticamente en pantalla a medida que el usuario escribe en el input, *¡sin necesidad de presionar ningún botón de conversión!*
2. **Botón de Limpieza 🧹**: Añade un botón "Reset" que devuelva el input a `0` y limpie el resultado actual.
3. **El camino inverso 🔄**: Agrega otro input u otra sección para poder convertir también de **Fahrenheit a Celsius** (Fórmula: `(fahrenheit - 32) / 1.8`).

---

¡Muchos éxitos! Si te trabas en algún paso, vuelve a mirar cómo capturamos el evento en la calculadora o cómo modificamos el estado en el contador de likes. ¡Tú puedes! 💪
