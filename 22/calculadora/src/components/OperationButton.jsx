// Cual es la responsabilidad de esto?
// Crear el boton, utilizando un callback que le brinda comportamiento a cada boton a traves del evento onClick
export function OperationButton({operation, callback}) {
    return (
        <button onClick={() => callback(operation)} > {operation} </button>
    )
}