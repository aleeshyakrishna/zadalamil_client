import { useState } from 'react';
import { AddCategoryModal } from '../Modal/Category/AddCategoryModal.jsx';
import { EditCategoryModal } from '../Modal/Category/EditcategoryModal.jsx';
import { ConfirmEditCategoryModal } from '../Modal/Category/ConfirmEditCategoryModal.jsx';
import { DeleteCategoryModal } from '../Modal/Category/DeleteCategoryModal.jsx';

export default function CategoryTable() {

    const [isModalOpenAddCategory, setIsModalOpenAddCategory] = useState(false);
    const [isModalOpenEditCategory, setIsModalOpenEditCategory] = useState(false);
    const [isModalOpenConfirmEditCategory, setIsModalOpenConfirmEditCategory] = useState(false);
    const [isModalOpenDeleteCategory, setIsModalOpenDeleteCategory] = useState(false);


    const handleUpdateCategory = () => {
        setIsModalOpenEditCategory(false);
        setIsModalOpenConfirmEditCategory(true); 
    };

    const handleConfirmUpdateCategory = () => {
        console.log("category updated");
        setIsModalOpenConfirmEditCategory(false); 
    };

    const handleDeleteCategory = () => {
        console.log("Category deleted");
        setIsModalOpenDeleteCategory(false); 
      };

    const categories = [
        {
            id: 1,
            name: "Mobile & Tablets",
            status: "UNLIST",
        },
        {
            id: 2,
            name: "TV & AUDIO",
            status: "UNLIST",
        },
        {
            id: 3,
            name: "Wearables & Smart Watchs",
            status: "UNLIST",
        },
        {
            id: 4,
            name: "Appliances",
            status: "LIST",
        },
        {
            id: 5,
            name: "Personal Care",
            status: "UNLIST",
        },
    ];

    const handleSaveCategory = () => {
        console.log("Category saved");
        setIsModalOpenAddCategory(false); 
    };

    return (
        <div className="p-8 w-full m-20">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">CATEGORY MANAGEMENT</h1>
                <button 
                    className="bg-gradient-to-r from-[#1D0F0F] to-[#972323] text-white px-4 py-2 rounded"
                    onClick={() => setIsModalOpenAddCategory(true)}
                >+ Add Category</button>
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4">No</th>
                            <th className="py-2 px-4">Category Name</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">Edit</th>
                            <th className="py-2 px-4">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={category.id} className="border-t even:bg-blue-gray-50/50">
                                <td className="py-3 px-4 text-center">{index + 1}</td>
                                <td className="py-3 px-4 ">
                                    {category.name}
                                </td>
                                <td className="py-3 px-4 text-center cursor-pointer">
                                    <span
                                        className={`px-4 py-2 rounded ${category.status === "LIST" ? "bg-yellow-600" : "bg-orange-700 text-white"}`}
                                    >
                                        {category.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <button 
                                        onClick={() => setIsModalOpenEditCategory(true)}
                                        className="bg-green-900 text-white px-4 py-2 rounded"
                                    >
                                        EDIT
                                    </button>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <button 
                                    onClick={() => setIsModalOpenDeleteCategory(true) }
                                    className="bg-red-900 text-white px-4 py-2 rounded"
                                    >
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <AddCategoryModal
                open={isModalOpenAddCategory}
                setOpen={setIsModalOpenAddCategory}
                saveCategory={handleSaveCategory}
            />

            <EditCategoryModal
                open={isModalOpenEditCategory}
                setOpen={setIsModalOpenEditCategory}
                saveCategory={handleUpdateCategory}
            />
        
            <ConfirmEditCategoryModal
                open={isModalOpenConfirmEditCategory}
                setOpen={setIsModalOpenConfirmEditCategory}
                saveCategory={handleConfirmUpdateCategory} 
            />

            <DeleteCategoryModal
                open={isModalOpenDeleteCategory}
                setOpen={setIsModalOpenDeleteCategory}
                deleteCategory={handleDeleteCategory}
            />

        </div>
    );
}
