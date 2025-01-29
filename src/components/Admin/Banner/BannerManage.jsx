// import { useState } from 'react';
// import Img1 from '../../../assets/images/mob1.png';
// import { AddBannerModal } from '../Modal/Banner/AddBannerModal';
// import { EditBannerModal } from '../Modal/Banner/EditBannerModal';
// import { ConfirmEditBannerModal } from '../Modal/Banner/ConfirmEditBannerModal';
// import { DeleteBannerModal } from '../Modal/Banner/DeleteBannerModal';
// import { Input } from '@material-tailwind/react';
// import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

// export default function BannerTable() {

//     const [isModalOpenAddBanner, setIsModalOpenAddBanner] = useState(false);
//     const [isModalOpenEditBanner, setIsModalOpenEditBanner] = useState(false);
//     const [isModalOpenConfirmEditBanner, setIsModalOpenConfirmEditBanner] = useState(false);
//     const [isModalOpenDeleteBanner, setIsModalOpenDeleteBanner] = useState(false);


//     const handleUpdateBanner = () => {
//         setIsModalOpenEditBanner(false);
//         setIsModalOpenConfirmEditBanner(true); 
//     };

//     const handleConfirmUpdateBanner = () => {
//         console.log("Banner updated");
//         setIsModalOpenConfirmEditBanner(false); 
//     };

//     const handleDeleteBanner = () => {
//         console.log("Banner deleted");
//         setIsModalOpenDeleteBanner(false); 
//       };

//     const banners = [
//         {
//             id: 1,
//             bannerHead: "FRIDAY SALE",
//             bannerText: "Shop More!",
//             status: "DEACTIVE",
//         },
//         {
//             id: 2,
//             bannerHead: "FRIDAY SALE",
//             bannerText: "Shop More!",
//             status: "DEACTIVE",
//         },
//         {
//             id: 3,
//             bannerHead: "FRIDAY SALE",
//             bannerText: "Shop More!",
//             status: "DEACTIVE",
//         },
//         {
//             id: 4,
//             bannerHead: "FRIDAY SALE",
//             bannerText: "Shop More!",
//             status: "ACTIVE",
//         },
//         {
//             id: 5,
//             bannerHead: "FRIDAY SALE",
//             bannerText: "Shop More!",
//             status: "DEACTIVE",
//         },
//     ];

//     const handleSaveBanner = () => {
//         console.log("Banner saved");
//         setIsModalOpenAddBanner(false); 
//     };

//     return (
//         <div className="p-8 w-full">
//             <div className="flex justify-between items-center mb-4">
//                 <h1 className="text-2xl font-bold">BANNER MANAGEMENT</h1>
//                 <button 
//                     className="bg-gradient-to-r from-[#1D0F0F] to-[#972323] text-white px-4 py-2 rounded"
//                     onClick={() => setIsModalOpenAddBanner(true)}
//                 >+ Add Banner</button>
//             </div>

//             <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
//                 <div className="w-full md:w-72">
//                     <Input
//                         label="Search"
//                         icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//                     />
//                 </div>
//             </div>

//             <div className="overflow-x-auto mt-10">
//                 <table className="min-w-full bg-white border border-gray-200">
//                     <thead>
//                         <tr className="bg-gray-100">
//                             <th className="py-2 px-4">No</th>
//                             <th className="py-2 px-4">Image</th>
//                             <th className="py-2 px-4">Banner Head</th>
//                             <th className="py-2 px-4">Banner Text</th>
//                             <th className="py-2 px-4">Status</th>
//                             <th className="py-2 px-4">Edit</th>
//                             <th className="py-2 px-4">Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {banners.map((banner, index) => (
//                             <tr key={banner.id} className="border-t even:bg-blue-gray-50/50">
//                                 <td className="py-3 px-4 text-center">{index + 1}</td>
//                                 <td className="py-3 px-4  items-center">
//                                     <img src={Img1} alt="banner" className="h-10 w-10 mr-4 rounded" />
//                                 </td>
//                                 <td className="py-3 px-4  items-center">
//                                     {banner.bannerHead}
//                                 </td>
//                                 <td className="py-3 px-4 text-center">
//                                     {banner.bannerText}
//                                 </td>
//                                 <td className="py-3 px-4 text-center cursor-pointer">
//                                     <span
//                                         className={`px-4 py-2 rounded ${banner.status === "DEACTIVE" ? "bg-yellow-600" : "bg-orange-700 text-white"}`}
//                                     >
//                                         {banner.status}
//                                     </span>
//                                 </td>
//                                 <td className="py-3 px-4 text-center">
//                                     <button 
//                                         onClick={() => setIsModalOpenEditBanner(true)}
//                                         className="bg-green-900 text-white px-4 py-2 rounded"
//                                     >
//                                         EDIT
//                                     </button>
//                                 </td>
//                                 <td className="py-3 px-4 text-center">
//                                     <button 
//                                     onClick={() => setIsModalOpenDeleteBanner(true) }
//                                     className="bg-red-900 text-white px-4 py-2 rounded"
//                                     >
//                                         DELETE
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <AddBannerModal
//                 open={isModalOpenAddBanner}
//                 setOpen={setIsModalOpenAddBanner}
//                 saveBanner={handleSaveBanner}
//             />

