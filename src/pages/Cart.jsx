import ShoppingCart from "../components/CartComponent/CartComp"
import Footer from "../components/Home/Footer"
import FooterCopyright from "../components/Home/FooterCopyRight"
import { ComplexNavbar } from "../components/Home/Navbar"


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
