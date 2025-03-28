import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Input,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";

  const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Delivered",
        value: "delivered",
    },
    {
        label: "Pending",
        value: "pending",
    },
    {
        label: "Cancelled",
        value: "cancelled",
    },
    {
        label: "OnTransit",
        value: "onTransit",
    },
    {
        label: "Packing",
        value: "packing",
    },
];

   
const TABLE_HEAD = ["No", "Order ID", "Item", "Fullfillment", "Date", "Total","Payment", "Details"];
   
const TABLE_ROWS = [
    {
      orderId: "TFY8779HHJ8",
      item: "iPhone",
      fullfillment: "delivered",
      total: "6529.00",
      payment: "paid",
      date: "23/04/18",
    },
    {
      orderId: "TFY8779HHJ8",
      item: "iPhone",
      fullfillment: "packing",
      total: "6529.00",
      payment: "paid",
      date: "23/04/18",
    },
    {
      orderId: "TFY8779HHJ8",
      item: "iPhone",
      fullfillment: "cancelled",
      total: "6529.00",
      payment: "unpaid",
      date: "23/04/18",
    },
    {
      orderId: "TFY8779HHJ8",
      item: "iPhone",
      fullfillment: "pending",
      total: "6529.00",
      payment: "unpaid",
      date: "23/04/18",
    },
    {
      orderId: "TFY8779HHJ8",
      item: "iPhone",
      fullfillment: "pending",
      total: "6529.00",
      payment: "unpaid",
      date: "23/04/18",
    },
];
   
export function OrderVendorTable() {
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                        All Orders
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                        See information about all orders
                    </Typography>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row"></div>
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
                    ({  orderId, item,fullfillment, payment, date, total }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
        
                        return (
                        <tr key={orderId}>
                            <td className="py-3 px-4 text-center">{index + 1}</td>
                            <td className={classes}>
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-bold"
                                >
                                    {orderId}
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
                                {item}
                                </Typography>
                            </div>
                            </td>
                            
                            <td className={classes}>
                                <div className="w-max">
                                    <Chip
                                    variant="ghost"
                                    size="sm"
                                    className="w-24 text-center"
                                    value={fullfillment}
                                    color={
                                        fullfillment === "delivered"
                                        ? "green"
                                        : fullfillment === "cancelled"
                                        ? "red"
                                        : fullfillment === "packing"
                                        ? "orange"
                                        : fullfillment === "pending"
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
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                            >
                                {total}
                            </Typography>
                            </td>

                            <td className={classes}>
                            <div className="w-max">
                                <Chip
                                variant="filled"
                                size="md"
                                value={payment === "paid" ? "paid" : "unpaid"}
                                color={payment === "paid" ? "green" : "red"}
                                className="w-20 items-center justify-center cursor-pointer"
                                />
                            </div>
                            </td>

                            <td className={classes}>
                                <Link to='/vendor/vendor-orderDetails'>
                                    <button 
                                        className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-900">
                                            View Details
                                    </button>
                                </Link>
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