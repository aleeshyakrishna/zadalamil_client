import { UserCircleIcon } from '@heroicons/react/24/outline';
import { TruckIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { WalletIcon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid';

const ProfileComp = () => {
    return (
      <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100 lg:p-72 md:p-52 p-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-64  bg-white shadow-lg p-6 mb-4 lg:mb-0 lg:block flex justify-between items-center mt-28 lg:mt-0 md:mt-0">
            <div className="flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
                    <span><UserCircleIcon className="w-16 lg:w-24" /></span>
                </div>
                <h2 className="text-sm lg:text-lg md:text-lg font-semibold text-gray-800">AKHILA VIJAYAN</h2>
                <p className="text-red-900 font-medium text-xs lg:text-sm md:text-sm">CUSTOMER</p>
            </div>
            <ul className="mt-8 space-y-4 w-full">
                <li>
                <a href="#" className="flex items-center text-gray-700 hover:text-red-900 text-sm">
                    <span className="mr-4 w-5"><TruckIcon /></span> MY ORDERS
                </a>
                </li>
                <li>
                <a href="#" className="flex items-center text-gray-700 hover:text-red-900 text-sm">
                    <span className="mr-4 w-5">< HeartIcon /></span> MY WISHLIST
                </a>
                </li>
                <li>
                <a href="#" className="flex items-center text-gray-700 hover:text-red-900 text-sm">
                    <span className="w-5 mr-4"><UserCircleIcon /></span> PROFILE INFORMATION
                </a>
                </li>
                <li>
                <a href="#" className="flex items-center text-gray-700 hover:text-red-900 text-sm">
                    <span className="mr-4 w-5"><MapPinIcon /></span> MANAGE ADDRESS
                </a>
                </li>
                <li>
                <a href="#" className="flex items-center text-gray-700 hover:text-red-900 text-sm">
                    <span className="mr-4 w-5"><ShoppingBagIcon /></span> MY CART
                </a>
                </li>
                <li>
                <a href="#" className="flex items-center text-gray-700 hover:text-red-900 text-sm">
                    <span className="mr-4 w-5"><WalletIcon /></span> MY WALLET
                </a>
                </li>
                <li>
                <a href="#" className="flex items-center text-gray-700 hover:text-red-900 text-sm">
                    <span className="mr-4 w-5"><ArrowLeftEndOnRectangleIcon /></span> LOGOUT
                </a>
                </li>
            </ul>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 p-6 bg-white shadow-lg rounded-lg">
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
        </main>
      </div>
    );
  };
  
  export default ProfileComp;
  