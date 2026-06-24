import { useNavigate } from "react-router-dom";
import useDeleteProduct from "../hooks/products/useDeleteProduct";
import useAuth from "../hooks/user/useAuth";
import useCart from "../hooks/cart/useCart";
import { notifyToast, notifyError, confirmAction } from "../utils/notify";

function ProductCard({ products, onProductDeleted }) {
  const navigate = useNavigate()
  const {deleteProduct, error} = useDeleteProduct()
  const { isAdmin, isAuthenticated } = useAuth()
  const { addToCart } = useCart()

  const handleAddToCart = (e, productId) => {
    e.stopPropagation()
    addToCart(productId)
    notifyToast("Producto agregado al carrito")
  }
  
  const handleEditProduct = (e, productId) => {
    e.stopPropagation()
    navigate(`/products/edit/${productId}`)
  }

   const handleDeleteProduct = async (e, productId) => {
    e.stopPropagation()
    const confirmed = await confirmAction(
      "¿Eliminar producto?",
      "Esta acción no se puede deshacer.",
      "Sí, eliminar"
    )
    if(confirmed){
     const response = await deleteProduct(productId)
     if(response){
      // Recargar solo el listado de productos (sin recargar toda la página)
      onProductDeleted?.()
     } else {
      notifyError("No se pudo eliminar", "Ocurrió un error al borrar el producto")
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
    <section className="d-flex flex-row flex-wrap gap-3 justify-content-center p-3">
      {/* // La mera card */}
      {products.map((product) => (
        // Este div se va a repetir por cada producto que posea
        <div
          className="card text-center"
          style={{ width: "200px", backgroundColor: "#d0d7d8" }}
          key={product.id}
        >
          <img
            className="card-img-top"
            style={{ height: "120px", objectFit: "cover" }}
            src={product.image}
            alt={product.name}
          />

          <div className="card-body d-flex flex-column">
            <h2 className="card-title" style={{ fontSize: "16px", textTransform: "capitalize" }}>
              {product.name}
            </h2>

            <p className="card-text" style={{ textTransform: "capitalize" }}> {product.description} </p>
            <p className="fw-bold mb-1"> ${product.price} </p>
            <p className="mb-1"> Stock Disponible: {product.quantity} </p>
            {/* Renderizado condicional, condicion cortocircuito */}
            {product.highlighted && (
              <span className="badge text-bg-success mb-2"> Producto destacado </span>
            )}

            <div className="mt-auto d-grid gap-2">
              {/* Agregar al carrito: solo para usuarios autenticados */}
              {isAuthenticated && (
                <button className="btn btn-primary btn-sm" onClick={(e) => handleAddToCart(e, product.id)}>
                  Agregar al carrito
                </button>
              )}

              {/* Editar / Borrar solo visibles para administradores */}
              {isAdmin && (
                <div className="d-flex gap-2 justify-content-center">
                <button className="btn btn-outline-secondary btn-sm" onClick={(e) => handleEditProduct(e, product.id)}> Editar </button>
                <button className="btn btn-outline-danger btn-sm" onClick={(e) => handleDeleteProduct(e, product.id)} >Borrar</button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductCard;
