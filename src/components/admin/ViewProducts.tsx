// "use client";
// import { useProduct } from "@/providers/AddProductProvider";
// import React, { useState } from "react";
// import EditProductForm from "./Editform/EditViewProduct";

// const BoolText = ({ value }) => <span>{value ? "Yes" : "No"}</span>;

// const ViewProducts = () => {
//   const { products, deleteProduct } = useProduct();

//   const [editIndex, setEditIndex] = useState(null);

//   // console.log(products, "products in view products");
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">All Products</h2>
//       {products.length === 0 ? (
//         <p>No products available.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {products.map((product, index) => (
//             <div key={index} className="p-4 border rounded shadow">
//               {editIndex === index ? (
//                 <EditProductForm
//                   product={product}
//                   onClose={() => setEditIndex(null)}
//                 />
//               ) : (
//                 <div>
//                   <button
//                     onClick={() => setEditIndex(index)}
//                     className="cursor-pointer text-sm bg-yellow-400 px-2 py-1 rounded"
//                   >
//                     ✏️ Edit
//                   </button>
//                   <button
//                     onClick={() => deleteProduct(product.id)}
//                     className="cursor-pointer text-sm bg-red-400 px-2 py-1 rounded ml-4"
//                   >
//                     🗑 Delete
//                   </button>
//                   <h3 className="text-xl font-semibold mb-2">
//                     {product.category} - {product.modelNumber}
//                   </h3>
//                   <p>
//                     <strong>Product Name:</strong> {product.name}
//                   </p>
//                   <p>
//                     <strong>Type:</strong> {product.productType}
//                   </p>
//                   <p>
//                     <strong>Dimensions (WxHxD):</strong> {product.dimensions}
//                   </p>
//                   <p>
//                     <strong>Energy Consumption (kWh/Year):</strong>{" "}
//                     {product.energyConsumption}
//                   </p>
//                   <p>
//                     <strong>Energy Grade:</strong> {product.energyGrade}
//                   </p>
//                   <p>
//                     <strong>Compressor Type:</strong> {product.compressorType}
//                   </p>
//                   <p>
//                     <strong>WiFi:</strong> <BoolText value={product.wifi} />
//                   </p>

//                   <p>
//                     <strong>Finish (Door):</strong> {product.doorFinish}
//                   </p>
//                   <p>
//                     <strong>Product Type:</strong> {product.productType}
//                   </p>
//                   <p>
//                     <strong>Country of Origin:</strong>{" "}
//                     {product.countryOfOrigin}
//                   </p>
//                   <p>
//                     <strong>Door Alarm:</strong>{" "}
//                     <BoolText value={product.doorAlarm} />
//                   </p>
//                   <p>
//                     <strong>Express Freeze:</strong>{" "}
//                     <BoolText value={product.expressFreeze} />
//                   </p>
//                   <p>
//                     <strong>External LED Display:</strong>{" "}
//                     {product.externalDisplay ? "Yes" : "No"}
//                   </p>
//                   <p>
//                     <strong>Product Weight (kg):</strong>{" "}
//                     {product.productWeight}
//                   </p>
//                   <p>
//                     <strong>Packing Weight (kg):</strong>{" "}
//                     {product.packingWeight}
//                   </p>
//                   <p>
//                     <strong>Door Cooling+:</strong>
//                     <BoolText value={product.doorCooling} />
//                   </p>
//                   <p>
//                     <strong>Star Rating:</strong>
//                     {product.starRating}
//                   </p>
//                   <p>
//                     <strong>Ice Maker:</strong> {product.iceMaker}
//                   </p>
//                   <p>
//                     <strong>Door Material:</strong> {product.doorMaterial}
//                   </p>
//                   <p>
//                     <strong>Handle Type:</strong> {product.handleType}
//                   </p>
//                   <p>
//                     <strong>Transparent Door Basket:</strong>{" "}
//                     {product.transparentBaskets}
//                   </p>
//                   <p>
//                     <strong>Refrigerator Light:</strong>{" "}
//                     {product.refrigeratorLight}
//                   </p>
//                   <p>
//                     <strong>Shelf (Tempered Glass):</strong>{" "}
//                     <BoolText value={product.shelfTemperedGlass} />
//                   </p>
//                   <p>
//                     <strong>Vegetable Box:</strong>
//                     <BoolText value={product.vegetableBox} />
//                   </p>
//                   <p>
//                     <strong>Smart Diagnosis:</strong>
//                     <BoolText value={product.smartDiagnosis} />
//                   </p>
//                   <p>
//                     <strong>BAR CODE:</strong> {product.barcode}
//                   </p>
//                   <p>
//                     <strong>Total Volume (L):</strong>{" "}
//                     {product.storageVolumeTotal}
//                   </p>
//                   <p>
//                     <strong>Freezer Volume (L):</strong>{" "}
//                     {product.storageVolumeFreezer}
//                   </p>
//                   <p>
//                     <strong>Refrigerator Volume (L):</strong>{" "}
//                     {product.storageVolumeRefrigerator}
//                   </p>
//                   <p>
//                     <strong>Importer:</strong> {product.importer}
//                   </p>
//                   <p>
//                     <strong>Manufacturer:</strong> {product.manufacturer}
//                   </p>
//                   <p>
//                     <strong>Mark of Origin:</strong> {product.markOfOrigin}
//                   </p>
//                   <p>
//                     <strong>Net Quantity:</strong> {product.netQuantity}
//                   </p>
//                   <p>
//                     <strong>Freezer transparentBaskets:</strong>{" "}
//                     {product.transparentBaskets}
//                   </p>
//                   <p>
//                     <strong>
//                       Freezer temperedGlassShelves(Tempered Glass):
//                     </strong>{" "}
//                     {product.temperedGlassShelves}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewProducts;

