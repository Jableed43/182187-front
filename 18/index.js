// 1. Referencia a los elementos del DOM
const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")

//2. Funcion para crear boton de eliminar - reutilizable
// Esta funcion es una fabrica de botones, tienen la capacidad de eliminar a su padre
function createDeleteButton() {
    // Podemos crear elementos con el DOM
    const deleteBtn = document.createElement("button")
    // Le ponemos texto al boton
    deleteBtn.textContent = "Eliminar"
    // Le añadimos una clase
    deleteBtn.className = "delete-btn"
    
    // Añadirle un evento
    // Es un efecto en la animacion
    deleteBtn.addEventListener("click", function() {
        this.parentNode.style.transform = "translateX(100%)"
        this.parentNode.style.opacity = "0"

        // temporizador, despues de cierto tiempo se ejecuta un callback
        setTimeout(() => {
            this.parentNode.remove()
            // Borra la tarea y actualizar el contador de tareas
            // updateTaskCounter()
        }, 300)
        
    })

    return deleteBtn;
}

//3. Funcion para crear el span de la tarea que contiene al texto
function createTaskSpan(text) {
    const taskSpan = document.createElement("span")
    // guardamos el texto en el span
    taskSpan.textContent = text;
    taskSpan.className = "task-text"

    taskSpan.addEventListener("click", function() {
        // si no tenes la clase completed la agrega, si la tenes la quita
        this.parentNode.classList.toggle("completed")
    })

    // Soporte para teclado
    taskSpan.addEventListener("keypress", function(evento) {
        // Si el enter fue presionado o la barra espaciadora...
        if(evento.key === "Enter" || evento.key === " "){
            // Validacion, previene el comportamiento por defecto de un formulario?
            // el formulario refresca la pantalla cuando un boton es utilizado dentro
            // sobretodo si el botón tiene type submit
            evento.preventDefault()
            // añade o quita la clase completed
            this.parentNode.classList.toggle("completed")
        }
    })
    return taskSpan
}

function agregarTarea() {
    // trim elimina espacio delante y detras del string
    const taskText = taskInput.value.trim()

    // Crear los elementos LI
    const listItem = document.createElement("li")
    listItem.className = "task-item"

    // tenemos que rellenar el listItem con los elementos creados, como el boton de eliminar
    // Creamos el deleteBtn con la funcionalidad y los estilos
    const deleteBtn = createDeleteButton()
    // Recordar pasarle el argumento al createTaskSpan
    const taskSpan = createTaskSpan(taskText)

    // EL ORDEN EN QUE APPENDEAS LOS HIJOS ES EL ORDEN DE ESCRITURA EN EL HTML
    // añadimos texto de la tarea
    listItem.appendChild(taskSpan)

    // lo añadimos al LI
    listItem.appendChild(deleteBtn)

    taskList.appendChild(listItem)

    // limpieza del input, lo dejamos vacio sin texto
    taskInput.value = ''
    // hacemos focus sobre el input, facilita la rapida escritura de tareas
    // no pierde el foco del input
    taskInput.focus()

    // Agregar animacion de entrada
    listItem.style.opacity = "0"
    listItem.style.transform = "translateY(-10px)"

    setTimeout(() => {
        listItem.style.transition = "all 0.3 ease"
        listItem.style.opacity = "1"
        listItem.style.transform = "translateY(0)"
    }, 10)
}

addTaskBtn.addEventListener("click", agregarTarea)



document.addEventListener("DOMContentLoaded", function () {
    
})