// Es una forma de estructurar varias funciones a la vez
// Se suele utilizar cuando tenes varias funciones relacionadas
export const mathOperations = {
    suma: (a,b) => {
        return a + b
    },
    resta: (a,b) => {
        if(a<b){
            console.error("Error: No se puede restar un numero mayor a un numero menor")
            return 0
        }
        return a - b
    },
    // Esta es una simplificacion con funcion flecha
    // no usa llaves ni tampoco usa retorno
    // porque la => cumple la funcion del bloque y del retorno
    // Esto se usa cuando la funcion es muy corta
    multiplicacion: (a, b) => a * b,
    division: (a, b) => {
        if(b===0){
            console.error("No se puede dividir por cero")
            return 0
        } 
        if(a < b){
            console.error("Estas tratando dividir un numero menor por un numero mayor")
            return 0
        }
        return a / b
    }
}

// export function suma(a, b) {
//     return a + b
// }