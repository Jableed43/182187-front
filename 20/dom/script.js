document.addEventListener("DOMContentLoaded", () => {
// Este sistema utiliza formato JSON para guardar en localStorage

    //Inicializar las variables
    // Este es el contador de likes a lo largo de toda la ejecucion
    let likeCounter = 0

    // Selectores
    // Incrementa los likes
    const likeButton = document.getElementById("likeButton")
    // Muestra el valor numerico de los likes
    const likeCountDisplay = document.getElementById("likeCount")
    // resetea el conteo de likes
    const resetLikeButton = document.getElementById("resetLikeButton")

    // Carga los likes si empezas de 0 o refrescas la pantalla
    // va a buscarlos al localStorage y los muestra en el span likeCountDisplay
    function loadLikes() {
        // Poca informacion, guardada localmente y obtenida globalmente
        const savedCount = localStorage.getItem("myLikeCount")
        // Si savedCount existe (es decir no es nulo)
        // Ademas reviso si realmente es un dato valido
        // porque incluso si es string lo puedo convertir a numero
        if(savedCount !== null && !isNaN(savedCount) ){
            // parseInt es una funcion que convierte el string savedCount a valor numerico
            likeCounter = parseInt(savedCount)
            // actualizar el display con el dato almacenado
            likeCountDisplay.textContent = likeCounter
        }
    }
// Se encarga de guardar los likes que tengas en el likeCounter
    function saveLikes() {
        // Actualiza el contador o lo crea si no existe
        // de hecho en la primera ejecucion no existe...
        localStorage.setItem("myLikeCount", likeCounter)
    }

//     Manejar el clic del botón:
// ■ Añade un "escuchador" de eventos
// (addEventListener) al likeButton para el
// evento 'click'.
// ■ Dentro de la función que se ejecuta al hacer clic:
// ■ Incrementa tu variable likeCounter en 1.
// ■ Actualiza el textContent de
// likeCountDisplay con el nuevo valor de
// likeCounter.
// ■ Llama a tu función saveLikes() para
// guardar el nuevo valor en localStorage.
// ■ Efecto "pop" (opcional pero divertido): Añade
// la clase pop a likeCountDisplay, usa
// setTimeout() para esperar un momento
// (ej. 200 milisegundos) y luego quita la clase
// pop. Esto hará que el número se agrande y
// vuelva a su tamaño normal.

    likeButton.addEventListener("click", () => {
        // likeCounter = likeCounter + 1
        // incrementamos el likeCounter en 1
        likeCounter++
        // Actualiza el textContent de
        // likeCountDisplay con el nuevo valor de
        // likeCounter.
        likeCountDisplay.textContent = likeCounter
        // guardar el nuevo valor en localStorage
        saveLikes()
        // Efecto pop, se agranda y toma color verde
        likeCountDisplay.classList.add("pop")

        // esperar un momento
        // (ej. 200 milisegundos) y luego quita la clase
        // setTimeout -> Espera un tiempo, 200 milisegundos y luego de ese tiempo ejecuta el callback
        setTimeout(() => {
            likeCountDisplay.classList.remove("pop")
        }, 200)


    })
})