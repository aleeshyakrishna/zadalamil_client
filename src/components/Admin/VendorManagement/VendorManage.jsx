import { useState,useEffect } from "react";
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
  Tooltip
} from "@material-tailwind/react";
import {VendorDetailsModal} from '../Modal/Vendor/VendorDetailsModal.jsx';
import {ConfirmEditVendorDetailsModal} from '../Modal/Vendor/ConfirmUpdateVendorModal.jsx';
import { DeleteVendorModal } from '../Modal/Vendor/DeleteVendorModal.jsx';
import axios from "../../../Utils/BaseUrl.js";
import { toast } from "react-hot-toast";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Approved",
    value: "approved",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
  {
    label: "Ongoing",
    value: "ongoing",
  },
  {
    label: "Pending",
    value: "pending",
  },
];
 
const TABLE_HEAD = ["No", "Vendor", "Company Name", "Status", "Date","Action", "Details", "Delete"];
 

export function VendorManage() {
  const [isModalOpenVendorDetails, setIsModalOpenVendorDetails] = useState(false);
  const [isModalOpenConfirmEditVendorDetails, setIsModalOpenConfirmEditVendorDetails] = useState(false);
  const [isModalOpenDeleteVendor, setIsModalOpenDeleteVendor] = useState(false);

  const [selectedVendor, setSelectedVendor] = useState(null);

  const [TABLE_ROWS,SETTABLE_ROWS] = useState([])
  const handleUpdateDetails = () => {
    console.log("hii")
    setIsModalOpenVendorDetails(false);
    setIsModalOpenConfirmEditVendorDetails(true); 
  };
  const [pendingStatusChange, setPendingStatusChange] = useState(null);
 

  const handleDeleteVendor = () => {
    console.log("Vendor deleted");
    setIsModalOpenDeleteVendor(false); 
  };
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        console.log("Fetching seller applications...");
        const response = await axios.get("api/admin/applications");
        console.log(response,"------------------>>")
        if(response.status == 200){
          SETTABLE_ROWS(response.data)
        }
        // setApplications(response.data);
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching applications:", error);
        // setError("Failed to load applications");
        // setLoading(false);
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
      
              try {
                  console.log(`Updating vendor ${vendorId} status to ${newStatus}...`);
      
                  const response = await axios.put(
                      `/api/admin/application/update-status/${vendorId}`,
                      { status: newStatus },
                      { headers: { "Content-Type": "application/json" } }
                  );
      
                  if (response.status === 200) {
                      SETTABLE_ROWS(prevRows =>
                          prevRows.map(row => (row._id === vendorId ? { ...row, status: newStatus } : row))
                      );
                  } else {
                      toast.error("Failed to update status. Please try again.");
                  }
              } catch (error) {
                  console.error("Error updating vendor status:", error);
                  toast.error("Something went wrong. Please try again.");
              }
      
              // Close confirmation modal & reset pending request
              setIsModalOpenConfirmEditVendorDetails(false);
              setPendingStatusChange(null);
              toast.success("status updated!!")
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
            {TABLE_ROWS.map(
              (data, index) => {
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
                                data.status === "approved"
                                ? "green"
                                : data.status === "rejected"
                                ? "red"
                                : data.status === "ongoing"
                                ? "orange"
                                : data.status === "pending"
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
                        {data.createdAt}
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
                       onClick={() =>
                       { setSelectedVendor(data); 
                        setIsModalOpenVendorDetails(true)}
                      }
                       className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-900">View Details</button>
                    </td>
                    <td className={classes}>
                    <Tooltip content="Delete Vendor">
                        <IconButton variant="text">
                          <TrashIcon
                            onClick={() => setIsModalOpenDeleteVendor(true) }

                           className="h-4 w-4 text-red-800" />
                        </IconButton>
                      </Tooltip> 
                    </td>
                  </tr>
                );
              }, 
            )}

<VendorDetailsModal
  open={isModalOpenVendorDetails}
  setOpen={setIsModalOpenVendorDetails}
  saveDetails={handleUpdateDetails}
  requestStatusChange={requestStatusChange}
  vendorData={selectedVendor}  // Passing the selected vendor data
