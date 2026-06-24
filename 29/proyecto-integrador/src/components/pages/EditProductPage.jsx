import React, { useEffect, useState } from "react";
import usePostProduct from "../../hooks/products/usePostProduct";
import { useNavigate, useParams } from "react-router-dom";
import usePatchProduct from "../../hooks/products/usePatchProduct";
import useGetProductById from "../../hooks/products/useGetProductById";

// Controlled forms -> permite el uso de una unica fuente de la verdad
// estado-input-evento

function EditProductPage() {
  // Esta es la forma de tener un estado por defecto para un objeto
  // Esto se suele hacer cuando tenes mas de dos campos relacionados
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    price: 0,
    quantity: 1,
  });

  // Traemos los hooks
  const { error, patchProduct } = usePatchProduct();
  // error: getByIdError -> le cambias el nombre a error
  // No pueden haber dos constantes que se llamen igual
  const { error: getByIdError, getProductById } = useGetProductById();

  // Como se usan los path params?
  // Primero tiene que estar definido en la ruta, sino no lo puede aceptar
  const { id } = useParams();
  // Para que sirven los path params?
  // Se puede enviar informacion publica por ruta, se puede obtener globalmente

  // Permite la redireccion dentro del sistema de react
  const navigate = useNavigate();

  // Tenemos que rellenar el formulario con la informacion del producto que vamos a editar
  useEffect(() => {
    // Implementacion de la carga del producto
    const loadProduct = async () => {
      // getProductById trae el producto con el id indicado
      const response = await getProductById(id);
      if (response) {
        setForm({
          name: response.name,
          image: response.image,
          description: response.description,
          price: response.price,
          quantity: response.quantity,
        });
      }
    };

    if(id){
      // Si tenemos el id cargamos el producto
      loadProduct()
    } else {
      // Si no tenemos el id pasamos por consola el supuesto id
      console.log({id})
    }
    // Cuando un useEffect tiene el array de dependencias con un dato significa que:
    // 1. Se va ejecutar en cuanto la pagina cargue
    // 2. Se va a volver a ejecutar cuando el elemento del array cambie
  }, [id]);

  // Esto resuelve un problema, como yo tengo un objeto, como sabe react cual de todos los campos de mi formulario disparo el evento del cambio?
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setForm({
      // ... este spread operator evita que se sobreescriban los campos no editados, solo se cambia el que modificaste, el resto queda igual
      ...form,
      // Considera el nombre del input y el tipo del input
      // si el input es numerico entonces convierte el valor a numero entero
      // si llego vacio el value entonces le ponemos 0
      // si el input no es numerico, entonces queda el valor original
      [name]: type === "number" ? parseInt(value) || 0 : value,
    });
    console.log(form);
  };

  const handleFormSubmit = async (e) => {
    // Evita que la pagina refresque al enviar el formulario
    e.preventDefault();

    const success = patchProduct(form, id)

    if (success) {
      // Limpiamos el form
      setForm({
        name: "",
        image: "",
        description: "",
        price: 0,
        quantity: 1,
      });
      // Este es un lugar ideal para colocar una notificacion
      navigate("/products")
    }
  };

  return (
    <>
      <h1>Editar producto</h1>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Nombre de producto</label>
        <input
          onChange={handleInputChange}
          value={form.name}
          type="text"
          required
          name="name"
          id="name"
        />
        <br />
        <label htmlFor="image">Url de la imagen</label>
        <input
          onChange={handleInputChange}
          value={form.image}
          type="text"
          required
          name="image"
          id="image"
        />
        <div>
          <h4>Preview de imagen</h4>
          <img
            style={{ width: "500px", maxWidth: "100%" }}
            src={form.image}
            alt="imagen producto"
          />
        </div>
        <br />
        <label htmlFor="description">Descripcion</label>
        <textarea
          onChange={handleInputChange}
          value={form.description}
          required
          name="description"
          id="description"
        ></textarea>
        <br />
        <label htmlFor="price">Precio</label>
        <input
          onChange={handleInputChange}
          value={form.price}
          type="number"
          required
          name="price"
          id="price"
        />
        <br />
        <label htmlFor="quantity">Stock</label>
        <input
          onChange={handleInputChange}
          value={form.quantity}
          type="number"
          required
          name="quantity"
          id="quantity"
        />
        <br />
        <button type="submit"> Editar Producto </button>
        <br />
        {error && <p>{error.message || error}</p>}
      </form>
    </>
  );
}

export default EditProductPage;