//             <EditBannerModal
//                 open={isModalOpenEditBanner}
//                 setOpen={setIsModalOpenEditBanner}
//                 saveBanner={handleUpdateBanner}
//             />
        
//             <ConfirmEditBannerModal
//                 open={isModalOpenConfirmEditBanner}
//                 setOpen={setIsModalOpenConfirmEditBanner}
//                 saveBanner={handleConfirmUpdateBanner} 
//             />

//             <DeleteBannerModal
//                 open={isModalOpenDeleteBanner}
//                 setOpen={setIsModalOpenDeleteBanner}
//                 deleteBanner={handleDeleteBanner}
//             />

//         </div>
//     );
// }

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
// import { AddBannerModal } from '../Modal/Brand/AddBannerModal.jsx';
// import { EditBannerModal } from '../Modal/Brand/EditBannerModal.jsx';
// import { ConfirmEditBannerModal } from '../Modal/Brand/ConfirmEdirBannerModal.jsx';
// import { DeleteBannerModal } from '../Modal/Brand/DeleteBannerModal.jsx';
import { SiBrandfolder } from "react-icons/si";
import Loader from "../../Loader/Loader.jsx";
import { fetchBanners } from "../../../Utils/bannerService.js";
// import { toast } from "react-hot-toast";
// import { useSelector } from "react-redux";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Activated",
        value: "activated",
    },
    {
        label: "Deactivated",
        value: "activated",
    },
];

const TABLE_HEAD = ["No", "Banner Name", "Status", "Edit", "Delete"];

