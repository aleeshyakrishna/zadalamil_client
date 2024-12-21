
import Footer from '../components/Home/Footer'
import FooterCopyright from '../components/Home/FooterCopyRight'
import MyOrdersComp from '../components/MyOrders/MyOrdersComp'
import { ComplexNavbar } from '../components/Home/Navbar'

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
