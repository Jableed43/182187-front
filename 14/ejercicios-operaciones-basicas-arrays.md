# Ejercicios Específicos: Operaciones Básicas con Arrays

¡Entrenamiento focalizado! Aquí encontrarás 5 ejercicios por cada uno de los métodos indicados, para que domines su funcionamiento paso a paso.

## Método: `length`
*Propiedad que indica la cantidad de elementos en el array.*

**Ejercicio 1:** Verificar si un carrito de compras está vacío. Crea un array `carrito`. Si la longitud es 0, imprime "Carrito vacío", si no, imprime la cantidad de elementos.

**Ejercicio 2:** Saber el último elemento de una fila. Crea un array `fila` con 4 nombres. Usa `length` para acceder al último elemento dinámicamente y muéstralo.

**Ejercicio 3:** Limitar caracteres. Tienes un array `letras` con 15 elementos. Muestra si excede los 10 elementos con un mensaje condicional.

**Ejercicio 4:** Calcular el promedio. Dado un array de `notas` con valores numéricos, suma sus tres primeros valores y divide por el `length` del array.

**Ejercicio 5:** Asientos de cine. Tienes un array vacio de `asientosVendidos`. Alguien compra 3 boletos (agrega 3 elementos). Muestra la cantidad total de asientos vendidos usando `length`.

## Método: `push()`
*Agrega uno o más elementos al final del array.*

**Ejercicio 1:** Registro de usuarios. Crea un array vacío `usuarios`. Usa `push` para agregar a "Carlos" y "Maria". Muestra el array.

**Ejercicio 2:** Carrito de compras. Tienes un `carrito` con "Pan". Agrega "Leche" y "Huevos" en una sola línea usando `push`.

**Ejercicio 3:** Historial de chat. Tienes un array de `mensajes`. Envía (haz push) un nuevo mensaje "Hola, ¿cómo estás?" al final.

**Ejercicio 4:** Juego de cartas. Tienes una mano vacía. Robas dos cartas (agregas el 5 y el 10). Muestra tu mano.

**Ejercicio 5:** Backlog de tareas. A una lista de tareas `["Diseñar", "Programar"]` agrégale al final la tarea "Testear".

## Método: `pop()`
*Elimina el último elemento del array y lo devuelve.*

**Ejercicio 1:** Botón Deshacer. Tienes un array de `acciones` con "Escribir", "Borrar", "Pintar". Deshaz la última acción y muestra qué acción se deshizo.

**Ejercicio 2:** Juego de naipes. En un mazo de `cartas` [1, 2, 3, 4], el croupier saca la última carta. Elimínala y muéstrala.

**Ejercicio 3:** Tren lleno. Un array `vagones` tiene 5 pasajeros. Elimina al último pasajero porque ya no entra. Muestra la lista final.

**Ejercicio 4:** Cerrar pestaña. En el array de `pestañas` con "Google", "YouTube", "Wikipedia", el usuario cierra la última pestaña actual. Actualiza el array.

**Ejercicio 5:** Pila de platos. Tienes una `pila` con "Plato 1", "Plato 2", "Plato 3". Sacas el plato de más arriba (el último).

## Método: `shift()`
*Elimina el primer elemento del array y lo devuelve.*

**Ejercicio 1:** Atender al banco. Una `filaBanco` tiene a "Ana", "Luis", "Pedro". Llama al primer cliente, elimínalo y muestra a quién llamaste.

**Ejercicio 2:** Cola de descargas. Tienes `descargas` con "Archivo1.zip", "Archivo2.zip". Finaliza la primera descarga usando shift.

**Ejercicio 3:** Notificaciones. `alertas` con "Batería baja", "Mensaje nuevo". Lees la primera alerta y desaparece de la lista.

**Ejercicio 4:** Pedidos del restaurante. `comandas` con "Mesa 1", "Mesa 2". El cocinero saca el primer pedido para cocinarlo.

**Ejercicio 5:** Mensajes de audio. `audios` con "Audio 1", "Audio 2". Reproduces el primero y se elimina de la cola.

