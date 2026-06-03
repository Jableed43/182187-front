import { useState } from "react";
import "./App.css";
import { mathOperations } from "./utils/mathOperations";
import { Input } from "./components/Input";
import { OperationButton } from "./components/OperationButton";

function App() {
  // Estados
  // Valores iniciales:
  // string "", number 0, boolean false, array []
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const limpiarCampos = () => {
    setNum1(0);
    setNum2(0);
  };

  const handleOperation = (operation) => {
    if (operation === "dividir") {
      if (num1 < num2) {
        console.log("No se puede dividir por un numero mayor");
      }
    }

    switch (operation) {
      case "suma":
        setResultado(mathOperations.suma(num1, num2));
        break;
      case "resta":
        setResultado(mathOperations.resta(num1, num2));
        break;
      case "multiplicar":
        setResultado(mathOperations.multiplicacion(num1, num2));
        break;
      case "dividir":
        setResultado(mathOperations.division(num1, num2));
        break;

      default:
        setResultado(0);
        console.log("No existe dicha operacion");
        break;
    }
    limpiarCampos();
  };

  return (
    <>
      <div>
        <Input
          label="Numero 1"
          labelId="number1"
          onChange={(evento) => setNum1(Number(evento.target.value))}
          type="number"
          value={num1}
        />

        <br />

        <Input
          label="Numero 2"
          labelId="number2"
          onChange={(evento) => setNum2(Number(evento.target.value))}
          type="number"
          value={num2}
        />

        <br />
        <OperationButton operation="suma" callback={handleOperation} />
        <br />
        <OperationButton operation="resta" callback={handleOperation} />
        <br />
        <OperationButton operation="multiplicar" callback={handleOperation} />
        <br />
        <OperationButton operation="dividir" callback={handleOperation} />
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
