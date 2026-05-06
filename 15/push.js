// Push: Agrega uno o más elementos al final del array. Modifica el array original

// Ejercicio 1: Registro de usuarios. Crea un array vacío usuarios. Usa push para agregar a "Carlos" y "Maria". Muestra el array.

var usuarios = []
// usuarios.push("Carlos")
// usuarios.push("Maria")
// usuarios.push("Carlos", "Maria", ["javier"], false, 15)
// console.log(usuarios)
// usuarios.push("Cristian")
// console.log(usuarios)

// Spread operator -> desparrama los elementos para que queden disponibles

var usuarios = []

let nuevosUsuarios = ["Carlos", "Maria"]
// nuevosUsuarios.push(...nuevosUsuarios)

usuarios.push(...nuevosUsuarios )

console.log(nuevosUsuarios)

