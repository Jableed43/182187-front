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
    const resetLikeCount = document.getElementById("resetLikeButton")

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

        // setTimeout(function(){
        //     likeCountDisplay.classList.remove("pop")
        // }, 200)
    })

    resetLikeCount.addEventListener("click", () => {
        likeCounter = 0
        likeCountDisplay.textContent = likeCounter
        // saveLikes guarda el cambio de que tenemos 0 likes
        saveLikes()
        // carga la cantidad de likes que tenemos que es 0
        loadLikes()
    })

    // Buscamos sincronizar la variable likeCounter, con el span del valor likeCountDisplay con el valor guardado en localStorage llamado myLikeCount

    loadLikes()
})