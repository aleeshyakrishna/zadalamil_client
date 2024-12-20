import { useState } from "react";
import { AddAddressModal } from "../Modal/addAddressModal";
import { EditAddressModal } from "../Modal/editAddressModal";
import { ConfirmEditAddressModal } from "../Modal/editAddressConfirmModal";
import { DeleteAddressModal } from "../Modal/deleteAddressModal";
import { Link } from "react-router-dom";

const CheckoutComp = () => {
  const [selectedAddress, setSelectedAddress] = useState("Akhila");
  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");
  const [isModalOpenAddAddress, setIsModalOpenAddAddress] = useState(false);
  const [isModalOpenEditAddress, setIsModalOpenEditAddress] = useState(false);
  const [isModalOpenConfirmEdit, setIsModalOpenConfirmEdit] = useState(false);
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

  const handleSaveAddress = () => {
    console.log("Address saved");
    setIsModalOpenAddAddress(false); 
  };

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

  const handleDeleteAddress = () => {
    console.log("Address deleted");
    setIsModalOpenDeleteAddress(false); 
  };

  return (
    <section>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-36  md:p-36 lg:p-56">
      {/* Left Section */}
      <div className="md:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
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
          <button
              className="mt-4 px-4 py-2 bg-red-900 text-white rounded-lg"
              onClick={() => setIsModalOpenAddAddress(true)}
            >
              + ADD ADDRESS
            </button>
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
        <Link to='/order-confirm'><button className="mt-16 w-full px-4 py-2 bg-red-900 text-white rounded-lg">CONTINUE</button></Link>
      </div>
    </div>

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

    </section>
  );
};

export default CheckoutComp;