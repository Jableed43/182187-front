document.addEventListener("DOMContentLoaded", function () {
    // Selectores de los elementos
    const textoInput = document.querySelector("#textoInput")
    const colorInput = document.querySelector("#colorInput")
    const fontSizeInput = document.querySelector("#fontSizeInput")
    const textDecorationInput = document.querySelector("#textDecorationInput")
    const fontFamilyInput = document.querySelector("#fontFamilyInput")
    const textAlignInput = document.querySelector("#textAlignInput")
    const letterSpacingInput = document.querySelector("#letterSpacingInput")
    const boldCheckbox = document.querySelector("#boldCheckbox")
    const italicCheckbox = document.querySelector("#italicCheckbox")
    const uppercaseCheckbox = document.querySelector("#uppercaseCheckbox")
    const lowercaseCheckbox = document.querySelector("#lowercaseCheckbox")
    const resultado = document.getElementById("resultado")

    // Funciones
    // La funcion para actualizar el texto del resultado
    function actualizarTexto() {
        const texto = textoInput.value
        // textContent permite acceder al texto
        resultado.textContent = texto
    }

    // Actualizar el color del resultado
    function actualizarColor() {
        const color = colorInput.value
        // style te permite acceder a todas las propiedades css del elemento
        resultado.style.color = color
    }

    function actualizarFontSize() {
        const fontSize = `${fontSizeInput.value}px`
        resultado.style.fontSize = fontSize
    }

    function actualizarDecoracion() {
        resultado.style.textDecoration = textDecorationInput.value
    }

    function actualizarFuente() {
        resultado.style.fontFamily = fontFamilyInput.value
    }

    function actualizarAlineacion() {
        resultado.style.textAlign = textAlignInput.value
    }

    function actualizarEspaciado() {
        const letterSpacing = `${letterSpacingInput.value}px`
        resultado.style.letterSpacing = letterSpacing
    }

    function actualizarBold() {
        // los checkbox en lugar de usar value, usar checked y este es un booleano
        resultado.style.fontWeight = boldCheckbox.checked ? "bolder" : "normal"
    }

      function actualizarItalic() {
    resultado.style.fontStyle = italicCheckbox.checked ? "italic" : "normal";
  }

  function actualizarUppercase() {
    if (uppercaseCheckbox.checked) {
      resultado.style.textTransform = "uppercase";
      lowercaseCheckbox.checked = false; // Desactivar la opción contraria
    } else {
      resultado.style.textTransform = "none";
    }
  }

  function actualizarLowercase() {
    if (lowercaseCheckbox.checked) {
      resultado.style.textTransform = "lowercase";
      uppercaseCheckbox.checked = false; // Desactivar la opción contraria
    } else {
      resultado.style.textTransform = "none";
    }
  }

    // AddEventListeners/ Eventos
    textoInput.addEventListener("input", actualizarTexto)
    colorInput.addEventListener("input", actualizarColor)
    fontSizeInput.addEventListener("input", actualizarFontSize)
    textDecorationInput.addEventListener("change", actualizarDecoracion)
    // input vs change -> input es en tiempo real, change es cuando algo se confirma como en el select option
    fontFamilyInput.addEventListener("change", actualizarFuente)
    textAlignInput.addEventListener("change", actualizarAlineacion)
    letterSpacingInput.addEventListener("input", actualizarEspaciado)
    boldCheckbox.addEventListener("change", actualizarBold)
    italicCheckbox.addEventListener("change", actualizarItalic)
    uppercaseCheckbox.addEventListener("change", actualizarUppercase)
    lowercaseCheckbox.addEventListener("change", actualizarLowercase)
})