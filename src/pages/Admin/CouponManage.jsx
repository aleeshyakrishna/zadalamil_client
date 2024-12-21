import { ComplexNavbar } from "../../components/Admin/Navbar/NavbarComp.jsx"
import { SidebarWithBurgerMenu } from "../../components/Admin/Sidebar/SidebarComp.jsx";
import CouponTable from "../../components/Admin/CouponManagement/CouponManage.jsx";

const CouponManagement = () => {
  return (
    <div>
        <ComplexNavbar />
        <div className="p-3">
            <div className="mt-28 flex">
                <SidebarWithBurgerMenu />
                <CouponTable />
            </div>
        </div>
    </div>
  )
}

export default CouponManagement;
