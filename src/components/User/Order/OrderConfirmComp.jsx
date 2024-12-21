import Img1 from '../../../assets/images/orderTick.png';
import Img2 from '../../../assets/images/order.png';
import { Link } from 'react-router-dom';

const OrderConfirmComp = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl">
        <div className="p-6 text-center border-b border-gray-200">
          <div className="flex justify-center items-center w-24 h-24 md:w-32 md:h-32 mx-auto">
            <img
              src={Img1}
              alt="Order Confirmed Illustration"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-xl font-bold text-green-900">ORDER CONFIRMED</h2>
          <p className="text-gray-600 mt-2">
            Your order is confirmed. You will receive an order confirmation email/SMS shortly with the expected delivery date for your items.
          </p>
        </div>

        <div className="p-6 flex flex-col md:flex-row items-center gap-4 mt-5">
          <div className="flex-grow">
            <h3 className="text-sm font-medium text-gray-500">Delivering to:</h3>
            <p className="text-base font-semibold">Akhila Vijayan | +91 8848965432</p>
            <p className="text-sm text-gray-600">
              Kurumasseri House, Thrissur, PO, Kerala-680551
            </p>
            <Link to='/order-details'>
              <button className="mt-4 px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800">
                ORDER DETAILS
              </button>
            </Link>
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32">
            <img
              src={Img2}
              alt="Delivery Illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="mt-5 p-4 border-t border-gray-200 flex justify-between items-center">
          <Link to='/'>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              CONTINUE SHOPPING
            </button>
          </Link>
          <Link to='/myOrders'>
            <button className="px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800">
              VIEW ORDERS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmComp;
