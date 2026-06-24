import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useCart from "../../hooks/cart/useCart"
import useGetProducts from "../../hooks/products/useGetProducts"
import usePatchProduct from "../../hooks/products/usePatchProduct"
import usePostOrder from "../../hooks/cart/usePostOrder"
import useAuth from "../../hooks/user/useAuth"
import { notifySuccess, notifyError, notifyInfo, confirmAction } from "../../utils/notify"

// Vista del carrito (/cart), accesible solo a usuarios autenticados.
// Cruza los items del carrito (productId + quantity) con los datos completos
// del producto (nombre, precio, stock) traídos de la API. En el checkout
// descuenta el stock con PATCH individuales y registra la orden con POST /orders.
function CartPage() {
  const { items, increment, decrement, removeItem, clearCart } = useCart()
  const { products, loading } = useGetProducts()
  const { patchProduct } = usePatchProduct()
  const { postOrder } = usePostOrder()
  const { user } = useAuth()
  const navigate = useNavigate()

  const [processing, setProcessing] = useState(false)

  // Cruce de cada item con su producto correspondiente
  const detailedItems = items
    .map((item) => {
      const product = products.find((p) => p.id === item.productId)
      return product ? { ...item, product } : null
    })
    .filter(Boolean)

  const total = detailedItems.reduce(
    (acc, { product, quantity }) => acc + product.price * quantity,
    0
  )

  const handleClearCart = async () => {
    const confirmed = await confirmAction(
      "¿Vaciar el carrito?",
      "Se quitarán todos los productos.",
      "Sí, vaciar"
    )
    if (confirmed) clearCart()
  }

  const handleCheckout = async () => {
    if (detailedItems.length === 0) {
      notifyInfo("El carrito está vacío")
      return
    }

    // Validar stock disponible antes de comprar
    const sinStock = detailedItems.find(
      ({ product, quantity }) => quantity > product.quantity
    )
    if (sinStock) {
      notifyError(
        "Stock insuficiente",
        `"${sinStock.product.name}" tiene solo ${sinStock.product.quantity} en stock.`
      )
      return
    }

    const confirmed = await confirmAction(
      "Confirmar compra",
      `Total a pagar: $${total}`,
      "Sí, comprar"
    )
    if (!confirmed) return

    setProcessing(true)
    try {
      // Descontar stock de cada producto (PATCH individuales)
      for (const { product, quantity } of detailedItems) {
        const result = await patchProduct(
          { quantity: product.quantity - quantity },
          product.id
        )
        if (!result) throw new Error("Error al actualizar el stock")
      }

      // Registrar la orden de compra
      const order = {
        userId: user.id,
        items: items.map(({ productId, quantity }) => ({ productId, quantity })),
        total,
        createdAt: new Date().toISOString(),
      }
      const savedOrder = await postOrder(order)
      if (!savedOrder) throw new Error("Error al registrar la orden")

      clearCart()
      await notifySuccess("¡Compra realizada con éxito!", `Total: $${total}`)
      navigate("/")
    } catch (error) {
      console.error(error)
      notifyError("Error en la compra", "Ocurrió un error al procesar la compra. Intentá nuevamente.")
    } finally {
      setProcessing(false)
    }
  }

  if (loading) return <p className="text-center my-4">Cargando carrito...</p>

  return (
    <div className="container my-4">
      <h1 className="mb-4">Mi Carrito</h1>

      {detailedItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <table className="table table-striped table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {detailedItems.map(({ product, quantity }) => (
                <tr key={product.id}>
                  <td style={{ textTransform: "capitalize" }}>
                    {product.name}
                  </td>
                  <td>${product.price}</td>
                  <td>
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => decrement(product.id)}>-</button>
                    <span className="mx-3">{quantity}</span>
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => increment(product.id)}>+</button>
                  </td>
                  <td>${product.price * quantity}</td>
                  <td>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(product.id)}>Quitar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="my-3">Total: ${total}</h2>

          <button className="btn btn-success me-2" onClick={handleCheckout} disabled={processing}>
            {processing ? "Procesando..." : "Finalizar compra"}
          </button>
          <button className="btn btn-outline-secondary" onClick={handleClearCart} disabled={processing}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  )
}

export default CartPage
