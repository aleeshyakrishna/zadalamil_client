import { ComplexNavbar } from "../../components/Admin/Navbar/NavbarComp.jsx"
import { SidebarWithBurgerMenu } from "../../components/Admin/Sidebar/SidebarComp.jsx";
import BannerTable from "../../components/Admin/Banner/BannerManage.jsx";

const BannerManagement = () => {
  return (
    <div>
        <ComplexNavbar />
        <div className="p-3">
            <div className="mt-28 flex">
                <SidebarWithBurgerMenu />
                <BannerTable />
            </div>
        </div>
    </div>
  )
}

export default BannerManagement;
