import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TrashIcon, UserPlusIcon } from "@heroicons/react/24/solid";
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
import { VendorDetailsModal } from "../Modal/Vendor/VendorDetailsModal.jsx";
import { ConfirmEditVendorDetailsModal } from "../Modal/Vendor/ConfirmUpdateVendorModal.jsx";
import { DeleteVendorModal } from "../Modal/Vendor/DeleteVendorModal.jsx";
import axios from "../../../Utils/BaseUrl.js";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Approved",
    value: "APPROVED",
  },
  {
    label: "Rejected",
    value: "REJECTED",
  },
  {
    label: "Ongoing",
    value: "ONGOING",
  },
  {
    label: "Pending",
    value: "PENDING",
  },
];

const TABLE_HEAD = [
  "No",
  "Vendor",
  "Company Name",
  "Status",
  "Date",
  "Action",
  "Details",
  "Delete",
];

export function VendorManage() {
  const [isModalOpenVendorDetails, setIsModalOpenVendorDetails] =
    useState(false);
  const [
    isModalOpenConfirmEditVendorDetails,
    setIsModalOpenConfirmEditVendorDetails,
  ] = useState(false);
  const [isModalOpenDeleteVendor, setIsModalOpenDeleteVendor] = useState(false);

  const [selectedVendor, setSelectedVendor] = useState(null);

  const [TABLE_ROWS, SETTABLE_ROWS] = useState([]);
  const handleUpdateDetails = () => {
    setIsModalOpenVendorDetails(false);
    setIsModalOpenConfirmEditVendorDetails(true);
  };
  const [pendingStatusChange, setPendingStatusChange] = useState(null);
  const navigate = useNavigate();

  const handleDeleteVendor = () => {
    console.log("Vendor deleted");
    setIsModalOpenDeleteVendor(false);
  };
  useEffect(() => {
    const fetchApplications = async () => {
      const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        toast.error("Unauthorized: No token found! Please log in.");
        navigate("/admin/admin-login");
        return;
      }

      try {
        console.log("Fetching seller applications...");

        const response = await axios.get("api/admin/applications", {
          headers: {
            Authorization: `Bearer ${authToken}`, // Include token in the request
          },
        });

        console.log(response, "------------------>>");

        if (response.status === 200) {
          SETTABLE_ROWS(response.data);
        }
      } catch (error) {
        console.error("Error fetching applications:", error);

        if (error.response?.status === 401) {
          toast.error(
            "Unauthorized: Your session has expired. Please log in again."
          );
          localStorage.removeItem("authToken"); // Optionally clear the token if expired
          // Redirect user to login page if needed
          navigate("/admin/admin-login");
        } else {
          toast.error("Failed to load applications. Please try again.");
          navigate("/admin/admin-login");
        }
      }
    };

    fetchApplications();
  }, []);

  const requestStatusChange = (vendorId, newStatus) => {
    setPendingStatusChange({ vendorId, newStatus }); // Store status update request
    setIsModalOpenConfirmEditVendorDetails(true); // Open confirmation modal
  };

  const confirmStatusUpdate = async () => {
    if (!pendingStatusChange) {
      console.error("No pending status change request!");
      return;
    }

    const { vendorId, newStatus } = pendingStatusChange;
    const authToken = localStorage.getItem("authToken"); // Retrieve token from localStorage
    console.log(authToken, "2222222222222222222222222222222222");
    if (!authToken) {
      toast.error("Unauthorized: No token found! Please log in.");
      return;
    }

    try {
      console.log(`Updating vendor ${vendorId} status to ${newStatus}...`);

      const response = await axios.put(
        `/api/admin/application/update-status/${vendorId}`,
        { status: newStatus },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`, // Send token in Authorization header
          },
        }
      );

      if (response.status === 200) {
        SETTABLE_ROWS((prevRows) =>
          prevRows.map((row) =>
            row._id === vendorId ? { ...row, status: newStatus } : row
          )
        );
        toast.success("Status updated successfully!");
      } else {
        toast.error("Failed to update status. Please try again.");
      }
    } catch (error) {
      console.error("Error updating vendor status:", error);

      if (error.response?.status === 401) {
        toast.error(
          "Unauthorized: Your session has expired. Please log in again."
        );
        localStorage.removeItem("authToken"); // Optionally clear the token if expired
        // Redirect user to login page (if applicable)
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }

    // Close confirmation modal & reset pending request
    setIsModalOpenConfirmEditVendorDetails(false);
    setPendingStatusChange(null);
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Vendor Management
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all vendors
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Vendor
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
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((data, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={data.name}>
                  <td className="py-3 px-4 text-center">{index + 1}</td>
                  <td className={classes}>
                    <div className="flex w-[100px] h-[200px] items-center gap-3 ">
                      <img src={data.livePhoto} alt={data.name} size="sm" />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {data.name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {data.email}
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
                        {data.tradeName}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {data.licenseNumber}
                      </Typography>
                    </div>
                  </td>

                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={data.status}
                        color={
                          data.status === "APPROVED"
                            ? "green"
                            : data.status === "REJECTED"
                            ? "red"
                            : data.status === "ONGOING"
                            ? "orange"
                            : data.status === "PENDING"
                            ? "blue"
                            : "blue-gray"
                        }
                      />
                    </div>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {new Date(data.createdAt).toLocaleDateString("en-GB")}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="filled"
                        size="md"
                        value={data.action ? "block" : "unblock"}
                        color={data.action ? "green" : "red"}
                        className="w-20 items-center justify-center cursor-pointer"
                      />
                    </div>
                  </td>

                  <td className={classes}>
                    <button
                      onClick={() => {
                        setSelectedVendor(data);
                        setIsModalOpenVendorDetails(true);
                      }}
                      className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-900"
                    >
                      View Details
                    </button>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Delete Vendor">
                      <IconButton variant="text">
                        <TrashIcon
                          onClick={() => setIsModalOpenDeleteVendor(true)}
                          className="h-4 w-4 text-red-800"
                        />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}

            <VendorDetailsModal
              open={isModalOpenVendorDetails}
              setOpen={setIsModalOpenVendorDetails}
              saveDetails={handleUpdateDetails}
              requestStatusChange={requestStatusChange}
              vendorData={selectedVendor} 
            />

            <ConfirmEditVendorDetailsModal
              open={isModalOpenConfirmEditVendorDetails}
              setOpen={setIsModalOpenConfirmEditVendorDetails}
              saveDetails={confirmStatusUpdate}
            />

            <DeleteVendorModal
              open={isModalOpenDeleteVendor}
              setOpen={setIsModalOpenDeleteVendor}
              deleteVendor={handleDeleteVendor}
            />
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
