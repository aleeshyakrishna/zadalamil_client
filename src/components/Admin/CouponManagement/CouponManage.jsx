import { useState } from 'react';
import { AddCouponModal } from '../Modal/Coupon/AddCouponModal';
import { EditCouponModal } from '../Modal/Coupon/EditCouponModal';
import { ConfirmEditCouponModal } from '../Modal/Coupon/ConfirmEditCouponModal';
import { DeleteCouponModal } from '../Modal/Coupon/DeleteCouponModal';
import { Input } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function CouponTable() {

    const [isModalOpenAddCoupon, setIsModalOpenAddCoupon] = useState(false);
    const [isModalOpenEditCoupon, setIsModalOpenEditCoupon] = useState(false);
    const [isModalOpenConfirmEditCoupon, setIsModalOpenConfirmEditCoupon] = useState(false);
    const [isModalOpenDeleteCoupon, setIsModalOpenDeleteCoupon] = useState(false);


    const handleUpdateCoupon = () => {
        setIsModalOpenEditCoupon(false);
        setIsModalOpenConfirmEditCoupon(true); 
    };

    const handleConfirmUpdateCoupon = () => {
        console.log("Coupon updated");
        setIsModalOpenConfirmEditCoupon(false); 
    };

    const handleDeleteCoupon = () => {
        console.log("Coupon deleted");
        setIsModalOpenDeleteCoupon(false); 
      };

    const coupons = [
        {
            id: 1,
            name: "XMAS2024",
            discount: 10,
            expiryDate: "2024-12-27",
            status: "DEACTIVE",
        },
        {
            id: 2,
            name: "NEWYEAR2025",
            discount: 25,
            expiryDate: "2025-01-31",
            status: "DEACTIVE",
        },
        {
            id: 3,
            name: "NEWYEAR2025",
            discount: 25,
            expiryDate: "2025-01-31",
            status: "DEACTIVE",
        },
        {
            id: 4,
            name: "NEWYEAR2025",
            discount: 25,
            expiryDate: "2025-01-31",
            status: "ACTIVE",
        },
        {
            id: 5,
            name: "NEWYEAR2025",
            discount: 25,
            expiryDate: "2025-01-31",
            status: "DEACTIVE",
        },
    ];

    const handleSaveCoupon = () => {
        console.log("Coupon Saved");
        setIsModalOpenAddCoupon(false); 
    };

    return (
        <div className="p-8 w-full m-20">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">COUPON MANAGEMENT</h1>
                <button 
                    className="bg-gradient-to-r from-[#1D0F0F] to-[#972323] text-white px-4 py-2 rounded"
                    onClick={() => setIsModalOpenAddCoupon(true)}
                >+ Add Coupon</button>
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
                            <th className="py-2 px-4">Coupon Code</th>
                            <th className="py-2 px-4">Discount</th>
                            <th className="py-2 px-4">Expiry Date</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">Edit</th>
                            <th className="py-2 px-4">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coupons.map((coupon, index) => (
                            <tr key={coupon.id} className="border-t even:bg-blue-gray-50/50">
                                <td className="py-3 px-4 text-center">{index + 1}</td>
                                <td className="py-3 px-4 flex items-center">
                                    {coupon.name}
                                </td>
                                <td className="py-3 px-4 text-center">
                                    {coupon.discount}
                                </td>
                                <td className="py-3 px-4 text-center">{coupon.expiryDate}</td>
                                <td className="py-3 px-4 text-center cursor-pointer">
                                    <span
                                        className={`px-4 py-2 rounded ${coupon.status === "ACTIVE" ? "bg-yellow-600" : "bg-orange-700 text-white"}`}
                                    >
                                        {coupon.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <button 
                                        onClick={() => setIsModalOpenEditCoupon(true)}
                                        className="bg-green-900 text-white px-4 py-2 rounded"
                                    >
                                        EDIT
                                    </button>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <button 
                                    onClick={() => setIsModalOpenDeleteCoupon(true) }
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

            <AddCouponModal
                open={isModalOpenAddCoupon}
                setOpen={setIsModalOpenAddCoupon}
                saveCoupon={handleSaveCoupon}
            />

            <EditCouponModal
                open={isModalOpenEditCoupon}
                setOpen={setIsModalOpenEditCoupon}
                saveCoupon={handleUpdateCoupon}
            />
        
            <ConfirmEditCouponModal
                open={isModalOpenConfirmEditCoupon}
                setOpen={setIsModalOpenConfirmEditCoupon}
                saveCoupon={handleConfirmUpdateCoupon} 
            />

            <DeleteCouponModal
                open={isModalOpenDeleteCoupon}
                setOpen={setIsModalOpenDeleteCoupon}
                deleteCoupon={handleDeleteCoupon}
            />

        </div>
    );
}
