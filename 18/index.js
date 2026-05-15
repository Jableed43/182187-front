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
            updateTaskCounter()
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

    // Estos son dos caminos caminos posibles en el flujo, por click o por teclado

    taskSpan.addEventListener("click", function() {
        // si no tenes la clase completed la agrega, si la tenes la quita
        this.parentNode.classList.toggle('completed');
        updateTaskCounter()
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
            updateTaskCounter()
        }
    })
    return taskSpan
}

//4. Funcion para actualizar el contador de tareas
// Esta tarea sirve para aprender a maquetar desde js
function updateTaskCounter() {
    // Largo total de los elementos hijos de la lista de tareas
    const totalTasks = taskList.children.length;

    // Como sabemos cuales tareas estan completadas?
    const completedTasks = taskList.querySelectorAll(".completed").length;

    // Crear o actualizar contador
    let counter = document.getElementById("taskCounter")
    // Si no lo tenemos aun lo creamos
    if(!counter){
        counter = document.createElement("div")
        counter.id = "taskCounter"
        counter.className = "task-counter"
        // añadimos dentro de la clase container el counter antes de la taskList
        document.querySelector(".container").insertBefore(counter, taskList)
    }

    // Vamos a maquedar el div!!
    // innerHTML es literalmente el HTML que querés
    counter.innerHTML = `
        <span>Total: ${totalTasks} </span>
        <span>completadas: ${completedTasks} </span>
        <span>Pendientes: ${totalTasks - completedTasks} </span>
    `
}

function agregarTarea() {
    // trim elimina espacio delante y detras del string
    const taskText = taskInput.value.trim()

    // Crear los elementos LI
    const listItem = document.createElement("li")
    listItem.className = "task-item"

    // tenemos que rellenar el listItem con los elementos creados, como el boton de eliminar
    // Recordar pasarle el argumento al createTaskSpan
    const taskSpan = createTaskSpan(taskText)
    // Creamos el deleteBtn con la funcionalidad y los estilos
    const deleteBtn = createDeleteButton()
    
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

    // Actualizar contador
    updateTaskCounter()

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

// Para la proxima clase -> limpiar completadas y validar el input