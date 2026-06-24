import React, { useState } from "react";
import usePostProduct from "../../hooks/products/usePostProduct";
import { useNavigate } from "react-router-dom";

// Controlled forms -> permite el uso de una unica fuente de la verdad
// estado-input-evento

function CreateProductPage() {
  // Esta es la forma de tener un estado por defecto para un objeto
  // Esto se suele hacer cuando tenes mas de dos campos relacionados
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    price: 0,
    quantity: 1,
  });
  // Permite la redireccion dentro del sistema de react
  const navigate = useNavigate()

  const { error, postProduct } = usePostProduct();

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
    e.preventDefault()

   const success = await postProduct(form)
   if(success){
    // Limpiamos el form
    setForm({
    name: "",
    image: "",
    description: "",
    price: 0,
    quantity: 1,
  })
//   navigate("/products")
   }

  }

  return (
    <>
      <h1>Crear producto</h1>

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
        <button type="submit"> Crear Producto </button>
        <button type="reset"> Borrar form </button>

        {error && <p>{error.message || error}</p>}
      </form>
    </>
  );
}

export default CreateProductPage;
