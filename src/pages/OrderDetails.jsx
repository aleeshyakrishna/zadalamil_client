
import Footer from '../components/Home/Footer'
import FooterCopyright from '../components/Home/FooterCopyRight'
import { ComplexNavbar } from '../components/Home/Navbar'
import OrderDetailsComp from '../components/OrderDetails/OrderDetailsComp'

const OrderDetails = () => {
  return (
    <div className='bg-[#f6f6f6]'>
        <ComplexNavbar/>
        <OrderDetailsComp />
        <Footer />
        <FooterCopyright />
      
    </div>
  )
}

export default OrderDetails
