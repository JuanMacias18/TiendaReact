// src/components/Product.jsx
import React from "react";

// Componente de un solo producto
const Product = ({ image, name, description, link }) => {
  return (
    <div style={styles.product}>
      {/* Imagen del producto */}
      <img src={image} alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p>{description}</p>
      {/* Botón para comprar el producto en WhatsApp */}
      <a href={link} target="_blank" rel="noopener noreferrer" style={styles.buyBtn}>
        Comprar ahora
      </a>
    </div>
  );
};

// Estilos en línea para el producto
const styles = {
  product: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    padding: "15px",
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "8px",
  },
  buyBtn: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    display: "inline-block",
    marginTop: "10px",
  },
};

export default Product;