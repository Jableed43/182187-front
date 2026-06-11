import useGetProducts from "../../hooks/products/useGetProducts"

function Products() {
  const {error, loading, products} = useGetProducts()

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
    {/* // contenedor de las cards */}
    <section style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center"
    }}>
      {/* // La mera card */}
      { products.map((product) => (
      // Este div se va a repetir por cada producto que posea
      <div style={{
        width: "200px",
        border: "solid black",
        textAlign: "center",
        backgroundColor: "#d0d7d8",
        display: "flex",
        flexDirection: "column"
      }} key={product.id} >
        <h1> {product.name} </h1>
      </div>

      )) }

    </section>
    </>

  )
}

export default Products