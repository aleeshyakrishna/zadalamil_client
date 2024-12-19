 import Img1 from '../../assets/images/orderTick.png';

const OrderConfirmComp = () => {

  return (
    <section className="bg-gray-100 py-12 p-6 lg:p-52 md:p-44 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-32 border-4 bg-white">
        <div className='flex flex-col items-center'>
            <img
                src={Img1}
                alt="Img"
                className="w-24 h-24 object-cover rounded-lg mb-4 sm:mb-0 items-center"
            />
            <h2 className='font-bold text-green-900 text-3xl mt-4'>ORDER CONFIRMED</h2>
            <h5 className='font-thin text-black text-small mt-14'>Your order is confirmed. You will receive an order confirmation email/SMS shortly 
            with the expect delivery date for your items.</h5>
        </div>
      </div>
      </section>

  )
}

export default OrderConfirmComp
