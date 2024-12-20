
import CheckoutComp from '../components/Checkout/CheckoutComp'
import Footer from '../components/Footer'
import FooterCopyright from '../components/FooterCopyRight'
import { ComplexNavbar } from '../components/Navbar'

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
