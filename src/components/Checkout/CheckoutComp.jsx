import { useState } from "react";

const CheckoutComp = () => {
  const [selectedAddress, setSelectedAddress] = useState("Akhila");
  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");

  return (
    <section>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-36  md:p-36 lg:p-56">
      {/* Left Section */}
      <div className="md:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
          <div className="space-y-4">
            {[
              { name: "Akhila Vijayan", address: "Kunnathuveettil House, Thomannkuthu PO, Kerala - 685581" },
              { name: "Sheela Vijayan", address: "Kunnathuveettil House, Thomannkuthu PO, Kerala - 685581" },
            ].map((addr, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 border rounded-lg ${
                  selectedAddress === addr.name ? "border-red-900" : "border-gray-300"
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
                <div className="space-x-2">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="text-red-900 hover:underline">Delete</button>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 px-4 py-2 bg-red-900 text-white rounded-lg">+ ADD ADDRESS</button>
        </div>

        {/* Payment Options */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Payment Options</h2>
          <div className="space-y-4">
            {["UPI", "Credit Card", "Debit Card", "Net Banking", "Cash On Delivery", "Paypal"].map(
              (method, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                    className="h-5 w-5 text-red-900"
                  />
                  <span>{method}</span>
                </label>
              )
            )}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Order Details</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Apple iPhone 15 Pro Max | Storage 1TB</span>
            <span>AED 1,899.00</span>
          </div>
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>AED 2,889.00</span>
          </div>
          <div className="flex justify-between">
            <span>Discounts</span>
            <span>- AED 200.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>AED 2,499.00</span>
          </div>
        </div>
        <button className="mt-16 w-full px-4 py-2 bg-red-900 text-white rounded-lg">CONTINUE</button>
      </div>
    </div>
    </section>
  );
};

export default CheckoutComp;