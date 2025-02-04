import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
  } from "@heroicons/react/24/outline";
  import { TrashIcon } from "@heroicons/react/24/solid";
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

// import { DeleteUserModal } from "../Modal/User/DeleteUserModal";
import { useEffect, useState } from "react";
// import { deleteUser, updateUserStatus } from "../../../Utils/adminUsersService";
import Loader from "../../Loader/Loader";
//import { StatusUserModal } from '../Modal/User/StatusUserModal.jsx';
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { fetchVendors } from "../../../Utils/vendorService.js";
   
  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Blocked",
      value: "blocked",
    },
    {
      label: "Unblocked",
      value: "unblocked",
    },
  ];
   
  const TABLE_HEAD = ["No", "Vendor", "Email", "Status", "Phone Number", "Delete"];
   
  export function ApprovedVendorTable() {

        //const [isModalOpenDeleteUser, setIsModalOpenDeleteUser] = useState(false);
        const [vendors, setVendors] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState("");
        const [selectedTab, setSelectedTab] = useState("all");
        const [currentPage, setCurrentPage] = useState(1);
        const [totalPages, setTotalPages] = useState(1);
        // const [isModalOpenStatusUser, setIsModalOpenStatusUser] = useState(false);
        // const [selectedUser, setSelectedUser] = useState(null);
        // const [TABLE_ROWS, SETTABLE_ROWS] = useState([]);

        const navigate = useNavigate();



        useEffect(() => {
            const loadVendors = async () => {
                setLoading(true);
    
                try {
                    const data = await fetchVendors();
                    setVendors(data);
                } catch (error) {
                    if (error.message.includes("Unauthorized")) {
                        toast.error(error.message);
                        navigate("/admin/admin-login");
                    } else {
                        toast.error("Failed to load vendors. Please try again.");
                    }
                } finally {
                    setLoading(false);
                }
            };
    
            loadVendors();
        }, []);

        const handleNextPage = () => {
            if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
        };
    
        const handlePreviousPage = () => {
            if (currentPage > 1) setCurrentPage((prev) => prev - 1);
        };

        // const handleDeleteVendor = async (vendor) => {
        //     if (!vendor || !vendor._id) {
        //         console.error("Invalid vendor object:", vendor);
        //         return;
        //     }
        //     try {
        //         await deleteUser(vendor._id);
        //         setVendors((prevvendors) => prevvendors.filter((u) => u._id !== vendor._id));
        //         toast.success("Vendor deleted successfully");
        //     } catch (error) {
        //         toast.error("Failed to delete vendor");
        //         console.error(error);
        //     } finally {
        //         setIsModalOpenDeleteVendor(false);
        //     }
        // };

        // const handleStatusVendor = async (vendorId, currentStatus) => {
        //     const newStatus = currentStatus === "UNBLOCKED" ? "blocked" : "unblocked";
        
        //     try {
        //         const response = await updatevendorStatus(vendorId, newStatus);
        //         setVendors((prevVendors) =>
        //             prevVendors.map((vendor) =>
        //                 vendor._id === vendorId ? { ...vendor, status: response.status } : vendor
        //             )
        //         );
        //         toast.success("Vendor status updated successfully");
        //         setIsModalOpenStatusUser(false);
        //     } catch (error) {
        //         console.error("Failed to update vendor status:", error);
        //     }
        // };
        
    return (
        <Card className="h-full w-full ">
            {loading ? (
                <Loader />
            ) : error ? (
                <tr>
                    <td colSpan="6" className="text-center">{error}</td>
                </tr>
            ) : (
                <>
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Approved Vendor&apos;s Management
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all vendors
                        </Typography>
                    </div>
                </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <Tabs value={selectedTab} onChange={setSelectedTab} className="w-full md:w-max">
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
                        {vendors.map(({ _id, name, email, status, phone }, index)  => {
                            const isLast = index === vendors.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";
                                const userIndex = (currentPage - 1) * 10 + index + 1;
            
                            return (
                                <tr key={_id}>
                                <td className="py-3 px-4 text-center">{userIndex}</td>
                                <td className={classes}>
                                    <div className="flex items-center gap-3">
                                        {/* <Avatar src={img} alt={name} size="sm" /> */}
                                        <div className="flex flex-col">
                                            <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                            >
                                            {name}
                                            </Typography>
                                        </div>
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div className="flex flex-col">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {email}
                                        </Typography>
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div className="w-max">
                                        <Chip
                                            variant="ghost"
                                            size="sm"
                                            value={status}
                                            color={status === "UNBLOCKED" ? "green" : status === "BLOCKED" ? "red" : "gray"}
                                            // onClick={() => {
                                            //     if (name) {
                                            //         setSelectedUser({ _id, name, email, status, phone });
                                            //         setIsModalOpenStatusUser(true);
                                            //     }
                                            // }}
                                        />
                                    </div>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {phone}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Tooltip content="Delete User">
                                    <IconButton 
                                        // onClick={() => {
                                        //     setSelectedUser({ _id, name, email, status, phone });
                                        //     setIsModalOpenDeleteUser(true);
                                        // }}
                                        variant="text"
                                    >
                                        <TrashIcon className="h-4 w-4" />
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

            {/* <DeleteVendorModal
                open={isModalOpenDeleteVendor}
                setOpen={setIsModalOpenDeleteVendor}
                deleteVendor={() => handleDeleteVendor(selectedVendor)} 
                vendor={selectedVendor}
            />

            <StatusVendorModal
                open={isModalOpenStatusVendor}
                setOpen={setIsModalOpenStatusVendor}
                vendor={selectedVendor}
                handleStatusChange={handleStatusVendor}
            /> */}
      </Card>
    );
}