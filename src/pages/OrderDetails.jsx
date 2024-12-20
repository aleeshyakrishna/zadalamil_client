
import Footer from '../components/Footer'
import FooterCopyright from '../components/FooterCopyRight'
import { ComplexNavbar } from '../components/Navbar'
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
