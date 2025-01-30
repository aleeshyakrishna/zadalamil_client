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
import { useSelector } from 'react-redux';
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

const TABLE_HEAD = ["No", "Category Name", "Status", "Edit", "Delete"];

   
export default function CategoryTable()  {
    const token = useSelector((state) => state.auth.token);

    const [categories, setCategories] = useState([]);

    const [isModalOpenAddCategory, setIsModalOpenAddCategory] = useState(false);
    const [isModalOpenEditCategory, setIsModalOpenEditCategory] = useState(false);
    const [isModalOpenConfirmEditCategory, setIsModalOpenConfirmEditCategory] = useState(false);
    const [isModalOpenDeleteCategory, setIsModalOpenDeleteCategory] = useState(false);
    const [isModalOpenStatusCategory, setIsModalOpenStatusCategory] = useState(false);
    const [loading, setLoading] = useState([]);
    const [categoryIdToDelete, setCategoryIdToDelete] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCategories, setTotalCategories] = useState(0);
    const categoriesPerPage = 10;

    useEffect(() => {
        if (token) {
            setLoading(true);
            const fetchCategories = async () => {
                try {
                    const { categories: fetchedCategories, totalCategories: total } = await getCategories(token, currentPage, categoriesPerPage);
                    const mappedCategories = fetchedCategories.map((cat) => ({
                        categoryName: cat.name,
                        categoryId: cat._id,
                        status: cat.status?.toUpperCase() === "LIST",
                    }));

                    setCategories(mappedCategories);
                    setTotalCategories(total); 
                    setLoading(false);
                } catch (error) {
                    toast.error("Failed to fetch categories");
                    console.error("Error fetching categories:", error);
                    setLoading(false);
                }
            };
            fetchCategories();
        }
    }, [token, currentPage]);

    const handleNextPage = () => {
        if (currentPage * categoriesPerPage < totalCategories) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };
    
    const handleUpdateCategory = async (categoryName) => {
        if (!token) {
            toast.error("No authentication token found");
            return;
        }
    
        try {
            const { exists } = await checkCategoryNacheckCategoryNameExists(categoryName, token);
            if (exists) {
                return;
            }
    
            console.log("Category name is valid for update:", categoryName);
            setSelectedCategory((prev) => ({
                ...prev,
                categoryName,
            }));
            setIsModalOpenEditCategory(false);
            setIsModalOpenConfirmEditCategory(true);
        } catch (error) {
            toast.error("Error validating category name");
            console.error("Error:", error);
        }
    };
    
    

    const handleConfirmUpdateCategory = async () => {
        if (!token || !selectedCategory) {
            toast.error("No authentication token or category selected");
            return;
        }
    
        try {
            const response = await updateCategory(
                selectedCategory.categoryId,
                selectedCategory.categoryName,
                token
            );
    
            if (response.success) {
                const { categories: fetchedCategories, totalCategories: total  } = await getCategories(token, currentPage, categoriesPerPage);
                setCategories(fetchedCategories);
                setTotalCategories(total);
                
                if (Array.isArray(fetchedCategories)) {
                    const mappedCategories = fetchedCategories.map((cat) => ({
                        categoryName: cat.name,
                        categoryId: cat._id,
                        status: cat.status?.toUpperCase() === "LIST",
                    }));
    
                    setCategories(mappedCategories);
                    console.log("Category updated successfully");
                    toast.success("Category updated successfully");
                    setIsModalOpenConfirmEditCategory(false);
                } else {
                    console.error("Fetched categories are not in an array format:", fetchedCategories);
                }
            }
        } catch (error) {
            toast.error("Failed to update category");
            console.error("Error updating category:", error);
        }
    };

    const openDeleteModal = (categoryId) => {
        setCategoryIdToDelete(categoryId);
        setIsModalOpenDeleteCategory(true);
    };

    const handleDeleteCategory = async (categoryId) => {
        if (!token) {
            toast.error("No authentication token found");
            return;
        }
        
        try {
            const response = await deleteCategory(categoryId, token);
    
            if (response.success) {
                setCategories(prevCategories => prevCategories.filter(cat => cat.categoryId  !== categoryId));
                setTotalCategories(response.totalCategories);
                if (currentPage * categoriesPerPage >= response.totalCategories) {
                    setCurrentPage(prevPage => prevPage - 1); 
                }
                toast.success("Category deleted successfully");
                setIsModalOpenDeleteCategory(false);
            }
        } catch (error) {
            toast.error("Failed to delete category");
            console.error("Error deleting category:", error);
        }
    };
    

    const handleSaveCategory = async (categoryName) => {
        if(token) {
            try {
                const isCategoryExist = categories.some(cat => cat.categoryName.toLowerCase() === categoryName.toLowerCase());
                
                if(isCategoryExist) {
                    toast.error("Category already exists");
                    return;
                }

                const response = await addCategory(categoryName, token);
                
                if(response.success) {
                    const { categories: fetchedCategories, totalCategories: total } = await getCategories(token);
                    console.log(fetchedCategories);
                    const mappedCategories = fetchedCategories.map((cat) => ({
                        categoryName: cat.name, 
                        categoryId: cat._id,
                        status: cat.status?.toUpperCase() === "LIST", 
                    }));
    
                    setCategories(mappedCategories);
                    setTotalCategories(total);
                    if (currentPage * categoriesPerPage >= total) {
                        const lastPage = Math.ceil(total / categoriesPerPage);
                        setCurrentPage(lastPage); 
                    }
    
                    toast.success("Category added successfully")
                    setIsModalOpenAddCategory(false); 
                }
            } catch (error) {
                console.error("Error adding category", error);
            }

        } else {
            console.error("No authentication token");
            toast.error("No authentication token found");
        }
    };

    const handleStatusCategory = async (category) => {
        if (!token) {
            toast.error("No authentication token found");
            return;
        }
    
        try {
            const newStatus = !category.status;
            const response = await updateCategoryStatus(category.categoryId, { status: newStatus }, token);
            
            if (response.success) {
                setCategories((prev) =>
                    prev.map((cat) =>
                        cat.categoryId === category.categoryId ? { ...cat, status: newStatus } : cat
                    )
                );
                toast.success("Category status updated successfully");
                setIsModalOpenStatusCategory(false);
            }
        } catch (error) {
            toast.error("Failed to update category status");
            console.error("Error updating status:", error);
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
                                    ({ categoryId, categoryName, status }, index) => {
                                        const isLast = index === categories.length - 1;
                                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                            
                                        const displayStatus = status ? "LIST" : "UNLIST";
                                        const chipColor = status ? "green" : "red";
                            
                                        const startIndex = (currentPage - 1) * categoriesPerPage;
                                        const rowIndex = startIndex + index + 1;
                    
                                    return (
                                        <tr key={categoryName}>
                                            <td className="py-3 px-4 text-center">{rowIndex}</td>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    
                                                    <div className="flex flex-col">
                                                        <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                        >
                                                        {categoryName}
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
                                                        value={displayStatus}
                                                        color={chipColor}
                                                        onClick={() => {
                                                            setSelectedCategory({ categoryId, categoryName, status });
                                                            setIsModalOpenStatusCategory(true); 
                                                        }}
                                                    />
                                                </div>
                                            </td>
            
                                            <td className={classes}>
                                                <Tooltip content="Edit Category">
                                                    <IconButton variant="text">
                                                        <PencilIcon 
                                                        onClick={() => {
                                                            setSelectedCategory({ categoryId, categoryName });
                                                            setIsModalOpenEditCategory(true);
                                                        }}
            
                                                        className="h-4 w-4 text-blue-900" />
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
            
                                            <td className={classes}>
                                                <Tooltip content="Delete Category">
                                                    <IconButton variant="text">
                                                        <TrashIcon 
                                                        onClick={() => openDeleteModal(categoryId) }
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
                            saveCategory={handleUpdateCategory}
                            categoryData={selectedCategory}
                            token={token}
                        />
                    
                        <ConfirmEditCategoryModal
                            open={isModalOpenConfirmEditCategory}
                            setOpen={setIsModalOpenConfirmEditCategory}
                            saveCategory={handleConfirmUpdateCategory} 
                        />

                        <DeleteCategoryModal
                            open={isModalOpenDeleteCategory}
                            setOpen={setIsModalOpenDeleteCategory}
                            deleteCategory={() => handleDeleteCategory(categoryIdToDelete)}
                            categoryId={categoryIdToDelete}
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
                            Page {currentPage} of {Math.ceil(totalCategories / categoriesPerPage)}
                        </Typography>
                        <div className="flex gap-2">
                            <Button variant="outlined" size="sm" onClick={handlePreviousPage} disabled={currentPage === 1}>
                                Previous
                            </Button>
                            <Button variant="outlined" size="sm" onClick={handleNextPage} disabled={currentPage * categoriesPerPage >= totalCategories}>
                                Next
                            </Button>
                        </div>
                    </CardFooter>
            </>
            )}
        </Card>
    );
}