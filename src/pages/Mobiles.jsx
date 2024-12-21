import Footer from "../components/Home/Footer"
import FooterCopyright from "../components/Home/FooterCopyRight"
import BannerMob from "../components/Mobiles/BannerMob"
import Collections from "../components/Mobiles/Collections"
import { ComplexNavbar } from "../components/Home/Navbar"


const Mobiles = () => {
  return (
    <div className='bg-[#f6f6f6]'>
            <ComplexNavbar />
            <BannerMob />
            <Collections/>
            <Footer />
            <FooterCopyright />
    </div>
  )
}

export default Mobiles
