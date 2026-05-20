// Abstraccion, se orienta a la simplificacion que necesita manejar el usuario de la clase

// Vamos a crear una clase calculadora
// guarda resultados en un historial
// tambien tiene metodos para ejecutar

class Calculadora {
  // Atributos
  // # lo protege contra escritura, le brinda privacidad
  // Impide lectura y escritura directa del atributo desde afuera
  // # significa privado
  #historial;

  // Constructor -> es quien ensambla la clase
  // toma todos los atributos que le des y los usa en la clase
  constructor() {
    this.#historial = [];
  }

  // Metodos
  // Este tipo de metodo se llama setter -> porque configura/ asigna un valor
  #guardarEnHistorial(a, b, operacion, resultado) {
    this.#historial.push({
      a,
      b,
      operacion,
      resultado,
      fecha: new Date().toLocaleString(),
    });
  }

  sumar(a, b) {
    let resultado = a + b;
    this.#guardarEnHistorial(a, b, "sumar", resultado);
    return resultado;
  }

  restar(a, b) {
    let resultado = a - b;
    this.#guardarEnHistorial(a, b, "restar", resultado);
    return resultado;
  }

  multiplicar(a, b) {
    let resultado = a * b;
    this.#guardarEnHistorial(a, b, "multiplicar", resultado);
    return resultado;
  }

  dividir(a, b) {
    let resultado = a / b;
    this.#guardarEnHistorial(a, b, "dividir", resultado);
    return resultado;
  }

  // Este tipo de metodo se llama getter -> Obtiene un valor de un atributo interno (en este caso es privado)
  getHistorial() {
    return this.#historial;
  }
}

// Instanciamos la clase
let calculadora = new Calculadora();
calculadora.sumar(10, 50);
console.log(calculadora.sumar(10, 20));
console.log(calculadora.restar(100, 20));
console.log(calculadora.multiplicar(100, 2));
console.log(calculadora.dividir(100, 10));
console.log(calculadora.getHistorial());