/>


            <ConfirmEditVendorDetailsModal
              open={isModalOpenConfirmEditVendorDetails}
              setOpen={setIsModalOpenConfirmEditVendorDetails}
              // saveDetails={handleConfirmUpdateVendorDetails} 
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











// import { useState, useEffect } from "react";
// import { VendorDetailsModal } from "../Modal/Vendor/VendorDetailsModal.jsx";
// import { ConfirmEditVendorDetailsModal } from "../Modal/Vendor/ConfirmUpdateVendorModal.jsx";
// import axios from "../../../Utils/BaseUrl.js";

// export function VendorManage() {
//     const [isModalOpenVendorDetails, setIsModalOpenVendorDetails] = useState(false);
//     const [isModalOpenConfirmEditVendorDetails, setIsModalOpenConfirmEditVendorDetails] = useState(false);
//     const [selectedVendor, setSelectedVendor] = useState(null);
//     const [pendingStatusChange, setPendingStatusChange] = useState(null); // Stores vendor ID & new status
//     const [TABLE_ROWS, SETTABLE_ROWS] = useState([]);

//     useEffect(() => {
//         const fetchApplications = async () => {
//             try {
//                 const response = await axios.get("api/admin/applications");
//                 if (response.status === 200) {
//                     SETTABLE_ROWS(response.data);
//                 }
//             } catch (error) {
//                 console.error("Error fetching applications:", error);
//             }
//         };
//         fetchApplications();
//     }, []);

//     // **Trigger Confirmation Modal Before Updating Status**
//     const requestStatusChange = (vendorId, newStatus) => {
//         setPendingStatusChange({ vendorId, newStatus }); // Store status update request
//         setIsModalOpenConfirmEditVendorDetails(true); // Open confirmation modal
//     };

//     // **If Confirmed, Update Status in Backend & UI**
//     const confirmStatusUpdate = async () => {
//         if (!pendingStatusChange) {
//             console.error("No pending status change request!");
//             return;
//         }

//         const { vendorId, newStatus } = pendingStatusChange;

//         try {
//             console.log(`Updating vendor ${vendorId} status to ${newStatus}...`);

//             const response = await axios.put(
//                 `/api/admin/application/update-status/${vendorId}`,
//                 { status: newStatus },
//                 { headers: { "Content-Type": "application/json" } }
//             );

//             if (response.status === 200) {
//                 alert("Status updated successfully!");
//                 SETTABLE_ROWS(prevRows =>
//                     prevRows.map(row => (row._id === vendorId ? { ...row, status: newStatus } : row))
//                 );
//             } else {
//                 alert("Failed to update status. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error updating vendor status:", error);
//             alert("Something went wrong. Please try again.");
//         }

//         // Close confirmation modal & reset pending request
//         setIsModalOpenConfirmEditVendorDetails(false);
//         setPendingStatusChange(null);
//     };

//     return (
//         <div className="p-6">
//             <table className="mt-4 w-full min-w-max table-auto text-left">
//                 <thead>
//                     <tr>
//                         <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">No</th>
//                         <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Vendor</th>
//                         <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Status</th>
//                         <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Details</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {TABLE_ROWS.map((data, index) => (
//                         <tr key={data._id}>
//                             <td className="py-3 px-4 text-center">{index + 1}</td>
//                             <td className="py-3 px-4">{data.name}</td>
//                             <td className="py-3 px-4">{data.status}</td>
//                             <td className="py-3 px-4">
//                                 <button
//                                     onClick={() => { setSelectedVendor(data); setIsModalOpenVendorDetails(true); }}
//                                     className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//                                 >
//                                     View Details
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <VendorDetailsModal
//                 open={isModalOpenVendorDetails}
//                 setOpen={setIsModalOpenVendorDetails}
//                 requestStatusChange={requestStatusChange} // Call request function
//                 vendorData={selectedVendor}
//             />

//             <ConfirmEditVendorDetailsModal
//                 open={isModalOpenConfirmEditVendorDetails}
//                 setOpen={setIsModalOpenConfirmEditVendorDetails}
//                 saveDetails={confirmStatusUpdate} // Update status on confirmation
//             />
//         </div>
//     );
// }
