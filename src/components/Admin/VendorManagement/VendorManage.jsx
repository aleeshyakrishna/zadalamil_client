import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TrashIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

 
const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Approved",
    value: "approved",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
  {
    label: "Ongoing",
    value: "ongoing",
  },
  {
    label: "Pending",
    value: "pending",
  },
];
 
const TABLE_HEAD = ["No", "Vendor", "Company Name", "Status", "Date","Action", "Details", "Delete"];
 
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@huawei.com",
    companyName: "Huawei",
    LicenseNumber: "CN-4568798",
    status: "approved",
    date: "23/04/18",
    action: true,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@huawei.com",
    companyName: "Huawei",
    LicenseNumber: "CN-4568798",
    status: "ongoing",
    date: "23/04/18",
    action: true,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@huawei.com",
    companyName: "Huawei",
    LicenseNumber: "CN-4568798",
    status: "pending",
    date: "19/09/17",
    action: false,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@huawei.com",
    companyName: "Huawei",
    LicenseNumber: "CN-4568798",
    status: "approved",
    date: "24/12/08",
    action: true,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@huawei.com",
    companyName: "Huawei",
    LicenseNumber: "CN-4568798",
    status: "rejected",
    date: "04/10/21",
    action: false,
  },
];
 
export function VendorManage() {
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Vendor Management
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all vendors
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Vendor
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ img, name, email,companyName, LicenseNumber, status, action, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className="py-3 px-4 text-center">{index + 1}</td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {companyName}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {LicenseNumber}
                        </Typography>
                      </div>
                    </td>
                    
                    <td className={classes}>
                        <div className="w-max">
                            <Chip
                            variant="ghost"
                            size="sm"
                            value={status}
                            color={
                                status === "approved"
                                ? "green"
                                : status === "rejected"
                                ? "red"
                                : status === "ongoing"
                                ? "orange"
                                : status === "pending"
                                ? "blue"
                                : "blue-gray"
                            }
                            />
                        </div>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="filled"
                          size="md"
                          value={action ? "block" : "unblock"}
                          color={action ? "green" : "red"}
                          className="w-20 items-center justify-center cursor-pointer"
                        />
                      </div>
                    </td>

                    <td className={classes}>
                      <Link to='/admin/vendor-details'>
                       <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-900">View Details</button>
                      </Link>

                    </td>
                    <td className={classes}>
                    <Tooltip content="Delete Vendor">
                        <IconButton variant="text">
                          <TrashIcon className="h-4 w-4 text-red-800" />
                        </IconButton>
                      </Tooltip> 
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}