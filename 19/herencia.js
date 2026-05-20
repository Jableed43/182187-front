// Herencia : PErmite crear nuevas clases basadas en clases existentes
// heredando atributos y metodos

// Vehiculo -> Auto -> depotivo, sedan, coupe, SUV, carrera, todo terreno...
// Vehiculo -> auto, lancha, bici, moto, avion, helicoptero, camioneta

class Vehiculo{
    marca
    modelo

    constructor(marca, modelo){
        this.marca = marca
        this.modelo = modelo
    }

    arrancar(){
        console.log("El vehiculo arrancó")
    }
}

// Clase hija - con extends utilizas otra clase para heredar de ella
class Camioneta extends Vehiculo{
    // aunque no lo veas Camioneta tiene internamente todo lo que vehiculo tiene
    puertas

    // En los parametros del constructor tenes que poner todo lo utilizado incluso en la clase padre
    constructor(marca, modelo, puertas){
        // Debemos llamar al constructor del padre con "super"
        // super -> super clase, se refiere a la clase padre
        super(marca, modelo)
        this.puertas = puertas
    }

    abrirPuertas(){
        console.log("Abriendo puertas...")
    }
}

let hilux = new Camioneta("Toyota", "Hilux", 4)
console.log(hilux)
hilux.abrirPuertas()