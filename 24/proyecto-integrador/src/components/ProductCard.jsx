import React from "react";

function ProductCard({ products }) {
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
        </div>
      ))}
    </section>
  );
}

export default ProductCard;
