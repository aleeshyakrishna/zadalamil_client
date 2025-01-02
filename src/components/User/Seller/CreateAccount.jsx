

const CreateAccount = () => {
  return (
    <div className="bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
        {/* Description */}
        <p className="text-gray-600 mt-4">
          Creating your Zad Alamil seller account is a quick process, taking less than 10 minutes, and kindly fill the application form.
          Follow the checklist to ensure a seamless account creation experience. By having your documents ready, you can streamline the
          account creation process and get started on Zad Alamil as an online seller in no time.
        </p>
        {/* Categories Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Categories to sell through Zad Alamil
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
            <p>Mobiles & Tablets</p>
            <p>Wearables & Smart Watches</p>
            <p>Personal Care</p>
            <p>Tv & Audio</p>
            <p>Appliances</p>
            <p>Computing</p>
            <p>Gaming</p>
            <p>Accessories</p>
            <p>Routers</p>
            <p>Photography</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
