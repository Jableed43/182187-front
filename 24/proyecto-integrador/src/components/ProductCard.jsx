import { useNavigate } from "react-router-dom";
import useDeleteProduct from "../hooks/products/useDeleteProduct";

function ProductCard({ products }) {
  const navigate = useNavigate()
  const {deleteProduct, error} = useDeleteProduct()
  
  const handleEditProduct = (e, productId) => {
    e.stopPropagation()
    navigate(`/products/edit/${productId}`)
  }

   const handleDeleteProduct = async (e, productId) => {
    e.stopPropagation()
    if(window.confirm("Estas seguro que queres eliminar el producto?")){
     const response = await deleteProduct(productId)
     console.log(response)
     if(response){
      // Permite actualizar la pagina
      window.location.reload()
      // Lo mejor al borrar es volver a ejecutar el hook get de products useGetProducts
      return
     }
    }
    
  }

    if(error){
    return (
      <>
      <div className="loading-error-screen">
        <h2> Error al borrar el producto </h2>
        {/* <p> {error.message} </p> */}
        <p> {error?.message || String(error)} </p>
      </div>
      </>
    )
  }

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {/* // La mera card */}
      {products.map((product) => (
        // Este div se va a repetir por cada producto que posea
        <div
          style={{
            width: "200px",
            border: "solid black",
            textAlign: "center",
            backgroundColor: "#d0d7d8",
            display: "flex",
            flexDirection: "column",
          }}
          key={product.id}
        >
          <h1 style={{ fontSize: "16px", textTransform: "capitalize" }}>
            
            {product.name}
          </h1>

          <img
            style={{ width: "100%", height: "120px" }}
            src={product.image}
            alt={product.name}
          />

          <p style={{ textTransform: "capitalize" }}> {product.description} </p>
          <p style={{ fontWeight: "bolder" }}> ${product.price} </p>
          <p> Stock Disponible: {product.quantity} </p>
          {/* Renderizado condicional, condicion cortocircuito */}
          {product.highlighted && (
            <p style={{ fontWeight: "bolder", color: "green" }}>
              
              Producto destacado
            </p>
          )}

          <div>
          <button onClick={(e) => handleEditProduct(e, product.id)}> Editar </button>
          <button onClick={(e) => handleDeleteProduct(e, product.id)} >Borrar</button>
          </div>

        </div>
      ))}
    </section>
  );
}

export default ProductCard;
