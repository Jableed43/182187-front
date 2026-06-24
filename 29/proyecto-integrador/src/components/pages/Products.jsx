import useGetProducts from "../../hooks/products/useGetProducts"
import ProductCard from "../ProductCard"

function Products() {
  const {error, loading, products, refetch} = useGetProducts()

  if(error){
    return (
      <>
      <div className="loading-error-screen">
        <h2> Error al cargar los productos </h2>
        {/* <p> {error.message} </p> */}
        <p> {error?.message || String(error)} </p>
      </div>
      </>
    )
  }

  if(loading){
    return (
      <>
      <div className="loading-error-screen" >
      <h2>Cargando productos...</h2>
      <img src="./loading.gif" alt="loading" />
      </div>
      </>
    )
  }

  return (
    <>
    <h1>Products</h1>
    <ProductCard products={products} onProductDeleted={refetch} />
    </>

  )
}

export default Products