## Método: `unshift()`
*Agrega uno o más elementos al inicio del array.*

**Ejercicio 1:** Noticia urgente. En un `feed` de noticias con "Deportes", "Clima", agrega "Último Momento" al inicio.

**Ejercicio 2:** VIP en el boliche. En la `filaBoliche` con "Juan", "Marta", llega un VIP ("Ricky") y pasa directo al frente.

**Ejercicio 3:** Historial de llamadas. Tienes `llamadas` con "Mamá". Llama tu jefe. Pon a "Jefe" al principio.

**Ejercicio 4:** Lista de reproducción. Tienes `canciones` con "Track 2", "Track 3". Agregas "Track 1" para que suene de inmediato.

**Ejercicio 5:** Alerta del sistema. `sistema` tiene "Actualización". Inserta un error crítico "Fallo DB" para que se lea primero.

## Método: `splice()`
*Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.*

**Ejercicio 1:** Corregir un error. En la lista `dias` con "Lunes", "Martes", "Feriado", "Jueves", elimina "Feriado" y pon "Miércoles".

**Ejercicio 2:** Eliminar del medio. En `nombres` con "A", "B", "C", "D", elimina "C" usando splice sin agregar nada nuevo.

**Ejercicio 3:** Insertar sin borrar. Tienes `[1, 2, 4]`. Inserta el número 3 en la posición correcta (índice 2).

**Ejercicio 4:** Vaciar una parte. Tienes `meses` con "Enero", "Febrero", "Basura1", "Basura2", "Marzo". Elimina los dos elementos de basura en un solo paso.

**Ejercicio 5:** Sustitución múltiple. En `colores` con "Rojo", "Gris", "Negro", "Azul", reemplaza Gris y Negro por "Verde" y "Amarillo".

## Método: `slice()`
*Devuelve una copia de una parte del array (el array original no se modifica).*

**Ejercicio 1:** Top 3 ganadores. De un array `competidores` con "Ana", "Luis", "Juan", "Marta", "Pedro", extrae los primeros 3.

**Ejercicio 2:** Segunda mitad. Tienes `semestre` con "Ene", "Feb", "Mar", "Abr", "May", "Jun". Obtén del mes de Abril en adelante.

**Ejercicio 3:** Clonar array. Usa slice para hacer una copia exacta de un array `original` = [1, 2, 3] para no mutarlo.

**Ejercicio 4:** Paginación. En un array de 10 números, extrae desde la posición 4 hasta la 8 (sin incluir la 8).

**Ejercicio 5:** Penúltimo y último. De un array de 5 elementos, extrae los dos últimos usando índices negativos.

## Método: `indexOf()`
*Busca un elemento en el array y devuelve su primer índice. Retorna -1 si no existe.*

**Ejercicio 1:** Buscar el auto. En el `estacionamiento` con "Ford", "Chevy", "Honda", busca en qué posición está el "Chevy".

**Ejercicio 2:** Verificar permisos. En `roles` con "user", "editor", revisa si está el rol "admin". Si da -1, imprime "Acceso denegado".

**Ejercicio 3:** Buscar canción. En `playlist` con "Rock", "Pop", "Jazz", obtén el índice de "Jazz".

**Ejercicio 4:** Mes de cobro. `meses` con "Ene", "Feb", "Mar". Busca en qué índice cae "Mar".

**Ejercicio 5:** Buscando el número. Tienes `numeros` = [10, 20, 30]. Busca el índice del número 50. Como no está, imprimirá -1.

## Método: `lastIndexOf()`
*Devuelve la última posición en la que aparece un elemento.*

**Ejercicio 1:** Última conexión. El array `logs` tiene inicios de sesión: "Admin", "User", "Admin". Encuentra el último inicio de "Admin".

**Ejercicio 2:** Pago repetido. Un cliente pagó varias veces: `pagos` = [100, 200, 100, 50]. Busca la última vez que pagó 100.

**Ejercicio 3:** Último error 404. En un array de `errores` = [404, 500, 404, 200], ubica el índice del último 404.

