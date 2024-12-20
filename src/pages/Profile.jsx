import Footer from "../components/Footer"
import FooterCopyright from "../components/FooterCopyRight"
import { ComplexNavbar } from "../components/Navbar"
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
