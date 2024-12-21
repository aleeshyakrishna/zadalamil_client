import Footer from "../components/Home/Footer"
import FooterCopyright from "../components/Home/FooterCopyRight"
import { ComplexNavbar } from "../components/Home/Navbar"
import ProfileComp from "../components/Profile/ProfileComp"

const Profile = () => {
  return (
    <div className='bg-[#f6f6f6]'>
        <ComplexNavbar />
        <ProfileComp />
        <Footer />
        <FooterCopyright />
    </div>
  )
}

export default Profile
