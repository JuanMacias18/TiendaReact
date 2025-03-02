// src/components/ProductList.jsx
import React from "react";
import Product from "./Product";

// Lista de productos disponibles en la tienda
const products = [
  {
    image: "https://http2.mlstatic.com/D_NQ_NP_923016-MCO46801287829_072021-O.webp",
    name: "Camisa Elegante",
    description: "Camisa de algodón de alta calidad, perfecta para ocasiones especiales.",
    link: "https://wa.me/?text=Me%20interesa%20el%20producto%20Camisa%20Elegante",
  },
  {
    image: "https://http2.mlstatic.com/D_NQ_NP_903646-MCO73656607283_122023-O.webp",
    name: "Pantalón de Vestir",
    description: "Pantalón elegante para eventos formales, disponible en varios colores.",
    link: "https://wa.me/?text=Me%20interesa%20el%20producto%20Pantalón%20de%20Vestir",
  },
  {
    image: "https://http2.mlstatic.com/D_NQ_NP_829746-CBT75487458221_032024-O.webp",
    name: "Zapatos de Cuero",
    description: "Zapatos de cuero con diseño exclusivo, ideales para cualquier evento.",
    link: "https://wa.me/?text=Me%20interesa%20el%20producto%20Zapatos%20de%20Cuero",
  },
  {
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_781306-MCO72820529877_112023-F.webpp",
    name: "Chaqueta de Cuero",
    description: "Chaqueta de cuero auténtico, cómoda y de estilo único.",
    link: "https://wa.me/?text=Me%20interesa%20el%20producto%20Chaqueta%20de%20Cuero",
  },
  {
    image: "https://http2.mlstatic.com/D_NQ_NP_965180-MCO72631061682_112023-O.webp",
    name: "Vestido de Noche",
    description: "Elegante vestido de noche con detalles en encaje, perfecto para cualquier ocasión.",
    link: "https://wa.me/?text=Me%20interesa%20el%20producto%20Vestido%20de%20Noche",
  }
];

// Componente que muestra la lista de productos en la página principal
const ProductList = () => {
  return (
    <section className="product-list">
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </section>
  );
};

export default ProductList;