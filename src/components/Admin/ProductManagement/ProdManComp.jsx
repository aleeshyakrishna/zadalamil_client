import { useState } from 'react';
import Img1 from '../../../assets/images/mob1.png';
import { AddProductModal } from '../Modal/AddProductModal';


export default function ProductTable() {
      const [isModalOpenAddProduct, setIsModalOpenAddProduct] = useState(false);
    
  const products = [
    {
      id: 1,
      name: "SAMSUNG Galaxy S23 Series AI Phone, Unlocked Android Smartphone, 128GB",
      stock: 2500,
      price: 3500,
      status: "UNLIST",
    },
    {
      id: 2,
      name: "SAMSUNG Galaxy S23 Series AI Phone, Unlocked Android Smartphone, 128GB",
      stock: 2500,
      price: 3500,
      status: "UNLIST",
    },
    {
      id: 3,
      name: "SAMSUNG Galaxy S23 Series AI Phone, Unlocked Android Smartphone, 128GB",
      stock: 0,
      price: 3500,
      status: "UNLIST",
    },
    {
      id: 4,
      name: "SAMSUNG Galaxy S23 Series AI Phone, Unlocked Android Smartphone, 128GB",
      stock: 2500,
      price: 3500,
      status: "LIST",
    },
    {
      id: 5,
      name: "SAMSUNG Galaxy S23 Series AI Phone, Unlocked Android Smartphone, 128GB",
      stock: 2500,
      price: 3500,
      status: "UNLIST",
    },
  ];

  const handleSaveProduct = () => {
    console.log("Product saved");
    setIsModalOpenAddProduct(false); 
  };

  return (
    <div className="p-8 w-full m-20">
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">PRODUCT MANAGEMENT</h1>
            <button 
            className="bg-gradient-to-r from-[#1D0F0F] to-[#972323] text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpenAddProduct(true)}
            >+ Add Product
            </button>
        </div>

        <div className="overflow-x-auto mt-10">
            <table className="min-w-full bg-white border border-gray-200">
            <thead>
                <tr className="bg-gray-100">
                <th className="py-2 px-4">No</th>
                <th className="py-2 px-4">Product Name</th>
                <th className="py-2 px-4">Stock</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Edit</th>
                <th className="py-2 px-4">Delete</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                <tr key={product.id} className="border-t even:bg-blue-gray-50/50">
                    <td className="py-3 px-4 text-center">{index + 1}</td>
                    <td className="py-3 px-4 flex items-center">
                    <img src={Img1} alt="product" className="h-10 w-10 mr-4 rounded" />
                    {product.name}
                    </td>
                    <td className="py-3 px-4 text-center">
                    {product.stock > 0 ? (
                        product.stock
                    ) : (
                        <span className="text-red-900">Out of stock</span>
                    )}
                    </td>
                    <td className="py-3 px-4 text-center">{product.price}</td>
                    
                    <td className="py-3 px-4 text-center cursor-pointer">
                    <span
                        className={`px-4 py-2 rounded ${
                        product.status === "LIST" ? "bg-yellow-600" : "bg-orange-700 text-white"
                        }`}
                    >
                        {product.status}
                    </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                    <button className="bg-green-900 text-white px-4 py-2 rounded">EDIT</button>
                    </td>
                    <td className="py-3 px-4 text-center">
                    <button className="bg-red-900 text-white px-4 py-2 rounded">DELETE</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        <AddProductModal
            open={isModalOpenAddProduct}
            setOpen={setIsModalOpenAddProduct}
            saveProduct={handleSaveProduct}
        />
    </div>
  );
}
