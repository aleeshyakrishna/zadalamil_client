import SellerBanner from "../../components/User/Seller/SellerBanner";
import { NavbarWithMegaMenu } from "../../components/User/Seller/SellerNavbar"
import WhySellOnZad from "../../components/User/Seller/WhySellOnZad";


const SellerPage = () => {
  return (
    <div className='bg-[#f6f6f6]'>
        <NavbarWithMegaMenu />
        <SellerBanner />
        <WhySellOnZad />
    </div>
  )
}

export default SellerPage;
