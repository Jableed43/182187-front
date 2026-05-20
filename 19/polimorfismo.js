// Seres vivos -> animal -> Perro/ Gato/ Elefante/ Girafa

class Animal {
    hacerSonido(){
        return "El animal hace un sonido"
    }
}

class Perro extends Animal{
    nombre

    constructor(nombre){
        // Aunque la clase padre no tenga atributos ni constructor, se le debe pasar super()
        super()
        this.nombre = nombre
    }

    // method override
    hacerSonido(){
        return "Guau Guau!"
    }
}

class Gato extends Animal{
    nombre

    constructor(nombre){
        // Aunque la clase padre no tenga atributos ni constructor, se le debe pasar super()
        super()
        this.nombre = nombre
    }

    // method override
    // hacerSonido(){
    //     return "Miau Miau!"
    // }
}

let animal = new Animal()
console.log(animal.hacerSonido())

let perro = new Perro("Toby")
console.log(perro.hacerSonido())

let gato = new Gato("Bola de nieve")
console.log(gato.hacerSonido())