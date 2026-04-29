// falsy y truthy
let falsy = [ false, 0, -0, "", null, undefined, NaN ]
let truthy = [ "hola", " ", true, 1, -20, {}, [], function(){}, Symbol('id') ]

// Estructura de control condicional

let condicion = true
// si se cumple la condicion
if(condicion){
    // entonces sucede esto
    console.log("Es verdadero")
} else { // ¿Y si esa condicion no se cumple?
  // entonces sucede esto 
    console.log("Es falso")
    }

    // Positivo de else -> fallback, es el caso que sucede cuando lo esperado falla
    // Limitacion de else -> Siempre toma la alternativa sin importar la condicion
    // Se usa un solo else por bloque de if

// NOT
if(!condicion){
    // entonces sucede esto
    console.log("Es falso")
} else { // ¿Y si esa condicion no se cumple?
  // entonces sucede esto 
    console.log("Es verdadero")
    }

    // Debajo de los 10°C me abrigo
    // Quiero ver en pantalla que si hace menos de 10°C me diga que debo abrigarme

    // Temperatura es un dato de entrada
    let temperatura = 28
    let frio

    // La temperatura desde la cual considero que hace frio 
    let umbral_min = 10
     let umbral_max = 18

    // como buena practica no dejar "numeros magicos"
    if(temperatura <= umbral_min){
        frio = true
        console.log("Me abrigo", frio)
    } else {
        frio = false
        console.log("No me abrigo", frio)
    }

    // AND -> && 
    // OR -> ||

    // else if -> permite añadir otra condicion extra
    if(temperatura <= umbral_min){
        console.log("Me pongo campera de invierno")
    } else if (temperatura > umbral_min && temperatura < umbral_max){
        console.log("Me pongo un buzo")
    } else {
        console.log("No me abrigo")
    }

    console.log("--if ternario --")
    // If ternario
    temperatura <= umbral_min ? console.log("Me abrigo") : console.log("No me abrigo")

    temperatura <= umbral_min ? console.log("Me pongo campera de invierno") : temperatura > umbral_min && temperatura < umbral_max ? console.log("Me pongo un buzo") : console.log("No me abrigo") 

    