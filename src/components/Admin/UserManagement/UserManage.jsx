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
    //Avatar,
    IconButton,
    Tooltip,
  } from "@material-tailwind/react";

import { DeleteUserModal } from "../Modal/User/DeleteUserModal";
import { useEffect, useState } from "react";
import { getUsers, updateUserStatus } from "../../../Utils/adminUsersService";
import Loader from "../../Loader/Loader";
import { StatusUserModal } from '../Modal/User/StatusUserModal.jsx';
import { toast } from "react-hot-toast";
   
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
   
  const TABLE_HEAD = ["No", "Customer", "Email", "Status", "Phone Number", "Delete"];
   
  export function UserTable() {

        const [isModalOpenDeleteUser, setIsModalOpenDeleteUser] = useState(false);
        const [users, setUsers] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState("");
        const [selectedTab, setSelectedTab] = useState("all");
        const [currentPage, setCurrentPage] = useState(1);
        const [totalPages, setTotalPages] = useState(1);
        const [isModalOpenStatusUser, setIsModalOpenStatusUser] = useState(false);
        const [selectedUser, setSelectedUser] = useState(null);


        useEffect(() => {
            const fetchUsersData = async () => {
                setLoading(true);
                try {
                    const usersData = await getUsers(selectedTab, currentPage, 10);
                    setUsers(usersData.data);
                    setTotalPages(usersData.totalPages || 1); 

                } catch (err) {
                    setError("Error fetching users");
                    console.log(err);
                    
                } finally {
                    setLoading(false);
                }
            };
            fetchUsersData();
        }, [selectedTab, currentPage]);

        const handleNextPage = () => {
            if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
        };
    
        const handlePreviousPage = () => {
            if (currentPage > 1) setCurrentPage((prev) => prev - 1);
        };

        const handleDeleteUser = () => {
            console.log("User deleted");
            setIsModalOpenDeleteUser(false); 
        };

        const handleStatusUser = async (userId, currentStatus) => {
            const newStatus = currentStatus === "UNBLOCKED" ? "blocked" : "unblocked";
        
            try {
                const response = await updateUserStatus(userId, newStatus);
                setUsers((prevUsers) =>
                    prevUsers.map((user) =>
                        user._id === userId ? { ...user, status: response.status } : user
                    )
                );
                toast.success("User status updated successfully");
                setIsModalOpenStatusUser(false);
            } catch (error) {
                console.error("Failed to update user status:", error);
            }
        };
        
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
                            User Management
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all customers
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
                        {users.map(({ _id, name, email, status, phone }, index)  => {
                            const isLast = index === users.length - 1;
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
                                            onClick={() => {
                                                if (name) {
                                                    setSelectedUser({ _id, name, email, status, phone });
                                                    setIsModalOpenStatusUser(true);
                                                }
                                            }}
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
                                        onClick={() => setIsModalOpenDeleteUser(true) }
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

            <DeleteUserModal
                open={isModalOpenDeleteUser}
                setOpen={setIsModalOpenDeleteUser}
                deleteUser={handleDeleteUser}
            />

            <StatusUserModal
                open={isModalOpenStatusUser}
                setOpen={setIsModalOpenStatusUser}
                user={selectedUser}
                handleStatusChange={handleStatusUser}
            />
      </Card>
    );
}