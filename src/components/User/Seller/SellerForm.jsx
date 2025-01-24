import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const SellerForm = () => {
    const [isCameraActive, setIsCameraActive] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [photoCaptured, setPhotoCaptured] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        businessName: "",
        ownerName: "",
        tradeName: "",
        nationalId: "",
        licenseNo: "",
        issueDate: "",
        expiryDate: "",
        email: "",
        phone: "",
        description: "",
        licenseDocument: null,
        idDocument: null,
      });

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setIsCameraActive(true);
        } catch (error) {
            console.error("Error accessing camera:", error);
        }
    };

    const capturePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
            const photo = canvas.toDataURL("image/png");
            setPhotoCaptured(photo);
            setIsCameraActive(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
          setFormData({ ...formData, [name]: files[0] });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
      };

    return (
        <div className="flex items-center justify-center min-h-[80vh] bg-gray-100 py-32 px-8 ">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
                    <h1 className="text-2xl font-bold text-center mb-2">
                        Want to become a seller with Zad Alamil?
                    </h1>
                    <p className="text-center mb-0">
                        Take a few minutes to fill this form
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {[
                            { label: "Name", name: "name" },
                            { label: "Business Name", name: "businessName" },
                            { label: "Owner's Name", name: "ownerName" },
                            { label: "Trade Name", name: "tradeName" },
                            { label: "National ID/Passport No.", name: "nationalId" },
                            { label: "License No.", name: "licenseNo" },
                            { label: "Issue Date", name: "issueDate", type: "date" },
                            { label: "Expiry Date", name: "expiryDate", type: "date" },
                            { label: "Email ID", name: "email", type: "email" },
                            { label: "Phone No.", name: "phone" },
                            { label: "Description", name: "description" },
                        ].map(({ label, name, type = "text" },  index) => (
                            <div key={index} className="mb-4">
                                <label className="block text-gray-700 mb-2">{label}:<strong className="text-red-900">*</strong></label>
                                <input
                                    type={type}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                            </div>
                        ))}

                        {/* {[
                            'License No.',
                            'Issue Date',
                            'Expiry Date',
                            'Email ID',
                            'Phone No.',
                            'Description',
                        ].map((label, index) => (
                            <div key={index} className="mb-4">
                                <label className="block text-gray-700 mb-2">{label}:<strong className="text-red-900">*</strong></label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                            </div>
                        ))} */}

                        {/* <div className="mb-4 col-span-2">
                            <label className="block text-gray-700 mb-2">Upload License Document:<strong className="text-red-900">*</strong></label>
                            <input
                                type="file"
                                accept=".pdf,.jpg,.png"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div className="mb-4 col-span-2">
                            <label className="block text-gray-700 mb-2">Upload National ID/Passport Document:<strong className="text-red-900">*</strong></label>
                            <input
                                type="file"
                                accept=".pdf,.jpg,.png"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div> */}

                    {[
                        { label: "Upload License Document", name: "licenseDocument" },
                        {
                        label: "Upload National ID/Passport Document",
                        name: "idDocument",
                        },
                    ].map(({ label, name }, index) => (
                        <div key={index} className="mb-4 col-span-2">
                        <label className="block text-gray-700 mb-2">
                            {label}:<strong className="text-red-900">*</strong>
                        </label>
                        <input
                            type="file"
                            name={name}
                            accept=".pdf,.jpg,.png"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                        </div>
                    ))}

                        <div className="col-span-2 flex items-center space-x-4 mb-6">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                                {photoCaptured ? (
                                    <img
                                        src={photoCaptured}
                                        alt="Captured"
                                        className="w-full h-full object-cover"
                                    />
                                ) : isCameraActive ? (
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        className="w-full h-full"
                                    ></video>
                                ) : (
                                    <span className="text-gray-500">+</span>
                                )}
                                <canvas ref={canvasRef} className="hidden"></canvas>
                            </div>
                            <div className="flex items-center">
                                {!photoCaptured && (
                                    <button
                                        type="button"
                                        onClick={startCamera}
                                        className="text-gray-700"
                                    >
                                        {isCameraActive ? "Open Camera" : "Activate Camera"}
                                    </button>
                                )}
                                {isCameraActive && !photoCaptured && (
                                    <button
                                        type="button"
                                        onClick={capturePhoto}
                                        className="ml-4 text-gray-700"
                                    >
                                        Take Photo
                                    </button>
                                )}
                                {photoCaptured && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setPhotoCaptured(null);
                                            startCamera();
                                        }}
                                        className="ml-4 text-gray-700"
                                    >
                                        Retake Photo
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="px-6 py-2 border border-gray-400 rounded-lg text-gray-600 hover:bg-gray-200"
                        >
                            CANCEL
                        </button>
                        <Link to='/seller-submit'>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                            >
                                SUBMIT
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SellerForm;
