
"use client";
import React, { useState } from "react";
// import { useProduct } from "@/providers/AddProductProvider";
// import axios from "axios";

const EditProductForm = ({ product, onClose }) => {
  // const { updateProduct } = useProduct();
  const [formData, setFormData] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await updateProduct(product.id, formData);
      // Optionally, you can refresh the product list here if needed
      //   fetchProducts(); // refresh the list
      onClose(); // close the form
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded shadow space-y-4 max-h-[100vh] overflow-y-scroll"
    >
      <h2 className="text-xl font-semibold">Edit Product</h2>
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="flex flex-col">
          <label className="capitalize text-sm font-medium">{key}</label>
          {typeof value === "boolean" ? (
            <input
              type="checkbox"
              name={key}
              checked={value}
              onChange={handleChange}
              className="w-5 h-5"
            />
          ) : (
            <input
              type="text"
              name={key}
              value={value || ""}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          )}
        </div>
      ))}

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditProductForm;
