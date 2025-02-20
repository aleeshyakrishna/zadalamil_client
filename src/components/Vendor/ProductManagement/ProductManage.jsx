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
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdDownload } from "react-icons/md";

import { AddProductVendorModal } from '../Modal/Product/AddProductModalVendor.jsx';
import { EditProductVendorModal } from '../Modal/Product/EditProductModalVendor.jsx';
import { ConfirmEditProductVendorModal } from '../Modal/Product/ConfirmEditProductModalVendor.jsx';
import { DeleteProductVendorModal } from '../Modal/Product/DeleteProductModalVendor.jsx';

import { useEffect, useState } from "react";
import { addProduct, getProducts } from "../../../Utils/vendorProductService.js";

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

const TABLE_HEAD = ["No", "Product Name", "Stock", "Price", "Status", "Edit", "Delete"];
   
export function ProductTableVendor() {
    const [isModalOpenAddVendorProduct, setIsModalOpenAddVendorProduct] = useState(false);
    const [isModalOpenEditVendorProduct, setIsModalOpenEditVendorProduct] = useState(false);
    const [isModalOpenConfirmEditVendorProduct, setIsModalOpenConfirmEditVendorProduct] = useState(false);
    const [isModalOpenDeleteVendorProduct, setIsModalOpenDeleteVendorProduct] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                console.log("pro::", data);
                
                setProducts(data?.data || []);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        fetchProducts();
    }, [])

    const handleSaveVendorProduct = async(productData) => {
        try {
            const response = await addProduct(productData);
            if(response?.success) {
                setProducts([...products, response.data]);
                setIsModalOpenAddVendorProduct(false); 
            } else {
                console.error("Failed to add product:", response?.message);
            }
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const handleUpdateVendorProduct = () => {
        setIsModalOpenEditVendorProduct(false);
        setIsModalOpenConfirmEditVendorProduct(true); 
    };

    const handleConfirmUpdateVendorProduct = () => {
        console.log("Product updated");
        setIsModalOpenConfirmEditVendorProduct(false); 
    };

    const handleDeleteVendorProduct = () => {
        console.log("Product deleted");
        setIsModalOpenDeleteVendorProduct(false); 
    };
    
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Product list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all products
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button variant="outlined" className="flex items-center gap-3" size="sm">
                            <MdDownload  className="h-4 w-4" /> Download Sample CSV
                        </Button>
                        <Button className="bg-red-900" size="sm">
                            Import CSV
                        </Button>
                        <Button 
                        onClick={() => setIsModalOpenAddVendorProduct(true)}
                        className="flex items-center gap-3" size="sm">
                            <MdOutlineProductionQuantityLimits  className="h-4 w-4" /> Add Product
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
                        { products.length > 0 ? (
                            products.map((product, index) => {
                        const isLast = index === products.length - 1;
                        const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";
        
                        return (
                            <tr key={product._id}>
                                <td className="py-3 px-4 text-center">{index + 1}</td>
                                <td className={classes}>
                                    <div className="flex items-center gap-2">
                                    {product.images?.slice(0, 4).map((image, imgIndex) => (
                                        <Avatar key={imgIndex} src={image} alt={`Product ${imgIndex}`} size="sm" />
                                    ))}
                                        <div className="flex flex-col">
                                            <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                            >
                                            {product.title}
                                            </Typography>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div className="flex flex-col">
                                        <Typography
                                        variant="small"
                                        color={product.stock === 0 ? "red" : "blue-gray"}
                                        className="font-normal"
                                        >
                                        {product.stock > 0 ? product.stock : " Out of Stock"}
                                        </Typography>
                                    </div>
                                </td>

                                <td className={classes}>
                                    <div className="flex flex-col">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {product.price}
                                        </Typography>
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div className="w-max">
                                        <Chip
                                            variant="ghost"
                                            className="w-16 items-center justify-center"
                                            size="sm"
                                            value={product.status ? "list" : "unlist"}
                                            color={product.status ? "green" : "red"}
                                        />
                                    </div>
                                </td>

                                <td className={classes}>
                                    <Tooltip content="Edit Product">
                                        <IconButton variant="text">
                                            <PencilIcon
                                                onClick={() => setIsModalOpenEditVendorProduct(true)}
                                                className="h-4 w-4 text-blue-900" />
                                        </IconButton>
                                    </Tooltip>
                                </td>

                                <td className={classes}>
                                    <Tooltip content="Delete Product">
                                        <IconButton variant="text">
                                            <TrashIcon
                                                onClick={() => setIsModalOpenDeleteVendorProduct(true) }
                                                className="h-4 w-4 text-red-900" />
                                        </IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                        );
                        })
                    ):(
                        <tr>
                            <td colSpan="5">No products available</td>
                        </tr>
                    )}
                    </tbody>
                    
                    <AddProductVendorModal
                        open={isModalOpenAddVendorProduct}
                        setOpen={setIsModalOpenAddVendorProduct}
                        saveProduct={handleSaveVendorProduct}
                    />

                    <EditProductVendorModal
                        open={isModalOpenEditVendorProduct}
                        setOpen={setIsModalOpenEditVendorProduct}
                        saveProduct={handleUpdateVendorProduct}
                    />
                
                    <ConfirmEditProductVendorModal
                        open={isModalOpenConfirmEditVendorProduct}
                        setOpen={setIsModalOpenConfirmEditVendorProduct}
                        saveProduct={handleConfirmUpdateVendorProduct} 
                    />

                    <DeleteProductVendorModal
                        open={isModalOpenDeleteVendorProduct}
                        setOpen={setIsModalOpenDeleteVendorProduct}
                        saveAddress={handleDeleteVendorProduct}
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