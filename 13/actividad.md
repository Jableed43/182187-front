### 📝 Actividad: "La Boletería del Cine" 🍿

**Contexto:** Eres el encargado de cobrar la entrada en el cine. Tienes una fila de clientes y sabes la edad de cada uno. Debes cobrarles según su edad y darles un premio si su edad es un número par.

**Código Inicial:**
```javascript
// La fila de clientes (cada número es la edad de una persona)
let edades = [10, 15, 18, 25, 8];
```

#### 📌 Consignas:

1. **Recorrer la fila (`for`):**
   Crea un bucle `for` que recorra todo el arreglo de `edades`.

2. **Cobrar la entrada (`switch`):**
   Adentro del bucle, utiliza la estructura `switch(true)` para evaluar la edad de la persona actual y mostrar un mensaje en consola:
   - Si es **menor de 13**: Imprimir `"Entrada Infantil: $500"`
   - Si está **entre 13 y 17**: Imprimir `"Entrada Adolescente: $800"`
   - Si es **mayor o igual a 18**: Imprimir `"Entrada Adulto: $1000"`

3. **El Premio Sorpresa (`if` o `Ternario`):**
   Aún adentro del bucle (debajo del `switch`), verifica si la edad de la persona es un número par (usando `edad % 2 === 0`).
   Si es par, imprime: `"¡Ganaste un balde de pochoclos gratis! 🍿"`
