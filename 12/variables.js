// Variables funcionan como contenedor de datos
// Palabra reservada -> tiene funcion en el lenguaje

// inicializacion, creas la variable
var colorTaza

// invocacion o llamado, se llama por su nombre para utilizarla (operarla o leerla)
colorTaza

// asignacion
colorTaza = "blanco"

// inicializacion + asignacion
var colorZapato = "negro"

// La comparacion es por valor
console.log("blanco" === colorTaza)
console.log(colorTaza === "blanco")

// lo negativo de var es que permite la reasignacion, reinicializacion de una variable. No asegura que te guarde el valor que necesitas. Es poco segura. 
var colorZapato = "azul"

/* Variables que si vamos a usar */
// let
// No permite redeclaracion
// Trabaja con scope

let color_calzado = "naranja"
// color_calzado = "celeste"

function calzado() {
    let color_calzado = "blanco"
    console.log("Dentro de la funcion calzado ", color_calzado)
}

calzado()
console.log("Fuera de la funcion calzado ",color_calzado)

// const
// No permite redeclaracion
// No permite reasignacion
// Trabaja con scope
// es un valor que no va a cambiar
// solo se cambia donde se escribio
// datos que guardamos en constantes:
// puertos, dni, podria ser una ip
const dni = 11111111

function mostrarDni() {
    const dni = 33333333
    console.log(dni)
}

// los parentesis en la funcion indican que se esta ejecutando
console.log(dni)
mostrarDni()

// Formas de cambiar los datos de una constante
// modificando un objeto o un array
const profesor1 = {
  nombre: "javier",
  apellido: "lopez",
};

profesor1.apellido = "gutierrez"
console.log(profesor1)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numeros[1] = 11
console.log(numeros)