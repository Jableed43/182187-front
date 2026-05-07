# 🚨 Misión Crítica: Rescate en el Departamento de Alumnos 🎓

### 📨 Mensaje de Prioridad Alta
**De:** Ing. Domínguez - Director de Sistemas 
**Para:** Desarrollador/a Fullstack de Emergencia
**Asunto:** COLAPSO DEL SISTEMA ACADÉMICO

> "¡Colega, necesitamos tu ayuda urgente! El servidor principal sufrió un pico de tensión y la base de datos de Alumnos quedó corrupta. Solo logramos rescatar un pequeño fragmento de los datos en memoria (el array que verás abajo). Sin este sistema, no podemos procesar las notas de los finales que cierran mañana. Los pasillos están llenos de alumnos preocupados y el Rector está exigiendo resultados. Tu misión es reconstruir la lógica del sistema para devolverle la operación a la facultad."

---

## 📂 Datos Rescatados (Base de Datos Simulada)

```javascript
const estudiantes = [
  { legajo: 101, nombre: "Ana", notas: [8, 9, 10], estado: "Activo" },
  { legajo: 102, nombre: "Luis", notas: [4, 5, 4], estado: "Activo" },
  { legajo: 103, nombre: "Marta", notas: [10, 10, 9], estado: "Pausado" },
  { legajo: 104, nombre: "Juan", notas: [2, 3, 5], estado: "Activo" }
];
```

---

## 🛠️ Plan de Acción (Consignas)

### 1. El Motor de Evaluación (Calcular Promedio)
**Situación:** El Rector necesita saber el rendimiento real de cada curso, pero el sistema actual no sabe procesar promedios automáticamente. Sin esta función base, nada más funcionará.
**Consigna:** Crea una función llamada `calcularPromedio` que reciba por parámetro un array de números (notas). La función debe sumar todos los números del array y retornar el promedio. 
*Pista: Puedes usar un bucle `for...of` o `forEach`.*

### 2. El Caos de los Ingresantes (Matricular Nuevo Alumno)
**Situación:** Hay una fila de alumnos nuevos que se inscribieron justo antes del choque del sistema y no figuran en los registros. Debemos darles el alta de inmediato.
**Consigna:** Crea una función `matricularAlumno` que reciba como parámetros: `legajo`, `nombre`, y un array de `notas`. Debe crear un objeto con esa información (el estado por defecto debe ser "Activo") y agregarlo al array principal `estudiantes`.

### 3. El Alumno Extraviado (Buscar Alumno por Legajo)
**Situación:** Un alumno afirma haber aprobado sus materias, pero su legajo no aparece en las listas impresas. Necesitamos una herramienta para buscar sus datos en la base de datos rescatada.
**Consigna:** Crea una función `buscarPorLegajo` que reciba un número de legajo. Debe buscar en el array y retornar el objeto del alumno correspondiente. Si no lo encuentra, debe retornar el mensaje "Alumno no encontrado". 
*Pista: El método `find` es tu mejor amigo aquí.*

### 4. Limpieza de Registros (Dar de Baja)
**Situación:** Hemos detectado que varios alumnos abandonaron la cursada. Para no desperdiciar recursos, debemos cambiar su estado sin borrar sus datos históricos.
**Consigna:** Crea una función `darDeBaja` que reciba un legajo. Debe buscar a ese alumno y cambiar el valor de su propiedad `estado` a "Inactivo".

### 5. Restablecer la Comunicación (Generar Correos Institucionales)
**Situación:** El servidor de correo se reinició de cero. Necesitamos generar las nuevas direcciones oficiales para que los alumnos puedan recibir sus certificados.
**Consigna:** Crea una función `generarMails` que no reciba parámetros. Debe retornar un **nuevo array** de strings, donde cada string sea el nombre del alumno en minúsculas seguido de `@universidad.edu.ar`. 
*Pista: Usa el método `map` y el método de string `toLowerCase()`.*

### 6. La Ceremonia de Premiación (Obtener Cuadro de Honor)
**Situación:** Se acerca el acto académico y la facultad otorgará medallas a la excelencia. Solo los promedios más altos (8 o más) están invitados al escenario.
**Consigna:** Crea una función `cuadroDeHonor` que retorne un nuevo array solo con los alumnos cuyo promedio de notas sea mayor o igual a 8. 
*Pista: Deberás usar el método `filter`, y dentro de su condición, llamar a la función `calcularPromedio` que creaste en el paso 1.*

### 7. El Reporte Final (Imprimir Boletines)
**Situación:** ¡Es la hora de la verdad! Los boletines deben publicarse en la web para que cada alumno sepa su resultado final. Necesitamos un reporte formateado y legible.
**Consigna:** Crea una función `imprimirBoletines` que recorra todo el array de estudiantes y muestre en la consola un texto con el siguiente formato para cada uno: 
*"Boletín de [nombre]: Notas -> [nota1] - [nota2] - [nota3] | Promedio: [promedio]"*.
*Pista: Puedes usar `forEach` y el método `join` para separar las notas con un guión.*

### 8. El Tablero de Control (Reporte Institucional)
**Situación:** El Rector está a punto de dar su discurso de cierre de año en el aula magna. Necesita tres datos estadísticos clave para demostrar que la facultad ha recuperado su excelencia académica tras el colapso del sistema.
**Consigna:** Crea una función `generarReporte` que realice lo siguiente:
1. Calcule la **cantidad total** de alumnos matriculados.
2. Calcule el **promedio general** de la institución (el promedio de todos los promedios de los alumnos).
3. Encuentre al **Abanderado/a**: el alumno que tiene el promedio más alto de toda la facultad.
4. Muestre por consola un resumen profesional con este formato:
   *"--- REPORTE DE GESTIÓN ---"*
   *"Total de alumnos: [cantidad]"*
   *"Promedio Institucional: [promedio]"*
   *"Abanderado/a del año: [nombre]"*

---

**⚠️ Nota Final:** El futuro de la universidad y la tranquilidad de cientos de alumnos dependen de la solidez de tu código. ¡Buena suerte, desarrollador/a!


