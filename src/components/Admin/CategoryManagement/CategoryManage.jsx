import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AddCategoryModal } from '../Modal/Category/AddCategoryModal.jsx';
import { EditCategoryModal } from '../Modal/Category/EditcategoryModal.jsx';
import { ConfirmEditCategoryModal } from '../Modal/Category/ConfirmEditCategoryModal.jsx';
import { DeleteCategoryModal } from '../Modal/Category/DeleteCategoryModal.jsx';
import { addCategory, checkCategoryNacheckCategoryNameExists, deleteCategory, getCategories, updateCategory, updateCategoryStatus } from '../../../Utils/categoryService.js';
import { toast } from "react-hot-toast";
import Loader from "../../Loader/Loader.jsx";
import { StatusCategoryModal } from '../Modal/Category/StatusCategoryModal.jsx';

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "List",
        value: "list",
    },
    {
        label: "Unlist",
        value: "unlist",
    },
];

const TABLE_HEAD = ["No", "Category Image", "Category Name", "Status", "Edit", "Delete"];
   
export default function CategoryTable()  {
    const [categories, setCategories] = useState([]);
    const [isModalOpenAddCategory, setIsModalOpenAddCategory] = useState(false);
    const [isModalOpenEditCategory, setIsModalOpenEditCategory] = useState(false);
    const [isModalOpenConfirmEditCategory, setIsModalOpenConfirmEditCategory] = useState(false);
    const [isModalOpenDeleteCategory, setIsModalOpenDeleteCategory] = useState(false);
    const [isModalOpenStatusCategory, setIsModalOpenStatusCategory] = useState(false);
    const [loading, setLoading] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const categoriesPerPage = 10;
    const [totalPages, setTotalPages] = useState(1);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null); 
    const [editingCategory, setEditingCategory] = useState(null);

    useEffect(() => {
        const loadCategories = async () => {
            setLoading(true);
            try {
                const data = await getCategories(currentPage, 10);
                setCategories(data.categories);
                setTotalPages(data.totalPages);
                
            } catch (error) {
                console.error("Error loading brands:", error.message);
            } finally {
                setLoading(false);
            }
        };
        loadCategories();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleEditCategory = (category) => {
        setEditingCategory(category); 
        setIsModalOpenEditCategory(true);
    };

    const handleUpdateCategory = async (category) => {
        if (category.name !== editingCategory.name) {
            try {
                const { exists, message } = await checkCategoryNacheckCategoryNameExists(category.name);
                if (exists) {
                    setEditingCategory({ ...category, errorMessage: message }); 
                    return; 
                }
            } catch (error) {
                console.error("Error validating category name:", error.message);
                setEditingCategory({ ...category, errorMessage: error.message });
                return;
            }
        }
        setEditingCategory(category);
        setIsModalOpenEditCategory(false);
        setIsModalOpenConfirmEditCategory(true);
    };
    
    const handleConfirmUpdateCategory = async () => {
        try {
            const data = await updateCategory(editingCategory._id, editingCategory); 
            console.log("Category updated:", data);
            toast.success("Category updated successfully");
            setCategories((prevCategories) =>
                prevCategories.map((b) =>
                    b._id === editingCategory._id ? { ...b, name: editingCategory.name, logo: editingCategory.categoryImg } : b
                )
            );
            setIsModalOpenConfirmEditCategory(false); 
        } catch (error) {
            console.error("Error updating category:", error);
        }
    };

    const handleDeleteCategory = async (categoryId) => {
        try {
            const data = await deleteCategory(categoryId);
            console.log("Category deleted successfully:", data);
            toast.success("Category deleted successfully");
            setIsModalOpenDeleteCategory(false);
            setCategories((prevCategories) => prevCategories.filter((category) => category._id !== categoryId));
        } catch (error) {
            console.error("Error deleting Category:", error);
            toast.error("Error deleting Category");
        }
    };
    
    const handleSaveCategory = async (categoryData) => {
         try {
            const data = await addCategory(categoryData);
            console.log("Category created successfully:", data);
            toast.success("Category added successfully")
            setIsModalOpenAddCategory(false);
            setCategories((prevCategories) => [...prevCategories, data.category]);
        } catch (error) {
            console.error("Error saving category:", error);
        }
    };

    const handleStatusCategory = async (category) => {
        const updatedStatus = category.status === "LIST" ? "UNLIST" : "LIST";
            try {
                const result = await updateCategoryStatus(category._id, { status: updatedStatus });
        
                if (result.success) {
                    setCategories((prevCategories) =>
                        prevCategories.map((b) =>
                            b._id === category._id ? { ...b, status: updatedStatus } : b
                        )
                    );
                    toast.success("Category status updated successfully");
                    setIsModalOpenStatusCategory(false);
                } else {
                    console.error("Failed to update Category status:", result.message);
                }
            } catch (err) {
                console.error("Error updating Category status:", err);
            }
    };
    
    return (
        <Card className="h-full w-full">
            {loading ? (
                <Loader />
            ) : (
                <>
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Category list
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                See information about all categories
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <Button
                                onClick={() => setIsModalOpenAddCategory(true)}
                                className="flex items-center gap-3" size="sm">
                                <MdOutlineProductionQuantityLimits  className="h-4 w-4" /> Add Category
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs value="all" className="w-full md:w-max">
                        <TabsHeader>
                            {TABS.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                                &nbsp;&nbsp;{label}&nbsp;&nbsp;
                            </Tab>
                            ))}
                        </TabsHeader>
                        </Tabs>
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                            <th
                                key={head}
                                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                            >
                                <Typography
                                variant="small"
                                color="blue-gray"
                                className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                >
                                {head}{" "}
                                {index !== TABLE_HEAD.length - 1 && (
                                    <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                )}
                                </Typography>
                            </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                            { categories.length > 0 ? (
                                categories.map(
                                    (category, index) => {
                                        const isLast = index === categories.length - 1;
                                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                                        const startIndex = (currentPage - 1) * categoriesPerPage;
                                        const rowIndex = startIndex + index + 1;
                    
                                    return (
                                        <tr key={category._id}>
                                            <td className="py-3 px-4 text-center">{rowIndex}</td>

                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    
                                                <img 
                                            src={category.categoryImg} 
                                            alt={category.name} 
                                            size="sm" 
                                            className="w-[90px] h-[20px] object-cover"
                                        />
                                                </div>
                                            </td>

                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    
                                                    <div className="flex flex-col">
                                                        <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                        >
                                                        {category.name}
                                                        </Typography>
                                                        
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="w-max">
                                                    <Chip
                                                        variant="ghost"
                                                        className="w-16 items-center justify-center cursor-pointer"
                                                        size="sm"
                                                        value={category.status}
                                                        color={category.status === "LIST" ? "green" : "red"}
                                                        onClick={() => {
                                                            setSelectedCategory(category);
                                                            setIsModalOpenStatusCategory(true); 
                                                        }}
                                                    />
                                                </div>
                                            </td>
            
                                            <td className={classes}>
                                                <Tooltip content="Edit Category">
                                                    <IconButton variant="text">
                                                        <PencilIcon 
                                                        onClick={() => handleEditCategory(category)}
            
                                                        className="h-4 w-4 text-blue-900" />
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
            
                                            <td className={classes}>
                                                <Tooltip content="Delete Category">
                                                    <IconButton variant="text">
                                                        <TrashIcon 
                                                        onClick={() => {
                                                            setSelectedCategoryId(category._id);  
                                                            setIsModalOpenDeleteCategory(true); 
                                                        }}
                                                        className="h-4 w-4 text-red-900" />
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    );
                                    
                                })
                            ):(
                                <tr>
                                    <td colSpan={TABLE_HEAD.length} className="text-center p-4">
                                        <Typography variant="small" color="red" className="font-medium text-md">
                                            No categories to display
                                        </Typography>

                                    </td>
                                </tr>
                            )}
                        </tbody>
                        <AddCategoryModal
                            open={isModalOpenAddCategory}
                            setOpen={setIsModalOpenAddCategory}
                            saveCategory={handleSaveCategory}
                            categories= {categories}
                        />

                        <EditCategoryModal
                            open={isModalOpenEditCategory}
                            setOpen={setIsModalOpenEditCategory}
                            saveCategory={() => handleUpdateCategory(editingCategory)}
                            category={editingCategory}
                            setEditingCategory={setEditingCategory}
                            existingCategories={categories}
                        />
                    
                        <ConfirmEditCategoryModal
                            open={isModalOpenConfirmEditCategory}
                            setOpen={setIsModalOpenConfirmEditCategory}
                            saveCategory={handleConfirmUpdateCategory} 
                        />

                        <DeleteCategoryModal
                            open={isModalOpenDeleteCategory}
                            setOpen={setIsModalOpenDeleteCategory}
                            deleteCategory={() => handleDeleteCategory(selectedCategoryId)}
                            category={selectedCategory}
                        />

                        <StatusCategoryModal
                            open={isModalOpenStatusCategory}
                            setOpen={setIsModalOpenStatusCategory}
                            category={selectedCategory}
                            handleStatusChange={handleStatusCategory}
                        />

                    </table>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                            Page {currentPage}
                        </Typography>
                        <div className="flex gap-2">
                            <Button variant="outlined" size="sm" onClick={handlePreviousPage} disabled={currentPage === 1}>
                                Previous
                            </Button>
                            <Button variant="outlined" size="sm" onClick={handleNextPage} disabled={currentPage === totalPages}>
                                Next
                            </Button>
                        </div>
                    </CardFooter>
            </>
            )}
        </Card>
    );
}