import Footer from "../components/Footer"
import FooterCopyright from "../components/FooterCopyRight"
import BannerMob from "../components/Mobiles/BannerMob"
import Collections from "../components/Mobiles/Collections"
import { ComplexNavbar } from "../components/Navbar"


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
