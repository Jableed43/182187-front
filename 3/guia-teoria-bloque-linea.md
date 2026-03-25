# Guía Teórica: Semántica, Bloques y Líneas en HTML5 🚀

Esta guía está diseñada para entender la estructura profunda de una página web, diferenciando cómo se comportan los elementos visualmente y qué significado aportan al navegador y a los buscadores.

---

## 1. Elementos Semánticos vs. Funcionales 🧠

En HTML5, la distinción entre **semántica** y **funcionalidad** es clave para el SEO (Search Engine Optimization) y la accesibilidad.

### Etiquetas Semánticas (El "Qué es")
Aportan significado al contenido. Le dicen al navegador: "Esto no es solo una caja, es el encabezado" o "Esto es un artículo independiente".
*   **Ejemplos**: `<header>`, `<main>`, `<article>`, `<footer>`, `<nav>`.
*   **Beneficio**: Mejora la lectura por parte de bots (Google) y lectores de pantalla para personas con discapacidad visual.

### Etiquetas Funcionales (El "Para qué sirve")
Se utilizan para agrupar contenido o realizar acciones específicas sin aportar un significado temático intrínseco.
*   **Ejemplos**: `<div>`, `<span>`, `<button>`, `<form>`.
*   **Uso**: Estructurar el diseño o habilitar interactividad.

---

## 2. Comportamiento de Visualización: Bloque vs. Línea 📦

### Elementos en Bloque (`display: block`)
Son los "ladrillos" que construyen la estructura vertical de la página.
*   **Ancho**: Ocupan el 100% del ancho disponible de su contenedor padre por defecto.
*   **Salto de línea**: Siempre empiezan en una nueva línea y obligan al siguiente elemento a ir debajo.
*   **Caja**: Aceptan propiedades de `width`, `height`, `margin` y `padding` en todas sus direcciones.
*   **Ejemplos comunes**: `<div>`, `<h1>`-`<h6>`, `<p>`, `<ul>`, `<li>`, `<section>`, `<header>`, `<footer>`.

