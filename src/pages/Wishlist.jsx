import Footer from "../components/Footer"
import FooterCopyright from "../components/FooterCopyRight"
import { ComplexNavbar } from "../components/Navbar"
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
