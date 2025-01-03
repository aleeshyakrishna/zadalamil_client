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
import Img1 from '../../../assets/images/mob2.png';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdDownload } from "react-icons/md";

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

const TABLE_ROWS = [
    {
        img: Img1,
        productName: "SAMSUNG Galaxy S23 Series AI Phone, Unlocked Android Smartphone, 128GB",
        stock: "60",
        price: "5699",
        status: true,
    },
    {
        img: Img1,
        productName: "SAMSUNG Galaxy S23 Series AI Phone, Unlocked Android Smartphone, 128GB",
        stock: "60",
        price: "5699",
        status: true,
    },
    {
        img: Img1,
        productName: "SAMSUNG Galaxy S23 Series AI Phone, Unlocked Android Smartphone, 128GB",
        stock: "80",
        price: "5699",
        status: false,
    },
    {
        img: Img1,
        productName: "SAMSUNG Galaxy S23 Series AI Phone, Unlocked Android Smartphone, 128GB",
        stock: "Out of Stock",
        price: "5699",
        status: true,
    },
    {
        img: Img1,
        productName: "SAMSUNG Galaxy S23 Series AI Phone, Unlocked Android Smartphone, 128GB",
        stock: "60",
        price: "5699",
        status: true,
    },
];
   
export function ProductTableVendor() {
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
                        <Button className="flex items-center gap-3" size="sm">
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
                    {TABLE_ROWS.map(
                        ({ img, productName, stock, price, status }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";
        
                        return (
                            <tr key={productName}>
                                <td className="py-3 px-4 text-center">{index + 1}</td>
                                <td className={classes}>
                                    <div className="flex items-center gap-3">
                                        <Avatar src={img} alt={productName} size="sm" />
                                        <div className="flex flex-col">
                                            <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                            >
                                            {productName}
                                            </Typography>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div className="flex flex-col">
                                        <Typography
                                        variant="small"
                                        color={stock === "Out of Stock" ? "red" : "blue-gray"}
                                        className="font-normal"
                                        >
                                        {stock}
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
                                            {price}
                                        </Typography>
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div className="w-max">
                                        <Chip
                                            variant="ghost"
                                            className="w-16 items-center justify-center"
                                            size="sm"
                                            value={status ? "list" : "unlist"}
                                            color={status ? "green" : "red"}
                                        />
                                    </div>
                                </td>

                                <td className={classes}>
                                    <Tooltip content="Edit Product">
                                        <IconButton variant="text">
                                            <PencilIcon className="h-4 w-4 text-blue-900" />
                                        </IconButton>
                                    </Tooltip>
                                </td>

                                <td className={classes}>
                                    <Tooltip content="Delete Product">
                                        <IconButton variant="text">
                                            <TrashIcon className="h-4 w-4 text-red-900" />
                                        </IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                        );
                        },
                    )}
                    </tbody>
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