export default function BannerTable() {
    //const token = useSelector((state) => state.auth.token);
    //const [isModalOpenAddBanner, setIsModalOpenAddBanner] = useState(false);
    //const [isModalOpenEditBanner, setIsModalOpenEditBanner] = useState(false);
    //const [isModalOpenConfirmEditBanner, setIsModalOpenConfirmEditBanner] = useState(false);
    //const [isModalOpenDeleteBanner, setIsModalOpenDeleteBanner] = useState(false);
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    //const [selectedBannerId, setSelectedBannerId] = useState(null); 
    //const [isModalOpenStatusBanner, setIsModalOpenStatusBanner] = useState(false);
    //const [selectedBanner, setSelectedBanner] = useState(null);
    //const [editingBanner, setEditingBanner] = useState(null);


    useEffect(() => {
        const loadBanners = async () => {
            setLoading(true);
            try {
                const data = await fetchBanners(currentPage, 10);
                setBanners(data.banners);
                setTotalPages(data.totalPages);
                
            } catch (error) {
                console.error("Error loading banners:", error.message);
            } finally {
                setLoading(false);
            }
        };

        loadBanners();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    // const handleSaveBanner = async (bannerData) => {
    //     try {
    //         const data = await createBanner(bannerData);
    //         console.log("Banner created successfully:", data);
    //         toast.success("Banner added successfully")
    //         setIsModalOpenAddBanner(false);
    //         setBanners((prevBanners) => [...prevBanners, data.banner]);
    //     } catch (error) {
    //         console.error("Error saving banner:", error);
    //     }
    // };

    // const handleEditBanner = (banner) => {
    //     setEditingBanner(banner); 
    //     setIsModalOpenEditBanner(true);
    // };

    // const handleUpdateBanner = async (banner) => {
    //     if (!token) {
    //         console.error("No authentication token found");
    //         return;
    //     }
    
    //     try {
    //         const { exists, message } = await checkBannerNameExists(banner.name, token);
    
    //         if (exists) {
    //             setEditingBanner({ ...banner, errorMessage: message });
    //             return;
    //         }
    
    //         setEditingBanner(banner);
    //         setIsModalOpenEditBanner(false);
    //         setIsModalOpenConfirmEditBanner(true);
    //     } catch (error) {
    //         console.error("Error validating banner name:", error.message);
    //         setEditingBanner({ ...banner, errorMessage: error.message });
    //     }
    // };
    
    // const handleConfirmUpdateBanner = async () => {
    //     try {
    //         const data = await updateBanner(editingBanner._id, editingBanner); 
    //         console.log("Banner updated:", data);
    //         toast.success("Banner updated successfully");
    //         setBanners((prevBanners) =>
    //             prevBanners.map((b) =>
    //                 b._id === editingBanner._id ? { ...b, name: editingBanner.name, logo: editingBanner.logo } : b
    //             )
    //         );
    //         setIsModalOpenConfirmEditBanner(false); 
    //     } catch (error) {
    //         console.error("Error updating banner:", error);
    //         toast.error("Failed to update banner");
    //     }
    // };

    // const handleDeleteBanner = async (bannerId) => {
    //     try {
    //         const data = await deleteBanner(bannerId);
    //         console.log("Banner deleted successfully:", data);
    //         toast.success("Banner deleted successfully");
    //         setIsModalOpenDeleteBanner(false);
    //         setBanners((prevBanners) => prevBanners.filter((banner) => banner._id !== bannerId));
    //     } catch (error) {
    //         console.error("Error deleting banner:", error);
    //         toast.error("Error deleting banner");
    //     }
    // };

    // const handleStatusBanner = async (banner) => {
    //     const updatedStatus = banner.status === "LIST" ? "UNLIST" : "LIST";
    
    //     try {
    //         const result = await updateBannerStatus(banner._id, { status: updatedStatus }, token);
    
    //         if (result.success) {
    //             setBanners((prevBanners) =>
    //                 prevBanners.map((b) =>
    //                     b._id === banner._id ? { ...b, status: updatedStatus } : b
    //                 )
    //             );
    //             console.log("Banner status updated successfully!");
    //             toast.success("Banner status updated successfully");
    //             setIsModalOpenStatusBanner(false);
    //         } else {
    //             console.error("Failed to update banner status:", result.message);
    //         }
    //     } catch (err) {
    //         console.error("Error updating banner status:", err);
    //     }
    // };
    
    
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
                        Banner list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all Banners
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button
                           // onClick={() => setIsModalOpenAddBanner(true)}
                            className="flex items-center gap-3" size="sm">
                            <SiBrandfolder  className="h-4 w-4" /> Add Banner
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
                        { banners.length > 0 ? (
                            banners.map(
                            (banner, index) => {
                                const listingNumber = (currentPage - 1) * 10 + index + 1;
                                const isLast = index === banners.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            
                            return (
                                <tr key={banner._id}>
                                    <td className="py-3 px-4 text-center">{listingNumber}</td>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3">
                                            
                                            <div className="flex flex-col">
                                                <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                                >
                                                {banner.name}
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
                                                value={banner.status}
                                                color={banner.status === "ACTIVATED" ? "green" : "red"}
                                                // onClick={() => {
                                                //     setSelectedBanner(banner);
                                                //     setIsModalOpenStatusBanner(true);
                                                // }}
                                            />
                                        </div>
                                    </td>

                                    <td className={classes}>
                                        <Tooltip content="Edit Banner">
                                            <IconButton variant="text">
                                                <PencilIcon 
                                                //onClick={() => handleEditBanner(banner)}
                                                className="h-4 w-4 text-blue-900" />
                                            </IconButton>
                                        </Tooltip>
                                    </td>

                                    <td className={classes}>
                                        <Tooltip content="Delete Banner">
                                            <IconButton variant="text">
                                                <TrashIcon 
                                                // onClick={() => {
                                                //     setSelectedBannerId(banner._id);  
                                                //     setIsModalOpenDeleteBanner(true); 
                                                // }}
                                
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
                                        No banner to display
                                    </Typography>

                                </td>
                            </tr>
                        )}
                    </tbody>

                    {/* <AddBannerModal
                        open={isModalOpenAddBanner}
                        setOpen={setIsModalOpenAddBanner}
                        saveBanner={handleSaveBanner}
                    /> */}

                    {/* <EditBannerModal
                        open={isModalOpenEditBanner}
                        setOpen={setIsModalOpenEditBanner}
                        saveBanner={() => handleUpdateBanner(editingBanner)}
                        banner={editingBanner}
                        setEditingBanner={setEditingBanner}
                    /> */}
                
                    {/* <ConfirmEditBannerModal
                        open={isModalOpenConfirmEditBanner}
                        setOpen={setIsModalOpenConfirmEditBanner}
                        saveBanner={handleConfirmUpdateBanner} 
                        banner={editingBanner}
                    /> */}

                    {/* <DeleteBannerModal
                        open={isModalOpenDeleteBanner}
                        setOpen={setIsModalOpenDeleteBanner}
                        deleteBanner={() => handleDeleteBanner(selectedBannerId)} 
                        banner={selectedBanner}
                    /> */}

                    {/* <StatusBannerModal
                        open={isModalOpenStatusBanner}
                        setOpen={setIsModalOpenStatusBanner}
                        banner={selectedBanner}
                        handleStatusChange={handleStatusBanner}
                    /> */}

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