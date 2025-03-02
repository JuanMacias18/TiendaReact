// src/components/Header.jsx
import React from "react";

// Componente del encabezado de la tienda
const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Fashion Store</h1>
      {/* Barra de navegación con enlaces */}
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Carrito</a>
      </nav>
    </header>
  );
};

// Estilos en línea para el encabezado
const styles = {
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "15px 0",
    textAlign: "center",
  },
};

export default Header;