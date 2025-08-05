"use client";

import { useState } from "react";
import {
  commonProductFields,
  televisionSpecs,
  refrigeratorSpecs,
  washingMachineSpecs,
  airconditionerSpecs,
  defaultSpecs,
} from "../../specificationdata";
const categoryOptions = [
  "televisions",
  "air conditioners",
  "refrigerators",
  "washing machines",
];

const specsByCategory = {
  televisions: televisionSpecs,
  refrigerators: refrigeratorSpecs,
  "washing machines": washingMachineSpecs,
  "air conditioners": airconditionerSpecs,
};

export default function AddProductForm() {
  // const { addProduct } = useProduct();

  const [productData, setProductData] = useState({
    category: "",
    ...Object.fromEntries(commonProductFields.map((f) => [f.name, ""])),
  });

  const [specData, setSpecData] = useState({});
  const [currentSpecs, setCurrentSpecs] = useState(defaultSpecs);

  const handleProductChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      setCurrentSpecs(specsByCategory[value] || defaultSpecs);
    }

    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpecChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSpecData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const specifications = Object.entries(specData).map(([key, value]) => ({
      key,
      value: typeof value === "boolean" ? value.toString() : value,
    }));

    const finalData = {
      ...productData,
      specifications,
    };

    // await addProduct(finalData);

    // Reset form
    setProductData({
      category: "",
      ...Object.fromEntries(commonProductFields.map((f) => [f.name, ""])),
    });
    setSpecData({});
    setCurrentSpecs(defaultSpecs);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

      {/* Category Dropdown at Top */}
      <div>
        <label className="block mb-2 font-semibold">Category</label>
        <select
          name="category"
          value={productData.category}
          onChange={handleProductChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Category</option>
          {categoryOptions.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Other Product Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {commonProductFields.map(({ name, label }) => (
          <input
            key={name}
            name={name}
            value={productData[name]}
            onChange={handleProductChange}
            placeholder={label}
            className="w-full border p-2 rounded"
          />
        ))}
      </div>

      {/* Dynamic Specifications */}
      <h2 className="text-xl font-semibold mt-6">Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentSpecs.map(({ name, label, type }) => (
          
          <div key={name}>
            {type === "checkbox" ? (
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={name}
                  checked={!!specData[name]}
                  onChange={handleSpecChange}
                />
                <span>{label}</span>
              </label>
            ) : (
              <input
                name={name}
                value={specData[name] || ""}
                onChange={handleSpecChange}
                placeholder={label}
                className="w-full border p-2 rounded"
              />
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4 cursor-pointer"
      >
        Add Product
      </button>
    </form>
  );
}
