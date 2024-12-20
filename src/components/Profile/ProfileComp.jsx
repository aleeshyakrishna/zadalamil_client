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

const ProfileComp = () => {
  const [activeTab, setActiveTab] = useState("PROFILE_INFORMATION"); 
  const [isModalOpenAddAddress, setIsModalOpenAddAddress] = useState(false);

  const handleSaveAddress = () => {
    console.log("Address saved");
    setIsModalOpenAddAddress(false); 
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
          </li>
          <li>
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

            {/* Address List */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
                <label className="flex items-center space-x-2 cursor-pointer">
                <input
                    type="radio"
                    name="address"
                    value="AkhilaVijayanAddress" 
                    checked="AkhilaVijayanAddress"
                    onChange="AkhilaVijayanAddress"
                    className="h-5 w-5 text-red-900 focus:ring-2 focus:ring-red-500"
                />
                <div className="flex flex-col">
                    <h3 className="font-semibold">Akhila Vijayan</h3>
                    <p className="text-sm text-gray-600 mt-2">Kunnathuveettil House, Koduveliol PO, Thodupuzha - 685581</p>
                    <p className="text-sm text-gray-600 mt-2">Phone: 9995555555</p>
                </div>
                </label>

                <div className="flex space-x-4 mt-2">
                <button className="px-3 py-1 bg-blue-800 text-white w-20 rounded-lg">Edit</button>
                <button className="px-3 py-1 bg-red-900 text-white w-20 rounded-lg">Delete</button>
                </div>
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
    </div>
  );
};

export default ProfileComp;