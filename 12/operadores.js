/* Operadores */
// Aritmeticos
console.log(2*2)
console.log(2+2)
console.log(2-2)
console.log(2/2)

// Modulo: devuelve el resto de una division
// encontrar numeros pares e impares
// si da 0 es par, si da 1 es impar
console.log(8%2)
console.log(10%3)

// Exponenciacion
console.log(2**3)

// Raiz cuadrada
console.log(Math.sqrt(16))

// Operadores de asignacion compuestos
let numero = 10

// Si a numero le quiero sumar 5 y quiero guardar el valor del resultado en numero
// es una forma de acumulacion
numero += 5 // numero = numero + 5 -> 15
numero -= 3 // numero = numero - 3 -> 12
numero *= 2 // numero = numero * 2 -> 24
numero /= 4 // numero = numero / 4 -> 6
console.log(numero)

// Operadores logicos

// Igualdad de valores - solo compara valores, no tipo
console.log(5 == "5") // comparacion convierte los tips

// Igualdad estricta (Recomendada) - Compara valor y tipo
console.log(5 === "5")
console.log(5 === 5)

// Desigualdad o negacion - ! NOT
console.log(5 != "5") // false, no son distintos
console.log(5 !== "5") // si son distintos

// Comparaciones numericas
console.log(10 > 5)
console.log(10 < 5)
console.log(10 >= 10)
console.log(10 <= 9)