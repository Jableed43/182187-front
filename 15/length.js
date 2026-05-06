// length -> Propiedad que indica la cantidad de elementos en el array.

// Ejercicio 1: Verificar si un carrito de compras está vacío. Crea un array carrito. Si la longitud es 0, imprime "Carrito vacío", si no, imprime la cantidad de elementos.

// Condicion longitud 0 -> carrito vario sino imprime cantidad de elementos , array carrito

// let carrito = [1,2,3,4,5,6,7,8,9,10]
// if(carrito.length === 0){
//     console.log("Carrito vacio")
// } else {
//     // console.log(carrito.length)
//     console.log(`El carrito tiene ${carrito.length} elemento/s`)
// }

// function largoCarrito(productos) {
//     if(productos.length === 0){
//     return {
//         mensaje: "Carrito vacio",
//         largo: productos.length
//     }
//     } else {
//         // console.log(carrito.length)
//         return {
//         mensaje: `El carrito tiene ${productos.length} elemento/s`,
//         largo: productos.length
//     }
//     }
// }

// console.log(largoCarrito([]))


// Ejercicio 2: Saber el último elemento de una fila. Crea un array fila con 4 nombres. Usa length para acceder al último elemento dinámicamente y muéstralo.

let fila = ["juan", "mateo", "gonzalo", "valentino", "javier", "agustina"]
// siempre accede al ultimo -> fila[fila.length-1]
console.log(fila[fila.length-1])

// Ejercicio 5: Asientos de cine. Tienes un array vacio de asientosVendidos. Alguien compra 3 boletos (agrega 3 elementos). Muestra la cantidad total de asientos vendidos usando length.

let asientosVendidos = ["A10", "A11", "A12"]
console.log(`Cantidad de asientos vendidos: ${asientosVendidos.length}, los cuales son: ${asientosVendidos}`)

// Ejercicio 4: Calcular el promedio. Dado un array de notas con valores numéricos, suma sus tres primeros valores y divide por el length del array.

const notas = [8,9,10]
// promedio -> suma de todos los valores dividido por la cantidad de valores
// var promedio = (notas[0] + notas[1] + notas[2]) / notas.length

// ahora con forEach
let suma = 0

notas.forEach(nota => {
    suma += nota
})
console.log(suma)
var promedio = suma / notas.length
console.log(promedio)


