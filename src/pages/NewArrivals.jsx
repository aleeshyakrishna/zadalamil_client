import Footer from "../components/Footer"
import FooterCopyright from "../components/FooterCopyRight"
import { ComplexNavbar } from "../components/Navbar"
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
