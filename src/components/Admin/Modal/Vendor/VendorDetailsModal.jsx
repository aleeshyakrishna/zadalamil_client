import { PropTypes } from 'prop-types';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { MenuStatus } from './MenuStatus';
import Img1 from "../../../../assets/images/client1.png";

export function VendorDetailsModal({ open, setOpen, saveDetails }) {
  return (
    <Dialog
        open={open}
        handler={() => setOpen(false)}
        animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.0, y: -100 },
        }}
        className='border-2 border-gray-300 overflow-auto'
        >
        <div className='p-6'>
            <DialogHeader>
                <div className="flex justify-between w-full">
                    <span className="text-xl font-bold">Vendor Details</span>
                    <Button
                        variant="text"
                        color="black"
                        onClick={() => setOpen(false)}
                        className="p-0 text-sm"
                    >
                        X
                    </Button>
                </div>
            </DialogHeader>
            
            <DialogBody>
                <div className="bg-white  p-8">
                    <div className="flex items-center mb-4">
                      <img
                        src={Img1}
                        alt="Profile"
                        className="w-20 h-20 rounded-full"
                      />
                      <h1 className="ml-4 text-lg font-bold">Akhila Vijayan</h1>
                    </div>
            
                    <div className="text-sm text-gray-700 space-y-3 mt-10">
                        <p>
                            <span className="font-semibold">Name:</span> ABC
                        </p>
                        <p>
                            <span className="font-semibold">Trade Name:</span> Supplies LLC
                        </p>
                        <p>
                            <span className="font-semibold">Email ID:</span>{" "}
                        <a href="mailto:xyz@gmail.com" className="text-blue-500">
                            xyz@gmail.com
                        </a>
                        </p>
                        <p>
                            <span className="font-semibold">National ID/Passport No:</span> E00007730
                        </p>
                        <p>
                            <span className="font-semibold">Phone:</span> +9718897654567
                        </p>
                        <p>
                            <span className="font-semibold">Address:</span> Shop 32, Hamdan
                            Center, Ajman
                        </p>
                        <p>
                            <span className="font-semibold">Description:</span> Providing whole
                            sales of mobiles.
                        </p>
                        <p>
                            <span className="font-semibold">License No:</span> CN-4568798
                        </p>
                        <p>
                            <span className="font-semibold">Issue Date:</span> 13-12-2024
                        </p>
                        <p>
                            <span className="font-semibold">Expiry Date:</span> 13-12-2026
                        </p>
                        <p>
                            <span className="font-semibold">Owners Name:</span> Akhila Vijayan
                        </p>
                        <p>
                            <span className="font-semibold ">Status:</span> <MenuStatus />
                        </p>
                    </div>
                </div>
            </DialogBody>

            <DialogFooter className='mt-5 flex justify-between'>
                <Button
                    variant="text"
                    color="black"
                    onClick={() => setOpen(false)}
                    className="border-2 border-gray-400 px-6 py-2"
                >
                    <span>CANCEL</span>
                </Button>
                <Button
                    className='bg-green-900 text-white px-6 py-2 rounded-md'
                    onClick={saveDetails}
                >
                    <span>SAVE</span>
                </Button>
            </DialogFooter>
        </div>
    </Dialog>
  );
}

VendorDetailsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  saveDetails: PropTypes.func.isRequired,
};
