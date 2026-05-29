import { useState } from "react";
import "./App.css";

function App() {
  // Estados
  // Valores iniciales:
  // string "", number 0, boolean false, array []
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const limpiarCampos = () => {
    setNum1(0)
    setNum2(0)
  }

  const handleOperation = (operation) => {
    
    
    if (operation === "dividir") {
      if (num1 < num2) {
        console.log("No se puede dividir por un numero mayor");
      }
    }
    
    switch (operation) {
      case "suma":
        setResultado(num1 + num2);
        break;
      case "resta":
        setResultado(num1 - num2);
        break;
      case "multiplicar":
        setResultado(num1 * num2);
        break;
      case "dividir":
        setResultado(num1 / num2);
        break;

      default:
        setResultado(0);
        console.log("No existe dicha operacion");
        break;
    }
    limpiarCampos()
  };

  return (
    <>
      <div>
        <label htmlFor="number1">Numero 1</label>
        <input
          type="number"
          id="number1"
          value={num1}
          // Si el valor del input cambia, se escribe algo nuevo, se borra, etc... se dispara el evento onChange
          // Cuando vos queres capturar el valor del cambio de un input usas evento y luego evento.target.value
          // handlers
          onChange={(evento) => setNum1(Number(evento.target.value))}
        />

        <br />
        <label htmlFor="number2">Numero 2</label>
        <input
          type="number"
          id="number2"
          value={num2}
          onChange={(evento) => setNum2(Number(evento.target.value))}
        />
        <br />
        <button onClick={() => handleOperation("suma")}>Suma</button>
        <br />
        <button onClick={() => handleOperation("resta")}>Resta</button>
        <br />
        <button onClick={() => handleOperation("multiplicar")}>Multiplicacion</button>
        <br />
        <button onClick={() => handleOperation("dividir")}>division</button>
      </div>

      <div>
        <h2>Resultado</h2>
        <br />
        <small>{resultado}</small>
      </div>
    </>
  );
}

export default App;
