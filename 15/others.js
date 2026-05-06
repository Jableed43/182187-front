// Método: shift() Elimina el primer elemento del array y lo devuelve.

// Ejercicio 1: Atender al banco. Una filaBanco tiene a "Ana", "Luis", "Pedro". Llama al primer cliente, elimínalo y muestra a quién llamaste.

let filaBanco = ["Ana", "Luis", "Pedro"]
console.log(filaBanco.shift());
console.log(filaBanco);

// Método: unshift() Agrega uno o más elementos al inicio del array.

// Ejercicio 1: Noticia urgente. En un feed de noticias con "Deportes", "Clima", agrega "Último Momento" al inicio.

let feed = ["Deportes", "Clima"]
console.log(feed.unshift("Último Momento"));
console.log(feed)

// Método: splice() - 1999 - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. Retorna el elemento eliminado si es que elimina. Splice modifica el original. 
// Eliminar, reemplazar o insertar elementos en cualquier posicion del array original
// Ejercicio 1: Corregir un error. En la lista dias con "Lunes", "Martes", "Feriado", "Jueves", elimina "Feriado" y pon "Miércoles".

let dias = ["Lunes", "Martes", "Feriado", "Jueves"]
// Primer parametro es la posicion inicial desde donde va a editar
// Segundo parametro es cuantos edita
// Tercer parametro son los elementos con los que vas a reemplazar esas posiciones
dias.splice(2, 2, "Miércoles")
console.log(dias)

// Ejercicio 2: Eliminar del medio. En nombres con "A", "B", "C", "D", elimina "C" usando splice sin agregar nada nuevo.

let nombres = ["A", "B", "C", "D"]
console.log(nombres.splice(2, 1))
console.log(nombres)

// Método: slice() Devuelve una copia de una parte del array (el array original no se modifica).

// Ejercicio 1: Top 3 ganadores. De un array competidores con "Ana", "Luis", "Juan", "Marta", "Pedro", extrae los primeros 3.

let competidores = ["Ana", "Luis", "Juan", "Marta", "Pedro"]
console.log(competidores)
const top3 = competidores.slice(0, 3)
console.log(top3)


// Método: indexOf() - 2009
// Busca un elemento en el array y devuelve su primer índice. Retorna -1 si no existe.
// indexOf es para busquedas con datos primitivos -> string, number, boolean, null, undefined
// Ejercicio 1: Buscar el auto. En el estacionamiento con "Ford", "Chevy", "Honda", busca en qué posición está el "Chevy".

let estacionamiento = ["Ford", "Chevy", "Honda", "Chevy"]
let indice = estacionamiento.indexOf("Chevy")
console.log(indice);

// Si lo que queres es una condicion mas especifica tenes que usar otro metodo
// En findIndex (2015) podes generar una condicion tipo if
const productos = [
    { id: 1, nombre: "Mouse" },
    { id: 2, nombre: "Teclado" }
];
let busqueda = productos.findIndex(producto => producto.nombre === "Teclado")
console.log(productos[busqueda])

// Método: lastIndexOf() Devuelve la última posición en la que aparece un elemento. Es como indexOf, pero de atras hacia adelante
let indiceLast = estacionamiento.lastIndexOf("Chevy")
console.log(indiceLast);

// Si no encuentra el valor retorna -1, cuidado que es truthy!!!
let indice2 = estacionamiento.indexOf("Mandarina")
console.log(indice2);

// Método: concat() Combina dos o más arrays creando uno nuevo.
// no modifica los originales

// Ejercicio 1: Unir clases. Tienes claseA = ["Ana"] y claseB = ["Luis"]. Únelos en claseCompleta.

let claseA = ["Ana", "Mariano"]
let claseB = ["Luis", "Hugo"]
// La forma de seleccionar uno del primer array es encerrandolo en otro array
let claseCompleta = claseA.concat(claseB)
let claseCompletaB = [claseA[0]].concat(claseB[1])
console.log(claseCompleta);

// Generar un array a partir de valores
let lista = [].concat(1,10,11,25,32)
console.log({lista})

// Método: join() Une todos los elementos del array en una cadena (string), separados por el delimitador especificado.

// Ejercicio 1: Crear una URL. Tienes los segmentos ["home", "perfil", "123"]. Únelos usando "/" para formar una ruta.

let segmentos = ["home", "perfil", "123"]
console.log(segmentos.join("/"))