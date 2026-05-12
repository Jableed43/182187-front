// Aca yo le estoy diciendo al dom que se ejecute/lea el codigo que está dentro del bloque de codigo
// addEventListener significa escucha de eventos, esto significa que va a estar pendiente de cierto evento y puede ejecutar codigo cuando el evento sucede
// DOMContentLoaded es el evento -> espera que se cargue el contenido en el dom

document.addEventListener("DOMContentLoaded", function () {
    // Usar selectores para traer los elementos con los que vamos a trabajar
    // querySelector es una funcion que permite seleccionar cualquier elemento de nuestro DOM, etiquetas, clases, id's
    const titulo = document.querySelector(".titulo")
    const texto = document.querySelector(".texto")
    const inputTexto = document.querySelector(".input-texto")

    // Definir funciones que modifican clases de los elementos

    // Una funcion para pasarle la clase blue a un elemento
    function agregarBold() {
        texto.classList.add("blue")
    }

    // const agregarBold = function() {
    //     texto.classList.add("blue")
    // }

    function actualizarTexto() {
        // textContent -> lee o cambia el texto de un elemento
        // los inputs tienen su valor guardado en una propiedad llamada value
        console.log(texto.textContent)
        texto.textContent = inputTexto.value
        console.log(inputTexto.value)
    }

    function quitarBold() {
        texto.classList.remove("blue")
    }

    // toggle -> si hay lo quita, si falta lo agrega
    titulo.addEventListener("click", () => {
        titulo.classList.toggle("red")
    })

    // otra forma de escribirlo
    // titulo.onclick = () => {
    //     titulo.classList.toggle("red")
    // }

    // Escuchamos un evento y aplicamos el estilo
    // el evento mouseover significa pasar el mouse por encima
    texto.addEventListener("mouseover", agregarBold)
    // el evento mouseout significa quitar el mouse de encima
    texto.addEventListener("mouseout", quitarBold)

    // texto.addEventListener("mouseout", function quitarBold() {
    //     texto.classList.remove("blue")
    // })

// El evento input, significa ingresar/borrar datos en un input
    inputTexto.addEventListener("input", actualizarTexto)
})