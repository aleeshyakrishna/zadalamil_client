
import Footer from '../components/Footer'
import FooterCopyright from '../components/FooterCopyRight'
import MyOrdersComp from '../components/MyOrders/MyOrdersComp'
import { ComplexNavbar } from '../components/Navbar'

const MyOrders = () => {
  return (
    <div className='bg-[#f6f6f6]'>
        <ComplexNavbar />
        <MyOrdersComp />
        <Footer />
        <FooterCopyright/>
    </div>
  )
}

export default MyOrders
