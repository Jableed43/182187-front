// Armamos una clase Libro que va a depender de otras clases

// Libro -> Autor -> Persona
// Libro -> Genero

class Pais {
    nombre
    continente
    poblacion
    constructor(nombre, continente, poblacion){
        this.nombre = nombre
        this.continente = continente
        this.poblacion = poblacion
    }
}

class Persona {
    nombre
    constructor(nombre){
        this.nombre = nombre
    }
}

class Autor extends Persona{
    paisOrigen
    constructor(nombre, paisOrigen){
        super(nombre)
        this.paisOrigen = paisOrigen
    }
}

class Genero{
    nombre
    constructor(nombre){
        this.nombre = nombre
    }
}

class Libro{
    titulo
    ISBN
    genero
    autor

    constructor(titulo, ISBN, genero, autor){
        this.titulo = titulo
        this.ISBN = ISBN
        this.genero = genero
        this.autor = autor
    }
}
let inglaterra = new Pais("Inglaterra", "Europa", 56500000)
let jkRowling = new Autor("J.k. Rowling", inglaterra)
let fantasia = new Genero("Fantasia")
let libro = new Libro("Harry Potter: El prisionero de askaban", "kj3226", fantasia, jkRowling)
console.log(libro)