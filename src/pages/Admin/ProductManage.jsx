import { ComplexNavbar } from "../../components/Admin/Navbar/NavbarComp.jsx"
import { SidebarWithBurgerMenu } from "../../components/Admin/Sidebar/SidebarComp.jsx";
import ProductTable from "../../components/Admin/ProductManagement/ProdManComp.jsx";

const DashboardPage = () => {
  return (
    <div>
        <ComplexNavbar />
        <div className="p-3">
            <div className="mt-28 flex">
                <SidebarWithBurgerMenu />
                <ProductTable />
            </div>
        </div>
    </div>
  )
}

export default DashboardPage
