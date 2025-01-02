import Img1 from '../../../assets/images/client1.png';

const VendorDetails = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white shadow-md rounded-lg w-[600px]">
        {/* Header */}
        <div className="flex items-center mb-4">
          <img
            src={Img1}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="ml-4 text-lg font-bold">Akhila Vijayan</h1>
        </div>

        {/* Content */}
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            <span className="font-semibold">Business Name:</span> XYZ
          </p>
          <p>
            <span className="font-semibold">Email ID:</span>{" "}
            <a href="mailto:xyz@gmail.com" className="text-blue-500">
              xyz@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">National ID/Passport No:</span> xya
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +9718897654567
          </p>
          <p>
            <span className="font-semibold">Address:</span> Shop 32, Hamdan
            Center, Ajman
          </p>
          <p>
            <span className="font-semibold">Description:</span> Providing whole
            sales of mobiles.
          </p>
          <p>
            <span className="font-semibold">License No:</span> CN-4568798
          </p>
          <p>
            <span className="font-semibold">Issue Date:</span> 13-12-2024
          </p>
          <p>
            <span className="font-semibold">Expiry Date:</span> 13-12-2026
          </p>
          <p>
            <span className="font-semibold">Owners Name:</span> Akhila Vijayan
          </p>
          <p>
            <span className="font-semibold">Trade Name:</span> Supplies LLC
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Reject
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Make as Vendor
          </button>
        </div>
      </div>
    </div>
  );
}

export default VendorDetails;
