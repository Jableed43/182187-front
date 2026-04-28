/* Si js no infiere el tipo, como sabe que tipo usar en cada caso? Como sabe tipar? */

//El tipado de js es dinamico
// otros lenguajes como C, C#, C++, java tienen tipado estatico
//el valor de la variable determina el tipo
// y este puede cambiar en tiempo de ejecucion

// Tipos de datos
// strings - cadena de caracteres
("hola", "hola", `hola`);

// numbers
// decimales, notacion cientifica, negativos (signed)
(20, 2.5, 1e9, 2.008, -10);

// boolean
(true, false);

// falsy y truthy
// falsy -> false, 0, "", null, undefined, NaN
// truthy -> true, {}, [], "string", 7, -4

// otros
// nulo, configurado x un desarrollador
// campo o dato existente no tiene valor
null;

// undefined - no esta definido o no existe
undefined;

// arrays -> listas de elementos
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var booleanos = [false, true, false, false, true];
var arrays = [[2], [5, 8, 9], [7]];

// objetos estructuras de clave:valor que representan
// elementos y sus datos fundamentales
var profesor1 = {
  nombre: "javier",
  apellido: "lopez",
};

var profesor2 = {
  nombre: "matias",
  apellido: "gimenez",
};

var profesores = [
  {
    nombre: "javier",
    apellido: "lopez",
  },
  {
    nombre: "matias",
    apellido: "gimenez",
  },
];

// naming
// cada nueva palabra tiene mayuscula
var camelCase = {esTitular: true}
var snake_case = {es_titular: true}