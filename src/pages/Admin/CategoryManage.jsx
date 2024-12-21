import { ComplexNavbar } from "../../components/Admin/Navbar/NavbarComp.jsx"
import { SidebarWithBurgerMenu } from "../../components/Admin/Sidebar/SidebarComp.jsx";
import CategoryTable from "../../components/Admin/CategoryManagement/CategoryManage.jsx";

const CategoryManagement = () => {
  return (
    <div>
        <ComplexNavbar />
        <div className="p-3">
            <div className="mt-28 flex">
                <SidebarWithBurgerMenu />
                <CategoryTable />
            </div>
        </div>
    </div>
  )
}

export default CategoryManagement;
