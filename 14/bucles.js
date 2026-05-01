// While -> mientras - 1995
// Mientras la condicion sea verdadera se ejecuta.

//Contador
let contador = 1

// Funciona mientras la condicion se cumple
// while (contador <= 500) {
//     console.log(contador)
//     contador++
// }

// La bomba
let bomba = 300

// while (bomba > 0) {
//     console.log(bomba)
//     bomba--
//     // bomba = bomba - 5
// }

console.log("BOOM!")

// For - 1995
// tabla del dos
for (let index = 1; index <= 10; index++) {
    // console.log(2*index)
    // template literals + concatenacion
    console.log(`2 x ${index} = ${2*index}`)
    // console.log("2 x ", index, " = ", 2*index)
    // console.log("2 x " + index + " = " + 2*index)
}

// Pares -> muestra un listado de numeros pares desde el cero hasta el 100
for (let index = 0; index <= 100; index += 2) {
    console.log(index)
}

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100] 

for (let index = 0; index < nums.length; index++) {
    if(nums[index]%2 === 0){
        console.log(`Es par ${nums[index]}`)
    }
}

// For of - 2015
// lee los valores de una lista directamente
// los bucles sirven para realizar acciones sobre datos de forma masiva

const frutas = ["manzana", "pera", "banana", "papaya"]

// for(const fruta of frutas) {
//     console.log(fruta)
// }

// suma agregada
const precios = [5000, 10000, 50000]
let total = 0

for(const precio of precios){
    total += precio
}
console.log("Total: ", total)