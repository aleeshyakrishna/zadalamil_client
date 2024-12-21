import Footer from "../components/Home/Footer"
import FooterCopyright from "../components/Home/FooterCopyRight"
import { ComplexNavbar } from "../components/Home/Navbar"
import NewArrivalsComp from "../components/NewArrivals/NewArrivalsComp"

const NewArrivals = () => {
  return (
    <div className='bg-[#f6f6f6]'>
        <ComplexNavbar />
        <NewArrivalsComp />
        <Footer />
        <FooterCopyright />
    </div>
  )
}

export default NewArrivals
