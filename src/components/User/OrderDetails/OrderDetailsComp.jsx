import { UserCircleIcon } from "@heroicons/react/24/solid";
import { TruckIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Img1 from '../../../assets/images/mob1.png';
import { Link } from "react-router-dom";

const OrderDetailsComp = () => {
    return (
        <section className="p-4">
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-2 mt-32 md:mt-32 lg:mt-40">
        <div className="bg-white shadow-lg rounded-lg  max-w-5xl min-w-2xl">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-red-900">ORDER DETAILS</h2>
            <p className="text-xs font-thin text-gray-800">Details for the Order ID: 675GHG756HG88</p>
            </div>
            
            <button className="bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-green-800 w-44">
              Download Invoice
            </button>
          </div>
  
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-200">
            {/* Customer Info */}
            <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                <UserCircleIcon className="w-5 h-5 text-gray-500" />
                Customer
                </h3>
                <p className="text-gray-800 font-semibold">Akhila Vijayan</p>
                <p className="text-gray-600 text-sm">+9718877451252</p>
                <a href="/profile" className="text-red-900 text-sm mt-2 block">
                    View Profile
                </a>
            </div>
  
            {/* Order Info */}
            <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                    <TruckIcon className="w-5 h-5 text-gray-500" />
                    Order Info
                </h3>    
              <p className="text-gray-800 text-sm">Shipping Forgo Express</p>
              <p className="text-gray-800 text-sm">Pay method: Razor Pay</p>
              <p className="text-gray-800 text-sm">Status: Placed</p>
            </div>
  
            {/* Deliver To */}
            <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-gray-500" />
                Deliver To
            </h3>
              <p className="text-gray-800 font-semibold">Athira Vijayan</p>
              <p className="text-gray-600 text-sm">
                Address: Kunnumveettil House, Thodupuzha PO, PIN: 685581
              </p>
            </div>
          </div>
  
          {/* Table Section */}
          <div className="p-6">
            <table className="w-full border-collapse border border-gray-200 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 p-2">Product</th>
                  <th className="border border-gray-200 p-2">Image</th>
                  <th className="border border-gray-200 p-2">Unit Price</th>
                  <th className="border border-gray-200 p-2">Quantity</th>
                  <th className="border border-gray-200 p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-2">
                  Samsung Galaxy Z Fold5
                  </td>
                  <td className="border border-gray-200 p-2 w-10 h-10 cursor-pointer">
                  <Link to='/product-details'><img src={Img1} /></Link>
                  </td>
                  <td className="border border-gray-200 p-2">AED 3400</td>
                  <td className="border border-gray-200 p-2">2</td>
                  <td className="border border-gray-200 p-2">AED 6800</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-2">
                  Samsung Galaxy Z Fold5
                  </td>
                  <td className="border border-gray-200 p-2 w-10 h-10 cursor-pointer">
                    <Link to='/product-details'><img src={Img1} /></Link>
                  </td>
                  <td className="border border-gray-200 p-2">AED 3400</td>
                  <td className="border border-gray-200 p-2">2</td>
                  <td className="border border-gray-200 p-2">AED 6800</td>
                </tr>
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td colSpan="4" className="border border-gray-200 p-2 font-semibold">
                    Subtotal:
                  </td>
                  <td className="border border-gray-200 p-2">AED 13600</td>
                </tr>
                <tr>
                  <td colSpan="4" className="border border-gray-200 p-2 font-semibold">
                    Shipping Cost:
                  </td>
                  <td className="border border-gray-200 p-2">AED 0.00</td>
                </tr>
                <tr>
                  <td colSpan="4" className="border border-gray-200 p-2 font-semibold">
                    TOTAL:
                  </td>
                  <td className="border font-bold border-gray-200 p-2 text-red-900">
                    AED 13600
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      </section>
    );
  };
  
  export default OrderDetailsComp;


