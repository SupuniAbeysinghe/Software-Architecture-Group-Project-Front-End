// ProductItem.js
import React, { useState } from 'react';
import AddProductForm from './AddProductForm';

const ProductItem = ({ product, deleteProduct, updateProduct }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    deleteProduct(product.id);
  };

  const handleUpdateProduct = (updatedProduct) => {
    updateProduct(updatedProduct);
    setIsEditing(false);
  };

  return (
    <tr>
      {isEditing ? (
        <AddProductForm
          initialProduct={product}
          updateProduct={handleUpdateProduct}
          cancelEdit={() => setIsEditing(false)}
        />
      ) : (
        <>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{product.category}</td>
          <td>${product.price}</td>
          <td>
            <img src={product.image} alt={product.name} />
          </td>
          <td>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default ProductItem;