"use client";
// import { useProduct } from "@/providers/AddProductProvider";
import React, { useState } from "react";
import EditProductForm from "./Editform/EditViewProduct";

const ViewProducts = () => {
  const { products, deleteProduct } = useProduct();
  const [editIndex, setEditIndex] = useState(null);
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div key={product.id} className="p-4 border rounded shadow">
              {editIndex === index ? (
                <EditProductForm
                  product={product}
                  onClose={() => setEditIndex(null)}
                />
              ) : (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <button
                      onClick={() => setEditIndex(index)}
                      className="cursor-pointer text-sm bg-yellow-400 px-2 py-1 rounded"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="cursor-pointer text-sm bg-red-400 px-2 py-1 rounded"
                    >
                      🗑 Delete
                    </button>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {product.category} - {product.modelNumber}
                  </h3>
                  <p>
                    <strong>Product Name:</strong> {product.name}
                  </p>
                  <p>
                    <strong>Type:</strong> {product.productType}
                  </p>
                  <p>
                    <strong>Barcode:</strong> {product.barcode}
                  </p>
                  <p>
                    <strong>Country of Origin:</strong>{" "}
                    {product.countryOfOrigin}
                  </p>
                  <p>
                    <strong>Importer:</strong> {product.importer}
                  </p>
                  <p>
                    <strong>Manufacturer:</strong> {product.manufacturer}
                  </p>
                  <p>
                    <strong>Mark of Origin:</strong> {product.markOfOrigin}
                  </p>
                  <p>
                    <strong>Net Quantity:</strong> {product.netQuantity}
                  </p>
                  <p>
                    <strong>Price:</strong> {product.price}
                  </p>

                  {/* 🔥 Specifications List */}
                  {product.specifications &&
                  product.specifications.length > 0 ? (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold mb-2">
                        Specifications:
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {product.specifications.map((spec) => (
                          <li key={spec.key}>
                            <strong>{spec.key}:</strong> {spec.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p>No specifications available.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewProducts;

// "use client";
// import { useProduct } from "@/providers/AddProductProvider";
// import React, { useState } from "react";
// import { Pencil } from "lucide-react"; // or any icon lib

// const BoolText = ({ value }) => <span>{value ? "Yes" : "No"}</span>;

// const ViewProducts = () => {
//   const { products, updateProduct } = useProduct();
//   const [editIndex, setEditIndex] = useState(null);
//   const [editableData, setEditableData] = useState({});
//   // console.log(products, "products in view products");

//   const handleEdit = (index, product) => {
//     setEditIndex(index);
//     setEditableData(product);
//   };

//   const handleChange = (key, value) => {
//     setEditableData((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const handleSave = async (id) => {
//     await updateProduct(id, editableData);
//     setEditIndex(null);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">All Products</h2>
//       {products.length === 0 ? (
//         <p>No products available.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {products.map((product, index) => {
//             const isEditing = index === editIndex;
//             return (
//               <div key={index} className="p-4 border rounded shadow relative">
//                 {!isEditing && (
//                   <button
//                     className="absolute top-2 right-2"
//                     onClick={() => handleEdit(index, product)}
//                   >
//                     <Pencil size={18} />
//                   </button>
//                 )}

//                 <h3 className="text-xl font-semibold mb-2">
//                 {product.category} - {product.modelNumber}
//                   {isEditing ? (
//                     <input
//                       value={editableData.model}
//                       onChange={(e) =>
//                         handleChange("model", e.target.value)
//                       }
//                       className="border p-1"
//                     />
//                   ) : (
//                     product.model
//                   )}
//                 </h3>

//                 <p>
//                   <strong>Type:</strong>{" "}
//                   {isEditing ? (
//                     <input
//                       value={editableData.productType}
//                       onChange={(e) =>
//                         handleChange("productType", e.target.value)
//                       }
//                       className="border p-1"
//                     />
//                   ) : (
//                     product.productType
//                   )}
//                 </p>

//                 {/* Add more editable fields here like the example above */}

//                 {isEditing && (
//                   <div className="mt-4 space-x-2">
//                     <button
//                       onClick={() => handleSave(product.id)}
//                       className="bg-green-500 text-white px-4 py-1 rounded"
//                     >
//                       Save
//                     </button>
//                     <button
//                       onClick={() => setEditIndex(null)}
//                       className="bg-gray-500 text-white px-4 py-1 rounded"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewProducts;
