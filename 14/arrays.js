// Metodos de array
// La mayoria de los tipos de dato poseen funciones internas
// herramientas para trabajar con los tipos de dato

// forEach -> Por cada uno - 2009
let nombres = ["ana", "luis", "mateo", "franco", "mora"]

// Toma cada item-elemento de un array y es procesado por una funcion

// el console.log representa algo llamado callback
// callback es una funcion utilizada dentro de otra funcion
// nombres.forEach(nombre => console.log(nombre))

// nombres.forEach(nombre => {
//     if(nombre === "franco"){
//         console.log(nombre)
//     }
// })

// La diferencia entre for of y forEach es que el forEach puede usar
// un callback y el for of solo opera sobre los numeros que le pasaste

// una funcion es codigo reutilizable
// considera las funciones como herramientas para propositos especificos
// O sea, en vez de escribir lo mismo varias veces, lo metes dentro de una función y la llamas cuando la necesitas
// Dont Repeat Yourself
// la mejor funcion es la mas adaptable para el proposito esperado
function seleccionaNombre(busqueda, item) {
    if(busqueda === item){
        console.log(busqueda)
    }
}

nombres.forEach(nombre => seleccionaNombre("franco", nombre))

// map - 2009
// la gran diferencia del map es que como resultado te da un array
// no modifica el array original
let numbers = [1,2,3]

let dobles = numbers.map(number => number * 2)

console.log(dobles[0])
// Lo mismo pero con forEach
// let resultado = []
// numbers.forEach(number => {
//     let valor = number * 2
//     // push -> añade un elemento en un array
//     resultado.push(valor)
// })
// console.log(resultado)

// Convertir temperaturas Celsius a Fahrenheit
let temperaturasCelsius = [0, 15, 25, 30];
let temperaturasFahrenheit = temperaturasCelsius.map(c => c * 1.8 + 32);
console.log(temperaturasFahrenheit);  // [32, 59, 77, 86]

// Filter -> filtra valores segun condicion - 2009
// filter tambien genera un array como map
// el filter reune-guardar valores por una condicion
// el filter elimina-discrimina valores por una condicion

let nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100] 

// genera un nuevo array
// si no encuentra valores devuelve un array vacio []
let m50 = nums2.filter(num => num > 50)
console.log(m50)
// tener en cuenta que asi debe ser una condicion para filter si buscas que el array tenga elementos
if(m50.length === 0){
    console.log("Esta vacio!")
} else {
    console.log("no esta vacio!")
}

// Find -> encontrar. Encuentra el primer valor que cumple con la condicion
// si find encuentra el valor que cumple la condicion, entonces lo muestra
const busqueda = nums2.find(num => num === 0)
console.log({busqueda})
if(busqueda || (typeof busqueda === "number")){
    console.log("el numero existe")
} else {
    console.log("el numero no existe")
}
