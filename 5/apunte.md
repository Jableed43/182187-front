# 📚 Apunte de Clase: Modelo de Cajas, Fondos e Iconos (Frontend Tema 05-B)

Este documento resume los conceptos fundamentales vistos hoy para que los tengas a mano al desarrollar tus proyectos.

---

## 1. El Modelo de Cajas (Box Model) 📦

Cada elemento HTML se visualiza como una caja rectangular. Se compone de 4 capas (de afuera hacia adentro):

1.  **Margin (Margen):** Espacio transparente que separa la caja de otras.
2.  **Border (Borde):** Línea que rodea el relleno y el contenido.
3.  **Padding (Relleno):** Espacio interno entre el borde y el contenido.
4.  **Content (Contenido):** Donde vive el texto o imagen.

### Diferencia Clave: `box-sizing`

*   **`content-box` (por defecto):** El ancho (`width`) solo afecta al contenido. Al agregar padding o borde, la caja **crece visualmente**.
*   **`border-box` (Recomendado):** El ancho (`width`) incluye el padding y el borde. La caja **mantiene su tamaño fijo**.

**💡 Regla de Oro:** Empieza todos tus proyectos con este reset en CSS para que el diseño sea predecible:
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

---

## 2. Propiedades de Fondo (Background) 🖼️

Las propiedades de fondo te permiten dar personalidad visual a tus sitios.

*   **`background-color`**: Colores planos o transparentes (`rgba`).
*   **`background-image`**: Carga de imágenes con `url('')`.
*   **`background-size: cover`**: Hace que la imagen cubra todo el contenedor sin deformarse (Imprescindible).
*   **`background-attachment: fixed`**: Crea el **efecto Parallax** (la imagen se queda quieta al hacer scroll).
*   **`background-position: center`**: Centra la imagen de fondo.
*   **Gradients (Degradados)**: Transiciones de color generadas por código.
    *   Ejemplo: `background: linear-gradient(90deg, #333, #666);`

---

## 3. Unidades de Medida en CSS 📊

| Unidad | Tipo | Uso Recomendado |
| :--- | :--- | :--- |
| **`px`** | Absoluta | Detalles fijos (bordes, sombras). |
| **`%`** | Relativa al Padre | Ancho de columnas y contenedores. |
| **`rem`** | Relativa a la Raíz | **Tipografía (font-size)** y márgenes generales. |
| **`em`** | Relativa al Padre | Padding de componentes pequeños (botones). |
| **`vw` / `vh`** | Viewport | Altura de la pantalla completa (`100vh`). |

---

## 4. Tipografía e Iconos (FontAwesome) ✒️

### Google Fonts
Para cargar fuentes externas. Se importan en el `<head>` del HTML o mediante `@import` en el CSS. Una vez cargadas, aplicamos el nombre con `font-family`.

### FontAwesome
Los iconos de FontAwesome se instalan mediante un **Kit (Script)** en el HTML y se usan con la etiqueta `<i>`.
*   **Se estilizan como texto:** Puedes cambiar su tamaño con `font-size` y su color con `color`.
*   **Clases comunes:** `fa-solid fa-house`, `fa-brands fa-github`.

---

## 5. Alineación Clásica (Sin Flexbox) 🏗️

Cuando no usamos Flexbox o Grid, recurrimos a:
1.  **`display: inline-block`**: Permite poner elementos uno al lado de otro respetando márgenes y rellenos.
2.  **`vertical-align: top`**: Alinea la "cabeza" de los elementos `inline-block` para que no se desordenen por el texto interno.
3.  **`text-align: center`**: En el contenedor padre, centrará cualquier contenido que sea `inline-block` o texto.

---

## 🚀 Tips de Supervivencia:
*   **Rutas de imágenes:** En el CSS, las imágenes se buscan con `url('bg.png')`. Si el CSS está en una subcarpeta, usa `url('../bg.png')`.
*   **Imagen Invisible:** Si pones una imagen de fondo y el `div` no tiene contenido, mide 0px de alto. Usa `min-height: 400px;` para verlo.
*   **Inspector del Navegador (F12):** Haz clic derecho en "Inspeccionar" para ver el gráfico del Modelo de Caja de cualquier elemento.
