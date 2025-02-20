import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { updateVendorPassword } from '../../../Redux/reducer/authVendorSlice';

// import axios from "axios";
const VendorPasswordUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const { vendor, loading, error, passwordUpdateSuccess } = useSelector(state => state.auth);

 

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
//  const handlePasswordUpdate = async (e) => {
//         e.preventDefault();
        
//         // Clear previous errors
//         setFormError("");
        
//         // Basic validation
//         if(!currentPassword.trim() || !newPassword.trim() || !confirmPassword.trim()) {
//             setFormError("All fields are required");
//             return;
//         }
        
//         if(newPassword !== confirmPassword) {
//             setFormError("New passwords do not match");
//             return;
//         }
        
//         if(newPassword.length < 8) {
//             setFormError("New password must be at least 8 characters long");
//             return;
//         }
//         console.log("go ahead....");
        
//         // Dispatch the update password action
//         dispatch(updateVendorPassword({ currentPassword, newPassword }));
//     };
  // Handle form submission
  //   const handlePasswordUpdate = async (e) => {
  //     e.preventDefault();

  //     // Clear previous errors
  //     setFormError("");

  //     // Basic validation
  //     if (
  //       !currentPassword.trim() ||
  //       !newPassword.trim() ||
  //       !confirmPassword.trim()
  //     ) {
  //       setFormError("All fields are required");
  //       return;
  //     }

  //     if (newPassword !== confirmPassword) {
  //       setFormError("New passwords do not match");
  //       return;
  //     }

  //     if (newPassword.length < 8) {
  //       setFormError("New password must be at least 8 characters long");
  //       return;
  //     }

  //     // Dispatch the update password action
  //     dispatch(updateVendorPassword({ currentPassword, newPassword }));
  //   };

  // Handle success and navigation
  
   const handlePasswordUpdate = async (e) => {
        e.preventDefault();
        
        // Clear previous errors
        setFormError("");
        
        // Basic validation
        if(!currentPassword.trim() || !newPassword.trim() || !confirmPassword.trim()) {
            setFormError("All fields are required");
            return;
        }
        
        if(newPassword !== confirmPassword) {
            setFormError("New passwords do not match");
            return;
        }
        
        if(newPassword.length < 8) {
            setFormError("New password must be at least 8 characters long");
            return;
        }
        
        if (!vendor || !vendor._id) {
            setFormError("Vendor information not found. Please login again.");
            return;
        }
        
        
        // Dispatch the update password action with vendor ID
        dispatch(updateVendorPassword({ 
            currentPassword, 
            newPassword,
            vendorId: vendor._id 
        }));
    };
  useEffect(() => {
    if (passwordUpdateSuccess) {
      toast.success("Password updated successfully");
      // Reset form fields
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      // Navigate back to dashboard after a short delay
      setTimeout(() => {
        // dispatch(resetPasswordUpdateStatus());
        // navigate("/vendor/vendor-dashboard");
      }, 1500);
    }
  }, [passwordUpdateSuccess, dispatch, navigate]);

  // Handle errors from Redux store
  useEffect(() => {
    if (error) {
      setFormError(error);
    }
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-red-900 to-gray-800">
      <div className="flex flex-wrap bg-white rounded-lg shadow-lg w-full max-w-4xl">
        {/* <div className="w-full lg:w-1/2 flex justify-center items-center p-8 bg-red-100">
          <img src={Img1} alt="Store Cart" className="w-full max-w-xs" />
        </div> */}

        <div className="w-full  p-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            UPDATE PASSWORD
          </h1>

          <form className="space-y-6" onSubmit={handlePasswordUpdate}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Current Password:
              </label>
              <div className="flex items-center border rounded-lg px-4 py-2 bg-gray-100">
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter Current Password"
                  className="w-full bg-transparent outline-none"
                  disabled={loading}
                />
                <span className="text-gray-500 ml-2">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">New Password:</label>
              <div className="flex items-center border rounded-lg px-4 py-2 bg-gray-100">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter New Password"
                  className="w-full bg-transparent outline-none"
                  disabled={loading}
                />
                <span className="text-gray-500 ml-2">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Confirm New Password:
              </label>
              <div className="flex items-center border rounded-lg px-4 py-2 bg-gray-100">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm New Password"
                  className="w-full bg-transparent outline-none"
                  disabled={loading}
                />
                <span className="text-gray-500 ml-2">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>

            {formError && (
              <div className="text-red-900 text-sm mb-4 text-center">
                {formError}
              </div>
            )}

            <button
              type="submit"
              className={`w-full py-2 ${
                loading ? "bg-red-700" : "bg-red-900"
              } text-white rounded-lg hover:bg-red-800 flex justify-center items-center`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  UPDATING...
                </>
              ) : (
                "UPDATE PASSWORD"
              )}
            </button>

            <button
              type="button"
              onClick={() => navigate("/vendor/vendor-dashboard")}
              className="w-full py-2 mt-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              disabled={loading}
            >
              CANCEL
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorPasswordUpdate;
