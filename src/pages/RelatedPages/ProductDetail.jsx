import React from 'react';
import { useParams } from 'react-router-dom';
import '../../style/productDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Utilise l'ID pour récupérer les détails du produit
  // Exemple : const product = getProductById(id);
  
  return (
    <div>
      <h1>Product Details for {id}</h1>
      {/* Affiche les détails du produit ici */}
    </div>
  );
}

export default ProductDetail;
