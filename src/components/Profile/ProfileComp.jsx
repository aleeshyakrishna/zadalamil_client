import { useState } from "react";
import {
  UserCircleIcon,
  TruckIcon,
  HeartIcon,
  MapPinIcon,
  WalletIcon,
  ShoppingBagIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

import { AddAddressModal } from "../Modal/addAddressModal";
import { EditAddressModal } from "../Modal/editAddressModal";
import { ConfirmEditAddressModal } from "../Modal/editAddressConfirmModal";
import { DeleteAddressModal } from "../Modal/deleteAddressModal";
import { Link } from "react-router-dom";

const ProfileComp = () => {
  const [activeTab, setActiveTab] = useState("PROFILE_INFORMATION"); 
  const [isModalOpenAddAddress, setIsModalOpenAddAddress] = useState(false);
  const [isModalOpenEditAddress, setIsModalOpenEditAddress] = useState(false);
  const [isModalOpenConfirmEdit, setIsModalOpenConfirmEdit] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("Akhila");
  const [isModalOpenDeleteAddress, setIsModalOpenDeleteAddress] = useState(false);



  const [addresses, setAddresses] = useState([
    {
      name: "Akhila Vijayan",
      address: "Kunnathuveettil House, Thomannkuthu PO, Kerala - 685581",
    },
    {
      name: "Sheela Vijayan",
      address: "Kunnathuveettil House, Thomannkuthu PO, Kerala - 685581",
    },
  ]);
  const [tempEditAddress, setTempEditAddress] = useState(null);
  const handleUpdateAddress = (updatedAddress) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((addr) =>
        addr.name === tempEditAddress.name ? updatedAddress : addr
      )
    );
    setTempEditAddress(null);
    setIsModalOpenConfirmEdit(false);
  };

  const initiateEditAddress = (address) => {
    setTempEditAddress(address);
    setIsModalOpenEditAddress(true);
  };

  const confirmEditAddress = () => {
    setIsModalOpenEditAddress(false);
    setIsModalOpenConfirmEdit(true);
  };

  const handleSaveAddress = () => {
    console.log("Address saved");
    setIsModalOpenAddAddress(false); 
  };

  const handleDeleteAddress = () => {
    console.log("Address deleted");
    setIsModalOpenDeleteAddress(false); 
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100 lg:p-72 md:p-52 p-6">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-white shadow-lg p-6 mb-4 lg:mb-0 lg:block flex justify-between items-center mt-28 lg:mt-0 md:mt-0">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <span>
              <UserCircleIcon className="w-16 lg:w-24" />
            </span>
          </div>
          <h2 className="text-sm lg:text-lg md:text-lg font-semibold text-gray-800">
            AKHILA VIJAYAN
          </h2>
          <p className="text-red-900 font-medium text-xs lg:text-sm md:text-sm">
            CUSTOMER
          </p>
        </div>
        <ul className="mt-8 space-y-4 w-full">
          <li>
            <Link to='/myOrders'>
            <button
              onClick={() => setActiveTab("MY_ORDERS")}
              className={`flex items-center text-sm ${
                activeTab === "MY_ORDERS"
                  ? "text-red-900 font-bold"
                  : "text-gray-700 hover:text-red-900"
              }`}
            >
              <span className="mr-4 w-5">
                <TruckIcon />
              </span>
              MY ORDERS
            </button>
            </Link>
          </li>
          <li>
            <Link to='/wishlist'>
                <button
                onClick={() => setActiveTab("MY_WISHLIST")}
                className={`flex items-center text-sm ${
                    activeTab === "MY_WISHLIST"
                    ? "text-red-900 font-bold"
                    : "text-gray-700 hover:text-red-900"
                }`}
                >
                <span className="mr-4 w-5">
                    <HeartIcon />
                </span>
                MY WISHLIST
                </button>
            </Link>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("PROFILE_INFORMATION")}
              className={`flex items-center text-sm ${
                activeTab === "PROFILE_INFORMATION"
                  ? "text-red-900 font-bold"
                  : "text-gray-700 hover:text-red-900"
              }`}
            >
              <span className="mr-4 w-5">
                <UserCircleIcon />
              </span>
              PROFILE INFORMATION
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("MANAGE_ADDRESS")}
              className={`flex items-center text-sm ${
                activeTab === "MANAGE_ADDRESS"
                  ? "text-red-900 font-bold"
                  : "text-gray-700 hover:text-red-900"
              }`}
            >
              <span className="mr-4 w-5">
                <MapPinIcon />
              </span>
              MANAGE ADDRESS
            </button>
          </li>
          <li>
            <Link to='/cart'>
                <button
                onClick={() => setActiveTab("MY_CART")}
                className={`flex items-center text-sm ${
                    activeTab === "MY_CART"
                    ? "text-red-900 font-bold"
                    : "text-gray-700 hover:text-red-900"
                }`}
                >
                <span className="mr-4 w-5">
                    <ShoppingBagIcon />
                </span>
                MY CART
                </button>
            </Link>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("MY_WALLET")}
              className={`flex items-center text-sm ${
                activeTab === "MY_WALLET"
                  ? "text-red-900 font-bold"
                  : "text-gray-700 hover:text-red-900"
              }`}
            >
              <span className="mr-4 w-5">
                <WalletIcon />
              </span>
              MY WALLET
            </button>
          </li>
          <li>
            <button className="flex items-center text-sm text-gray-700 hover:text-red-900">
              <span className="mr-4 w-5">
                <ArrowLeftOnRectangleIcon />
              </span>
              LOGOUT
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white shadow-lg rounded-lg">
        {activeTab === "PROFILE_INFORMATION" && (
          <>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              PROFILE INFORMATION
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone No.
                </label>
                <input
                  type="tel"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800"
                >
                  Update
                </button>
              </div>
            </form>
          </>
        )}

        {activeTab === "MANAGE_ADDRESS" && (
        <>
            <div className="space-y-4">
            <button className="px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800" onClick={() => setIsModalOpenAddAddress(true)}>
                + Add Address
            </button>
            <div className="space-y-4">
            {addresses.map((addr, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 border rounded-lg ${
                    selectedAddress === addr.name
                      ? "border-red-900"
                      : "border-gray-300"
                  }`}
              >
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="address"
                    checked={selectedAddress === addr.name}
                    onChange={() => setSelectedAddress(addr.name)}
                    className="h-5 w-5 text-red-900"
                  />
                  <div>
                    <p className="font-medium">{addr.name}</p>
                    <p className="text-gray-600 text-sm">{addr.address}</p>
                  </div>
                </label>
                <div className="space-y-1 md:space-x-2 md:space-y-0 flex flex-col md:flex-row">
                    <button
                        className="text-blue-500 hover:underline"
                        onClick={() => initiateEditAddress(addr)}
                    >
                        Edit
                    </button>
                    <button 
                        className="text-red-900 hover:underline"
                        onClick={() => setIsModalOpenDeleteAddress(true) }
                        >
                        Delete
                    </button>
                </div>
              </div>
            ))}
          </div>
            </div>
        </>
        )}

        {activeTab === "MY_WALLET" && (
        <>
            <div className="space-y-4">
            <div className="flex flex-col items-center justify-center w-11/12 max-w-sm p-16 bg-white rounded-lg shadow-lg">
                <div className="text-primary mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.25 6.75A3.75 3.75 0 016 3h12a3.75 3.75 0 013.75 3.75v10.5A3.75 3.75 0 0118 21H6a3.75 3.75 0 01-3.75-3.75V6.75zM6 4.5A2.25 2.25 0 003.75 6.75v10.5A2.25 2.25 0 006 19.5h12a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0018 4.5H6z" />
                        <path d="M18.75 12a.75.75 0 000-1.5h-3a.75.75 0 000 1.5h3z" />
                    </svg>
                    </div>
                    <h1 className="text-2xl font-semibold text-red-900">MY WALLET</h1>
                    <p className="text-lg text-gray-600 mb-6 mt-10">Total Wallet Amount: <span className="font-semibold text-gray-800">237</span></p>
                    <Link to='/'>
                        <button className="px-6 py-3 text-black bg-yellow-800 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-600 transition font-bold">
                        CONTINUE SHOPPING
                        </button>
                    </Link>
                </div>
            </div>
        </>
        )}

        </main>

        <AddAddressModal
            open={isModalOpenAddAddress}
            setOpen={setIsModalOpenAddAddress}
            saveAddress={handleSaveAddress}
        />
        <EditAddressModal
            open={isModalOpenEditAddress}
            setOpen={setIsModalOpenEditAddress}
            saveAddress={confirmEditAddress}
        />

        <ConfirmEditAddressModal
            open={isModalOpenConfirmEdit}
            setOpen={setIsModalOpenConfirmEdit}
            saveAddress={() =>
                handleUpdateAddress({ ...tempEditAddress, address: "Updated Address" })
            }
        />
        <DeleteAddressModal
            open={isModalOpenDeleteAddress}
            setOpen={setIsModalOpenDeleteAddress}
            saveAddress={handleDeleteAddress}
        />

    </div>
  );
};

export default ProfileComp;