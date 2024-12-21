import Footer from "../components/Home/Footer"
import FooterCopyright from "../components/Home/FooterCopyRight"
import { ComplexNavbar } from "../components/Home/Navbar"
import WishlistComp from "../components/Wishlist/WishlistComp"

const Wishlist = () => {
  return (
    <div className='bg-[#f6f6f6]'>
        <ComplexNavbar />
        <WishlistComp />
        <Footer />
        <FooterCopyright />
    </div>
  )
}

export default Wishlist
