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
import { useState } from "react";
import { AddBrandModal } from '../Modal/Brand/AddBrandModal.jsx';
import { EditBrandModal } from '../Modal/Brand/EditBrandModal.jsx';
import { ConfirmEditBrandModal } from '../Modal/Brand/ConfirmEdirBrandModal.jsx';
import { DeleteBrandModal } from '../Modal/Brand/DeleteBrandModal.jsx';
import { SiBrandfolder } from "react-icons/si";

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

const TABLE_HEAD = ["No", "Brand Name", "Status", "Edit", "Delete"];

const TABLE_ROWS = [
    {
        brandName: "Samsung",
        status: true,
    },
    {
        brandName: "iPhone",
        status: true,
    },
    {
        brandName: "Oppo",
        status: false,
    },
    {
        brandName: "Vivo",
        status: true,
    },
    {
        brandName: "Huawei",
        status: true,
    },
];
   
export default function BrandTable() {
    const [isModalOpenAddBrand, setIsModalOpenAddBrand] = useState(false);
    const [isModalOpenEditBrand, setIsModalOpenEditBrand] = useState(false);
    const [isModalOpenConfirmEditBrand, setIsModalOpenConfirmEditBrand] = useState(false);
    const [isModalOpenDeleteBrand, setIsModalOpenDeleteBrand] = useState(false);

    const handleSaveBrand = () => {
        console.log("Brand saved");
        setIsModalOpenAddBrand(false); 
    };

    const handleUpdateBrand = () => {
        setIsModalOpenEditBrand(false);
        setIsModalOpenConfirmEditBrand(true); 
    };

    const handleConfirmUpdateBrand = () => {
        console.log("Brand updated");
        setIsModalOpenConfirmEditBrand(false); 
    };

    const handleDeleteBrand = () => {
        console.log("Brand deleted");
        setIsModalOpenDeleteBrand(false); 
    };
    
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                        Brand list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all Brands
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button
                            onClick={() => setIsModalOpenAddBrand(true)}
                            className="flex items-center gap-3" size="sm">
                            <SiBrandfolder  className="h-4 w-4" /> Add Brand
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
                        ({ brandName, status }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";
        
                        return (
                            <tr key={brandName}>
                                <td className="py-3 px-4 text-center">{index + 1}</td>
                                <td className={classes}>
                                    <div className="flex items-center gap-3">
                                        
                                        <div className="flex flex-col">
                                            <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                            >
                                            {brandName}
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
                                            value={status ? "block" : "unblock"}
                                            color={status ? "green" : "red"}
                                        />
                                    </div>
                                </td>

                                <td className={classes}>
                                    <Tooltip content="Edit Brand">
                                        <IconButton variant="text">
                                            <PencilIcon 
                                            onClick={() => setIsModalOpenEditBrand(true)}

                                            className="h-4 w-4 text-blue-900" />
                                        </IconButton>
                                    </Tooltip>
                                </td>

                                <td className={classes}>
                                    <Tooltip content="Delete Brand">
                                        <IconButton variant="text">
                                            <TrashIcon 
                                            onClick={() => setIsModalOpenDeleteBrand(true) }
                                            className="h-4 w-4 text-red-900" />
                                        </IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                        );
                        },
                    )}
                    </tbody>
                    <AddBrandModal
                        open={isModalOpenAddBrand}
                        setOpen={setIsModalOpenAddBrand}
                        saveBrand={handleSaveBrand}
                    />

                    <EditBrandModal
                        open={isModalOpenEditBrand}
                        setOpen={setIsModalOpenEditBrand}
                        saveBrand={handleUpdateBrand}
                    />
                
                    <ConfirmEditBrandModal
                        open={isModalOpenConfirmEditBrand}
                        setOpen={setIsModalOpenConfirmEditBrand}
                        saveBrand={handleConfirmUpdateBrand} 
                    />

                    <DeleteBrandModal
                        open={isModalOpenDeleteBrand}
                        setOpen={setIsModalOpenDeleteBrand}
                        deleteBrand={handleDeleteBrand}
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