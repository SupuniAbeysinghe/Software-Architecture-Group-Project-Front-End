import React from 'react';
import ProductItem from './ProductItem';

const ProductTable = ({ products, deleteProduct, updateProduct }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Price</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
