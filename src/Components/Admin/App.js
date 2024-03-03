import React, { useState } from 'react';
import ProductTable from './ProductTable';
import AddProductForm from './AddProductForm';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="app">
      <h1>Product Admin Dashboard</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductTable products={products} deleteProduct={deleteProduct} updateProduct={updateProduct} />
    </div>
  );
};

export default App;
