import SellerBanner from "../../components/User/Seller/SellerBanner";
import { NavbarWithMegaMenu } from "../../components/User/Seller/SellerNavbar"


const SellerPage = () => {
  return (
    <div className='bg-[#f6f6f6]'>
        <NavbarWithMegaMenu />
        <SellerBanner />
    </div>
  )
}

export default SellerPage;
