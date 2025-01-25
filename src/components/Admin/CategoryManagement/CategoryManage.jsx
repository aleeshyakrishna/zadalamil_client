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
import { addCategory, getCategories } from '../../../Utils/categoryService.js';
import { useSelector } from 'react-redux';
import { toast } from "react-hot-toast";

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

    useEffect(() => {
        if (token) {
            const fetchCategories = async () => {
                try {
                    const fetchedCategories = await getCategories(token);
                    const mappedCategories = fetchedCategories.map((cat) => ({
                        categoryName: cat.name, 
                        status: cat.status?.toUpperCase() === "LIST" , 
                    }));
    
                    setCategories(mappedCategories);
                } catch (error) {
                    toast.error("Failed to fetch categories");
                    console.error("Error fetching categories:", error);
                }
            };
            fetchCategories();
        }
    }, [token]);
    
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
                    setCategories((prevCategories) => [
                        ...prevCategories,
                        {
                            categoryName: response.category.name,
                            status: response.category.status === "LIST"
                        }
                    ]);
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
    
    return (
        <Card className="h-full w-full">
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
                    {categories.map(
                        ({ categoryName, status }, index) => {
                        const isLast = index === categories.length - 1;
                        const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";

                            const displayStatus = status ? "LIST" : "UNLIST";
                            const chipColor = status ? "green" : "red";
        
                        return (
                            <tr key={categoryName}>
                                <td className="py-3 px-4 text-center">{index + 1}</td>
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
                                            className="w-16 items-center justify-center"
                                            size="sm"
                                            value={displayStatus}
                                            color={chipColor}
                                        />
                                    </div>
                                </td>

                                <td className={classes}>
                                    <Tooltip content="Edit Category">
                                        <IconButton variant="text">
                                            <PencilIcon 
                                            onClick={() => setIsModalOpenEditCategory(true)}

                                            className="h-4 w-4 text-blue-900" />
                                        </IconButton>
                                    </Tooltip>
                                </td>

                                <td className={classes}>
                                    <Tooltip content="Delete Category">
                                        <IconButton variant="text">
                                            <TrashIcon 
                                            onClick={() => setIsModalOpenDeleteCategory(true) }
                                            className="h-4 w-4 text-red-900" />
                                        </IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                        );
                        },
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
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                    Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                    Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}