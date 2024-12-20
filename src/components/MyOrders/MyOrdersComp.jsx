import Img1 from "../../assets/images/mob1.png";
import { MenuDefault } from "../Menu/Menu";

const MyOrdersComp = () => {
  const orders = [
    {
      id: "45AHGFTJJ78",
      name: "LG UM670H 43\" UHD 4K Commercial Smart TV 43UM670H0UA B&H",
      status: "Pending",
      statusColor: "bg-yellow-700",
    },
    {
      id: "45AHGFTJJ78",
      name: "LG UM670H 43\" UHD 4K Commercial Smart TV 43UM670H0UA B&H",
      status: "Delivered",
      statusColor: "bg-green-700",
    },
    {
      id: "45AHGFTJJ78",
      name: "LG UM670H 43\" UHD 4K Commercial Smart TV 43UM670H0UA B&H",
      status: "Returned",
      statusColor: "bg-black text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 lg:p-16">
      <div className="max-w-7xl mx-auto mt-32 md:mt-32 lg:mt-40">
        <h1 className="text-xl md:text-2xl font-bold mb-6 text-center">MY ORDERS</h1>
        <div className="flex justify-between items-center mb-4">
          <MenuDefault />
        </div>
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center md:justify-between"
            >
              <div className="flex items-center w-full md:w-auto">
                <img
                  src={Img1}
                  alt="Product"
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h2 className="font-semibold text-sm md:text-base">{order.name}</h2>
                  <p className="text-xs md:text-sm text-gray-500 mt-2">
                    ORDER ID: {order.id}
                  </p>
                  <a
                    href="/order-details"
                    className="text-red-900 font-medium text-xs md:text-sm block mt-2"
                  >
                    View Details
                  </a>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-4 md:mt-0">
                <span
                  className={`px-3 py-2 text-center rounded-lg ${order.statusColor} text-white font-semibold text-xs md:text-sm`}
                >
                  {order.status}
                </span>
                <button className="px-3 py-2 rounded-lg bg-cyan-600 font-semibold text-white text-xs md:text-sm">
                  Cancel
                </button>
                <button className="px-3 py-2 rounded-lg bg-gray-300 text-gray-600 font-semibold text-xs md:text-sm">
                  Return
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrdersComp;
