/* Funciones:
Codigo reutilizable para tareas especificas
Dont repeat yourself
Porque es malo repetir codigo?
- Si la funcion cambia, deberias cambiarla en todas partes (dificil de mantener)
- Corres riesgo de errores (aumentar la cantidad de bugs)
- Lo mejor es tener en lugar el codigo y repararlo solo en ese lugar
- Unica fuente de la verdad
- Separacion de responsabilidades -> Solid -> Single responsability

Que permiten las funciones?
- Estructurar codigo con buenas practicas
- Modularizar / Componetizacion
- Facil lectura del codigo
- Rapido y Mejor mantenimiento
- Reutilizar codigo
- Ahorrar tiempo y disminuir errores

- Reciben datos de entrada que procesan y devuelven un resultado

Momentos de las funciones
Definicion (implementacion) => creamos y definimos sus pasos
Invocacion (llamado-call) => la nombramos para ejecutarla
*/

// 1. Funcion declarada
function calcularArea(largo, ancho) {
   // El retorno termina la operacion de la funcion
   let resultado = largo * ancho
  return {
    resultado,
    largo,
    ancho
   } 
    
}

let resultado = calcularArea(7, 2)
console.log(resultado)
