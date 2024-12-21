import { ComplexNavbar } from "../../components/Admin/Navbar/NavbarComp.jsx"
import { SidebarWithBurgerMenu } from "../../components/Admin/Sidebar/SidebarComp.jsx";
import { UserTable } from "../../components/Admin/UserManagement/UserManage.jsx";

const UserManagement = () => {
  return (
    <div>
        <ComplexNavbar />
        <div className="p-3">
            <div className="mt-28 flex">
                <SidebarWithBurgerMenu />
                <UserTable />
            </div>
        </div>
    </div>
  )
}

export default UserManagement;
