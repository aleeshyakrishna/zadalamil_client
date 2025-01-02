import { useState } from 'react';
import Img1 from '../../../assets/images/mob1.png';
import { AddBannerModal } from '../Modal/Banner/AddBannerModal';
import { EditBannerModal } from '../Modal/Banner/EditBannerModal';
import { ConfirmEditBannerModal } from '../Modal/Banner/ConfirmEditBannerModal';
import { DeleteBannerModal } from '../Modal/Banner/DeleteBannerModal';
import { Input } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function BannerTable() {

    const [isModalOpenAddBanner, setIsModalOpenAddBanner] = useState(false);
    const [isModalOpenEditBanner, setIsModalOpenEditBanner] = useState(false);
    const [isModalOpenConfirmEditBanner, setIsModalOpenConfirmEditBanner] = useState(false);
    const [isModalOpenDeleteBanner, setIsModalOpenDeleteBanner] = useState(false);


    const handleUpdateBanner = () => {
        setIsModalOpenEditBanner(false);
        setIsModalOpenConfirmEditBanner(true); 
    };

    const handleConfirmUpdateBanner = () => {
        console.log("Banner updated");
        setIsModalOpenConfirmEditBanner(false); 
    };

    const handleDeleteBanner = () => {
        console.log("Banner deleted");
        setIsModalOpenDeleteBanner(false); 
      };

    const banners = [
        {
            id: 1,
            bannerHead: "FRIDAY SALE",
            bannerText: "Shop More!",
            status: "DEACTIVE",
        },
        {
            id: 2,
            bannerHead: "FRIDAY SALE",
            bannerText: "Shop More!",
            status: "DEACTIVE",
        },
        {
            id: 3,
            bannerHead: "FRIDAY SALE",
            bannerText: "Shop More!",
            status: "DEACTIVE",
        },
        {
            id: 4,
            bannerHead: "FRIDAY SALE",
            bannerText: "Shop More!",
            status: "ACTIVE",
        },
        {
            id: 5,
            bannerHead: "FRIDAY SALE",
            bannerText: "Shop More!",
            status: "DEACTIVE",
        },
    ];

    const handleSaveBanner = () => {
        console.log("Banner saved");
        setIsModalOpenAddBanner(false); 
    };

    return (
        <div className="p-8 w-full">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">BANNER MANAGEMENT</h1>
                <button 
                    className="bg-gradient-to-r from-[#1D0F0F] to-[#972323] text-white px-4 py-2 rounded"
                    onClick={() => setIsModalOpenAddBanner(true)}
                >+ Add Banner</button>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="w-full md:w-72">
                    <Input
                        label="Search"
                        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                    />
                </div>
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4">No</th>
                            <th className="py-2 px-4">Image</th>
                            <th className="py-2 px-4">Banner Head</th>
                            <th className="py-2 px-4">Banner Text</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">Edit</th>
                            <th className="py-2 px-4">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {banners.map((banner, index) => (
                            <tr key={banner.id} className="border-t even:bg-blue-gray-50/50">
                                <td className="py-3 px-4 text-center">{index + 1}</td>
                                <td className="py-3 px-4  items-center">
                                    <img src={Img1} alt="banner" className="h-10 w-10 mr-4 rounded" />
                                </td>
                                <td className="py-3 px-4  items-center">
                                    {banner.bannerHead}
                                </td>
                                <td className="py-3 px-4 text-center">
                                    {banner.bannerText}
                                </td>
                                <td className="py-3 px-4 text-center cursor-pointer">
                                    <span
                                        className={`px-4 py-2 rounded ${banner.status === "DEACTIVE" ? "bg-yellow-600" : "bg-orange-700 text-white"}`}
                                    >
                                        {banner.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <button 
                                        onClick={() => setIsModalOpenEditBanner(true)}
                                        className="bg-green-900 text-white px-4 py-2 rounded"
                                    >
                                        EDIT
                                    </button>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <button 
                                    onClick={() => setIsModalOpenDeleteBanner(true) }
                                    className="bg-red-900 text-white px-4 py-2 rounded"
                                    >
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <AddBannerModal
                open={isModalOpenAddBanner}
                setOpen={setIsModalOpenAddBanner}
                saveBanner={handleSaveBanner}
            />

            <EditBannerModal
                open={isModalOpenEditBanner}
                setOpen={setIsModalOpenEditBanner}
                saveBanner={handleUpdateBanner}
            />
        
            <ConfirmEditBannerModal
                open={isModalOpenConfirmEditBanner}
                setOpen={setIsModalOpenConfirmEditBanner}
                saveBanner={handleConfirmUpdateBanner} 
            />

            <DeleteBannerModal
                open={isModalOpenDeleteBanner}
                setOpen={setIsModalOpenDeleteBanner}
                deleteBanner={handleDeleteBanner}
            />

        </div>
    );
}
