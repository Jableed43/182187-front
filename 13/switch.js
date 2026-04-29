// Cuando utilizamos switch-case?
// Cuando tenemos muchos casos posibles (+3)

// Queremos saber a que "generacion" pertenecemos

let anioNacimiento = 2015

switch (true) {
    // Mayor o igual que 1920 y menor o igual a 1945
    case anioNacimiento >= 1920 && anioNacimiento <= 1945:
        console.log("Generacion silenciosa")
        break;
    case anioNacimiento >= 1946 && anioNacimiento <= 1964:
        console.log("Baby Boomer")
        break;
    case anioNacimiento >= 1965 && anioNacimiento <= 1979:
        console.log("Generacion X")
        break;
    case anioNacimiento >= 1980 && anioNacimiento <= 2000:
        console.log("Generacion Y")
        break;
    case anioNacimiento >= 2001 && anioNacimiento <= 2010:
        console.log("Generacion Z")
        break;
    case anioNacimiento >= 2011 && anioNacimiento <= 2020:
        console.log("Generacion Alfa")
        break;

    default:
        console.log("Sos de otra generación")
        break;
}

let color = "amarillo"

// switch busca que un case sea estrictramente igual a su key

switch (color) {
    case "azul":
        console.log("Es azul")
        break;

    case "rojo":
        console.log("Es rojo")
        break;

    default:
        console.log("Color desconocido")
        break;
}