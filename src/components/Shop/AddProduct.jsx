import React, { useState } from "react";
import Swal from "sweetalert2";
import "tailwindcss/tailwind.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product submitted:", product);
    fetch("http://localhost:5000/allProducts", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Product Added",
        showConfirmButton: false,
        timer: 1500,
      });
  };

  return (
    <>
      <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product Name:
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price:
            </label>
            <input
              type="text"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Image URL:
            </label>
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category:
            </label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