### Elementos en Línea (`display: inline`)
Son elementos que viven "dentro" del flujo de texto.
*   **Ancho**: Solo ocupan el espacio necesario para su contenido (texto o imagen).
*   **Salto de línea**: No generan saltos. Se colocan uno al lado del otro.
*   **Limitaciones**: **No** aceptan `width` ni `height`. El `margin` y `padding` vertical no afecta al flujo de los elementos circundantes.
*   **Ejemplos comunes**: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<small>`.

> [!TIP]
> **El Híbrido (`inline-block`)**: Existe un comportamiento intermedio (ajustable vía CSS) donde los elementos fluyen en línea pero permiten dimensiones y márgenes completos (ej: `<button>`, `<input>`).

---

## 3. Diccionario de Etiquetas y Semántica 📖

### Estructura Principal (Semántica)
| Etiqueta | Tipo | Descripción |
| :--- | :--- | :--- |
| `<header>` | Bloque | Encabezado de la página o de una sección. Suele contener el logo y el menú. |
| `<nav>` | Bloque | Contenedor de enlaces de navegación principal. |
| `<main>` | Bloque | Contenido único y principal de la página. Solo debe haber uno. |
| `<section>` | Bloque | Agrupa contenido relacionado temáticamente (ej: "Servicios", "Contacto"). |
| `<article>` | Bloque | Contenido autónomo que podría extraerse y tener sentido solo (posts, noticias). |
| `<aside>` | Bloque | Contenido tangencial (publicidad, barras laterales, "leer más"). |
| `<footer>` | Bloque | Pie de página. Datos de contacto, redes sociales o legales. |

### Tablas (Estructura de Datos)
| Etiqueta | Tipo | Descripción |
| :--- | :--- | :--- |
| `<table>` | Bloque | Contenedor principal de la tabla. |
| `<thead>` | Bloque | Encabezado de la tabla (nombres de columnas). |
| `<tbody>` | Bloque | Cuerpo de la tabla (los datos reales). |
| `<tr>` | Bloque | Fila de la tabla (Table Row). |
| `<th>` | Bloque | Celda de encabezado (Table Header). Suele estar en negrita. |
| `<td>` | Bloque | Celda de datos estándar (Table Data). |

### Formularios (Interacción)
| Etiqueta | Tipo | Descripción |
| :--- | :--- | :--- |
| `<form>` | Bloque | Contenedor principal para recolección de datos. |
| `<label>` | Línea | Etiqueta de texto para un input (mejora la accesibilidad). |
| `<input>` | Híbrido | Campo de entrada de datos (el `type` define su forma). |
| `<button>` | Híbrido | Botón para enviar (`submit`) o resetear el formulario. |
| `<textarea>`| Híbrido | Campo de texto multilínea (para mensajes largos). |
| `<select>` | Híbrido | Menú desplegable de opciones. |

### Contenido de Texto y Estructura
| Etiqueta | Tipo | Descripción |
| :--- | :--- | :--- |
| `<div>` | Bloque | Contenedor genérico sin significado semántico. Para diseño y CSS. |
| `<h1>`-`<h6>` | Bloque | Títulos jerárquicos. `<h1>` es el más importante (título de la página). |
| `<p>` | Bloque | Define un párrafo de texto. |
| `<ul>`/`<ol>` | Bloque | Listas desordenadas (puntos) u ordenadas (números). |
| `<li>` | Bloque | Ítem individual dentro de una lista. |
| `<span>` | Línea | Contenedor genérico en línea para aplicar estilos a fragmentos de texto. |
| `<a>` | Línea | Hipervínculo a otras secciones o páginas. |
| `<strong>` | Línea | Indica importancia fuerte (se ve en negrita por defecto). |
| `<em>` | Línea | Indica énfasis (se ve en cursiva por defecto). |

---

## 4. Atributos: El Poder Oculto de las Etiquetas ⚙️

Los atributos son propiedades que añadimos a las etiquetas para configurar su comportamiento o darles información extra. Se escriben siempre en la **etiqueta de apertura**.

### Atributos Globales (Para casi todas las etiquetas)
*   **`id`**: Un identificador **único** en toda la página. Útil para JS y enlaces internos.
*   **`class`**: Un identificador que puede repetirse. Se usa principalmente para aplicar estilos CSS.
*   **`style`**: Permite escribir CSS directamente en la etiqueta (no es buena práctica, pero útil para pruebas).
*   **`title`**: Muestra un pequeño cartelito (tooltip) cuando pasas el mouse por encima.
*   **`lang`**: Define el idioma del contenido (ej: `lang="es"`).
*   **`hidden`**: Oculta el elemento de la vista.

### Atributos Específicos (Los más comunes)
*   **`href`** (en `<a>`): La dirección de destino del enlace.
*   **`src`** (en `<img>`, `<video>`): La ruta del archivo multimedia.
*   **`alt`** (en `<img>`): Texto alternativo para accesibilidad.
*   **`target`** (en `<a>`): Define dónde se abre el link (ej: `_blank` para pestaña nueva).
*   **`placeholder`** (en `<input>`): Texto de ayuda que desaparece al escribir.
*   **`type`** (en `<input>`, `<button>`): Define el tipo de dato (text, password, submit).
*   **`value`**: Define el valor inicial o el dato que se enviará al servidor.
*   **`name`**: El nombre que recibirá el dato en el servidor (como la etiqueta de una caja).

### Tipos de Input más comunes
Dentro de la etiqueta `<input type="...">` podemos cambiar totalmente su función:
*   **`text`**: Texto simple de una línea.
*   **`password`**: Oculta los caracteres con puntos.
*   **`email`**: Valida que el texto tenga formato de correo (@).
*   **`number`**: Solo permite números y muestra flechitas para subir/bajar.
*   **`date`**: Muestra un calendario para elegir fecha.
*   **`checkbox`**: Casilla de verificación (múltiples opciones).
*   **`radio`**: Botón de opción (solo una opción por grupo).
*   **`file`**: Permitir subir archivos desde la computadora.

---

## 5. Etiquetas en Desuso y su Reemplazo Moderno ⚠️

El estándar HTML5 eliminó o cambió el propósito de etiquetas que se encargaban solo de la "apariencia", delegando esa tarea al CSS.

| Etiqueta Vieja | Motivo del Desuso | Reemplazo Recomendado |
| :--- | :--- | :--- |
| `<center>` | Era solo visual. | Usar CSS: `text-align: center;` o Flexbox. |
| `<font>` | Controlaba color/tamaño. | Usar CSS: `color`, `font-size`, `font-family`. |
| `<big>` | Solo agrandaba el texto. | Usar CSS: `font-size: larger;` o etiquetas de encabezado. |
| `<strike>` | Texto tachado. | Usar `<s>` (semántica de irrelevancia) o CSS `text-decoration`. |
| `<acronym>` | Confundía con `<abbr>`. | Usar siempre `<abbr title="...">`. |
| `<frameset>` / `<frame>`| Problemas de accesibilidad y SEO.| Usar `<iframe>` o componentes de frontend modernos. |
| `<applet>` | Tecnología Java obsoleta. | Usar `<object>`, `<embed>` o `<canvas>`. |
| `<b>` / `<i>` | Eran solo visuales. | Usar `<strong>` (importancia) o `<em>` (énfasis). |

---

## 6. Resumen para la Clase 🎓

1.  **Dibuja un rectángulo**: Explica que los elementos de **bloque** son rectángulos que se apilan uno sobre otro.
2.  **Escribe una oración**: Explica que los elementos de **línea** son como las palabras en una hoja: fluyen una tras otra hasta el final del renglón.
3.  **Metáfora de los Atributos**: Piensa en una etiqueta como un "Persona" y sus atributos como sus "Ropa y Accesorios" (un ID es su DNI, una Clase es su uniforme, el SRC es lo que lleva en la mano).
4.  **La analogía del periódico**:
    *   **Main**: La portada.
    *   **Header**: El nombre del diario.
    *   **Section**: La sección de deportes o política.
    *   **Article**: Una noticia específica.
    *   **Aside**: El clima o el horóscopo en el lateral.
