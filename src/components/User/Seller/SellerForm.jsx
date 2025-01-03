import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const SellerForm = () => {
    const [isCameraActive, setIsCameraActive] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [photoCaptured, setPhotoCaptured] = useState(false);

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
        const context = canvasRef.current.getContext("2d");
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        setPhotoCaptured(true);
        }
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

                <form>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {[
                        'Name',
                        'Business Name',
                        "Owner's Name",
                        'Trade Name',
                        'National ID/Passport No.',
                        ].map((label, index) => (
                        <div key={index} className="mb-4">
                            <label className="block text-gray-700 mb-2">{label}:</label>
                            <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        ))}

                        {[
                        'License No.',
                        'Issue Date',
                        'Expiry Date',
                        'Email ID',
                        'Phone No.',
                        'Description',
                        ].map((label, index) => (
                        <div key={index} className="mb-4">
                            <label className="block text-gray-700 mb-2">{label}:</label>
                            <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        ))}

                        <div className="col-span-2 flex items-center space-x-4 mb-6">
                            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                                {isCameraActive ? (
                                <>
                                    <video
                                    ref={videoRef}
                                    autoPlay
                                    className="w-full h-full rounded-full"
                                    ></video>
                                    <canvas ref={canvasRef} className="hidden"></canvas>
                                </>
                                ) : (
                                <span className="text-gray-500">+</span>
                                )}
                            </div>
                            <div className="flex items-center cursor-pointer">
                                <button
                                type="button"
                                onClick={startCamera}
                                className="text-gray-700"
                                >
                                {isCameraActive ? "Capture Photo" : "Activate Camera"}
                                </button>
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
                                <div className="mt-2">
                                    <span className="text-green-600">Photo captured!</span>
                                </div>
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
