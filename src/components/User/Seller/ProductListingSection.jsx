

const ProductListingSection = () => {
  return (
    <div className="bg-blue-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-800">Product Listing</h2>
        {/* Description */}
        <p className="text-gray-700 mt-4">
          A listing is the process of registering your product on the Zad Alamil platform, making it available for customers to view and purchase. It involves creating a detailed product page with essential information such as the product title, description, images, pricing, and other relevant details.
        </p>
        <p className="text-gray-700 mt-4">
          A clear and well-prepared listing helps attract customers and drive sales. Providing accurate information and high-quality images can increase your product’s visibility on the platform by up to 15%.
        </p>
        {/* Listing Options */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-blue-700">
            Listing on Zad Alamil can be done in 2 different ways:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Product Bulk Import Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                YouTube Video
              </div>
              <h4 className="text-lg font-semibold text-blue-800 mt-4">1. Product Bulk Import Using CSV File</h4>
              <p className="text-gray-600 mt-2">
                Download a sample CSV file from your Zad Alamil vendor dashboard. Fill out the file and upload it to the platform. This allows you to add multiple products at once, saving time by avoiding manual entry for each product.
              </p>
            </div>
            {/* Product Manual Upload Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                YouTube Video
              </div>
              <h4 className="text-lg font-semibold text-blue-800 mt-4">2. Product Manual Upload</h4>
              <p className="text-gray-600 mt-2">
                Upload your products individually using the form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingSection;
