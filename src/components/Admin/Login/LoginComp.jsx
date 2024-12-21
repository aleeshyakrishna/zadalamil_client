import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AdminLoginComp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#6b6868] to-[#972323] px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">ADMIN LOGIN</h2>
            <form className="space-y-6">
            <div>
                <label className="block text-sm font-medium mb-2">
                Username
                </label>
                <div className="relative">
                    <input 
                        type="text" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-red-300" 
                        placeholder="Enter Username" 
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center">
                        <EnvelopeIcon className='w-5 text-gray-600'/>
                    </span>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">
                Password
                </label>
                <div className="relative">
                    <input 
                        type="password" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-red-300" 
                        placeholder="Enter Password" 
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center">
                        <LockClosedIcon className='w-5 text-gray-600'/>
                    </span>
                </div>
            </div>

            <div className="text-right">
                <a href="#" className="text-sm text-blue-900 hover:underline">
                Forgot Password?
                </a>
            </div>

            <Link to='/admin/dashboard'>
            <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#1D0F0F] to-[#972323] hover:opacity-90 text-white font-bold py-3 rounded-md transition"
            >
                LOGIN
            </button>
            </Link>
            </form>
        </div>
    </div>
  );
};

export default AdminLoginComp;
