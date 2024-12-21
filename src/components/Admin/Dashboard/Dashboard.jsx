import StatsCard from './StastsCard.jsx';
import SalesChart from './SalesChart.jsx';
import CategoryChart from './CategoryChart.jsx';
import { Button } from '@material-tailwind/react';
import { DocumentIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon, CurrencyDollarIcon, UserGroupIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

export default function Dashboard() {
  return (
    <div className="p-6 m-20 bg-gray-50 min-h-screen w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button className="flex items-center gap-2 bg-blue-100 text-blue-700">
          <DocumentIcon className="w-5 h-5"/> Sales Report
        </Button>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatsCard title="Sales" value="6789" icon={ChartBarIcon} />
      <StatsCard title="Revenue" value="AED 78965.00" icon={CurrencyDollarIcon} />
      <StatsCard title="Users" value="256789" icon={UserGroupIcon} />
      <StatsCard title="Returns" value="1678" icon={ArrowPathIcon} />
    </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <CategoryChart />
      </div>
    </div>
  );
}
