
import CheckoutComp from '../components/Checkout/CheckoutComp'
import Footer from '../components/Home/Footer'
import FooterCopyright from '../components/Home/FooterCopyRight'
import { ComplexNavbar } from '../components/Home/Navbar'

const Checkout = () => {
  return (
    <div className='bg-[#f6f6f6]'>
            <ComplexNavbar />
            <CheckoutComp />
            <Footer />
            <FooterCopyright />
    </div>
  )
}

export default Checkout
