import ShoppingCart from "../components/CartComponent/CartComp"
import Footer from "../components/Footer"
import FooterCopyright from "../components/FooterCopyRight"
import { ComplexNavbar } from "../components/Navbar"


const Cart = () => {
  return (
    <div className='bg-[#f6f6f6]'>
        <ComplexNavbar />
        <ShoppingCart />
        <Footer />
        <FooterCopyright />
    </div>
  )
}

export default Cart