**Ejercicio 4:** Tiradas de dados. Se tiró el dado 5 veces: `[6, 3, 6, 2, 1]`. ¿En qué posición cayó el último 6?

**Ejercicio 5:** Última letra. Tienes `palabra` con "r","e","c","o","r","d". Encuentra el último índice de la letra "r".

## Método: `concat()`
*Combina dos o más arrays creando uno nuevo.*

**Ejercicio 1:** Unir clases. Tienes `claseA` = ["Ana"] y `claseB` = ["Luis"]. Únelos en `claseCompleta`.

**Ejercicio 2:** Menú completo. Concatena `almuerzo` = ["Pasta"] y `cena` = ["Sopa"] en un solo menú.

**Ejercicio 3:** Facturación. Fusiona las facturas del `mesAnterior` = [1, 2] con el `mesActual` = [3, 4].

**Ejercicio 4:** Inventario múltiple. Junta el `deposito1` = ["Silla"] con el `deposito2` = ["Mesa"] en un `stockTotal`.

**Ejercicio 5:** Unir tres arrays. Tienes tres arrays de 1 número cada uno: `[1]`, `[2]`, `[3]`. Usa concat para juntar los 3.

## Método: `join()`
*Une todos los elementos del array en una cadena (string), separados por el delimitador especificado.*

**Ejercicio 1:** Crear una URL. Tienes los segmentos `["home", "perfil", "123"]`. Únelos usando "/" para formar una ruta.

**Ejercicio 2:** Lista separada por comas. Muestra en pantalla el array de `etiquetas` = ["JS", "React", "Web"] separados por ", ".

**Ejercicio 3:** Título dinámico. Convierte `["Blog", "Artículo 1"]` en una cadena separada por " - ".

**Ejercicio 4:** Nombre completo. Tienes `["Juan", "Carlos", "Perez"]`. Únelo con espacios vacíos para formar el nombre.

**Ejercicio 5:** Crear archivo CSV. Un array de valores `[1, 25, "Activo"]`. Únelos con una simple coma para formar una fila de CSV.

## Método: `reverse()`
*Invierte el orden de los elementos del array (muta el original).*

**Ejercicio 1:** Comentarios recientes. Tienes un array del más viejo al más nuevo: `["Viejo", "Medio", "Nuevo"]`. Inviértelo para mostrar el más nuevo arriba.

**Ejercicio 2:** Cuenta regresiva. Tienes un arreglo `[1, 2, 3, 4, 5]`. Inviértelo para que sea una cuenta regresiva.

**Ejercicio 3:** Rebobinar historial. Tienes pasos `["A", "B", "C"]`. Haz un reverse para ir de C a A.

**Ejercicio 4:** Últimos lugares de una carrera. La lista de llegadas fue `["Corredor 1", "Corredor 2", "Corredor 3"]`. Inviértela para ver quién salió último.

**Ejercicio 5:** Mensaje oculto. Tienes `["o", "t", "i", "x", "é"]`. Inviértelo y hazle join("") para leer el mensaje.

## Método: `sort()`
*Ordena los elementos de un array (como strings por defecto, a menos que uses una función). Muta el original.*

**Ejercicio 1:** Orden alfabético. Ordena la lista de `alumnos` = ["Zacarias", "Ana", "Luis"] alfabéticamente.

**Ejercicio 2:** Tallas de ropa. Ordena el array de `tallas` = ["S", "M", "L", "XL"]. Cuidado, el orden alfabético hace lo suyo.

**Ejercicio 3:** Orden de precios (Ascendente). Tienes `precios` = [40, 100, 1, 5, 25]. Ordénalos de menor a mayor pasándole una función de comparación `(a, b) => a - b`.

**Ejercicio 4:** Ranking de puntos (Descendente). Tienes `puntos` = [10, 50, 30]. Ordénalos de mayor a menor `(a, b) => b - a`.

**Ejercicio 5:** Lista de códigos. Ordena una lista de códigos tipo string `["C10", "C2", "C1"]`. Mira cómo sort lo ordena por defecto.

