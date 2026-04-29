// Bucle for
// Inicializacion; Condicion de corte; Actualizacion
// index++ -> index + 1
// mientras la condicion de corte se mantenga como true el bucle corre

let numeros = [11, 15, 17, 20, 60, 150, 2, 55];
console.log("largo de numeros ", numeros.length) // 8
numeros[1];

for (let index = 0; index < numeros.length; index++) {
  const element = numeros[index];
  const indice = index;
  console.log({ element: element, indice: indice });
}
// El indice -> n° elementos  - 1
// n° elementos -> indice + 1

// A partir de un listado de alumnos
// Vamos a mostrar cuales estan aprobados

let alumnos = [
  { nombre: "ana", nota: 9 },
  { nombre: "carlos", nota: 3 },
  { nombre: "beatriz", nota: 5 },
  { nombre: "david", nota: 10 },
];
console.log("largo de alumnos ", alumnos.length) // 4

for (let index = 0; index < alumnos.length; index++) {
    
    // Almacenamos el objeto del alumno en una variable para que
    // sea mas facil de lee y de utilizar
    let alumnoActual = alumnos[index]
    
    if(alumnoActual.nota >= 6){
        console.log(alumnoActual.nombre + " aprobó")
    } else {
        console.log(alumnoActual.nombre + " desaprobó")
    }
}