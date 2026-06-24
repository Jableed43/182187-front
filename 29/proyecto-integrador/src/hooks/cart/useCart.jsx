import { useState } from "react"

// Lógica del carrito en el cliente. Persiste en sessionStorage con la
// estructura acordada: [{ productId: Number, quantity: Number }].
// sessionStorage es la fuente de verdad: cada operación lee el estado actual
// desde ahí antes de mutar, para evitar datos obsoletos entre instancias.
const CART_KEY = "carrito"

function readCart() {
    try {
        return JSON.parse(sessionStorage.getItem(CART_KEY)) || []
    } catch {
        return []
    }
}

function useCart() {
    const [items, setItems] = useState(readCart)

    const persist = (next) => {
        sessionStorage.setItem(CART_KEY, JSON.stringify(next))
        setItems(next)
    }

    // Cambia la cantidad de un producto en `delta`. Si no existe y delta es
    // positivo, lo agrega. Los items que quedan en 0 (o menos) se eliminan.
    const changeQuantity = (productId, delta) => {
        const current = readCart()
        const base = current.some((i) => i.productId === productId)
            ? current
            : [...current, { productId, quantity: 0 }]
        const next = base
            .map((i) =>
                i.productId === productId ? { ...i, quantity: i.quantity + delta } : i
            )
            .filter((i) => i.quantity > 0)
        persist(next)
    }

    const addToCart = (productId) => changeQuantity(productId, 1)
    const increment = (productId) => changeQuantity(productId, 1)
    const decrement = (productId) => changeQuantity(productId, -1)
    const removeItem = (productId) =>
        persist(readCart().filter((i) => i.productId !== productId))
    const clearCart = () => persist([])

    return { items, addToCart, increment, decrement, removeItem, clearCart }
}

export default useCart
