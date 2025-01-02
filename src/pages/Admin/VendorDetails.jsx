import { ComplexNavbar } from "../../components/Admin/Navbar/NavbarComp.jsx"
import { SidebarWithBurgerMenu } from "../../components/Admin/Sidebar/SidebarComp.jsx";
import VendorDetails from "../../components/Admin/VendorManagement/VendorDetails.jsx";

const VendorDetailsPage = () => {
  return (
    <div>
        <ComplexNavbar />
        <div className="p-3">
            <div className="mt-28 flex">
                <div className="fixed top-30 left-0 h-screen w-20 p-4  text-white z-50">
                    <SidebarWithBurgerMenu />
                </div>

                <div className="ml-16 p-4 w-full -mt-20 lg:-mt-5 xl:-mt-0">
                <VendorDetails />
                </div>
            </div>
        </div>
    </div>
  )
}

export default VendorDetailsPage;
