# Práctica de Programación: El Gran Laboratorio JS

## BLOQUE A: Bucles de Nueva Generación

### 1. El Poder del `for...of` (Iteración de Listas)
1. Recorre un array de nombres e imprime cada uno en mayúsculas.
2. Suma todos los precios de un array de números.
3. Cuenta cuántas palabras en una lista tienen más de 4 caracteres.
4. Dado un array de números, imprime el triple de cada valor.
5. Encuentra si el nombre "Javier" está en una lista e imprime "Encontrado".
6. Crea un nuevo array con los números negativos de una lista original.
7. Concatena una lista de palabras para formar una oración.
8. Imprime los elementos de un array pero detente si encuentras la palabra "STOP".
9. Cuenta cuántos números pares hay en un array.
10. Dado un array de booleanos, cuenta cuántos son `true`.

### 2. El Detective `for...in` (Inspección de Objetos)
1. Recorre un objeto `persona` e imprime cada una de sus llaves.
2. Imprime todos los valores de un objeto `mascota`.
3. Cuenta cuántas propiedades tiene un objeto `configuracion`.
4. Suma todos los valores numéricos de un objeto `factura`.
5. Muestra el mensaje: "La característica [clave] es [valor]" para un objeto `auto`.
6. Verifica si un objeto tiene la propiedad "descuento" e imprime su valor.
7. Crea un array que contenga todas las llaves de un objeto.
8. Copia los valores de un objeto a otro objeto nuevo usando este bucle.

---

## BLOQUE B: Métodos de Array (Especialización)

### 3. El Ejecutor `forEach`
1. Loguea cada elemento de una lista de compras.
2. Suma los valores de un array en una variable externa.
3. Imprime: "Procesando el item número [índice]".
4. Añade un símbolo "⭐" al final de cada string en un array.
5. Multiplica cada número de un array por 10 e imprime el resultado.
6. Cuenta cuántos elementos empiezan con la letra "M".

### 4. El Transformador `map`
1. Crea un array con el doble de cada número.
2. Convierte una lista de nombres a minúsculas.
3. Dado un array de años, calcula la edad de cada uno (restando del año actual).
4. Extrae solo la propiedad `precio` de un array de objetos `productos`.
5. Convierte un array de strings en un array de números (longitud de cada string).
6. Genera un array de saludos: "Hola, [nombre]".

### 5. El Guardián `filter`
1. Filtra los números impares de una lista.
2. Obtiene los nombres que tengan exactamente 5 letras.
3. Filtra los productos que tengan un precio menor a 500.
4. Obtiene solo los usuarios que sean administradores (`rol: "admin"`).
5. Filtra los números positivos de una lista mezclada.
6. Obtiene los estudiantes que aprobaron (nota >= 7).

### 6. El Rastreador `find`
1. Busca el primer número mayor a 100.
2. Encuentra el objeto usuario que tenga el `email: "test@test.com"`.
3. Busca la primera palabra que empiece con "Z".
4. Encuentra el primer producto que no tenga stock (`stock: 0`).
5. Busca el primer valor que sea de tipo `string` en un array mixto.
6. Encuentra la primera persona menor de edad en una lista de objetos.

---

## BLOQUE C: Desafíos Finales y Tarea 🏠

### 1. El Gestor de Ventas
Tienes un array de objetos `ventas`.
*   Usa `filter` para obtener las ventas de más de $1000.
*   Usa `map` para obtener solo los nombres de los clientes de esas ventas.
*   Usa `forEach` para imprimir cada nombre en la consola.

### 2. El Analista de Objetos
Crea una función que reciba un objeto y use un `for...in` para devolver un array con solo los valores que sean de tipo número.
