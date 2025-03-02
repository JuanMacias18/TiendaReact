// src/App.jsx
import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

// Componente principal de la aplicación
const App = () => {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
};

export default App;