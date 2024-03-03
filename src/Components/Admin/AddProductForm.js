import React, { useState } from 'react';

const AddProductForm = ({ initialProduct, addProduct, updateProduct, cancelEdit }) => {
  const [product, setProduct] = useState(initialProduct || { name: '', description: '', category: '', price: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (initialProduct) {
      // Updating existing product
      updateProduct({ ...initialProduct, ...product });
      cancelEdit();
    } else {
      // Adding new product
      addProduct({ ...product, id: Date.now() });
      setProduct({ name: '', description: '', category: '', price: '', image: '' });
    }
  };

  return (
    <tr>
      <td>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
      </td>
      <td>
        <input type="text" name="description" value={product.description} onChange={handleChange} required />
      </td>
      <td>
        <input type="text" name="category" value={product.category} onChange={handleChange} required />
      </td>
      <td>
        <input type="number" name="price" value={product.price} onChange={handleChange} required />
      </td>
      <td>
        <input type="text" name="image" value={product.image} onChange={handleChange} />
      </td>
      <td>
        <button type="button" onClick={cancelEdit}>Cancel</button>
        <button type="submit" onClick={handleSubmit}>{initialProduct ? 'Update' : 'Add'}</button>
      </td>
    </tr>
  );
};

export default AddProductForm;
