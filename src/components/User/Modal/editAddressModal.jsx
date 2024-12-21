import { PropTypes } from 'prop-types';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function EditAddressModal({ open, setOpen, saveAddress }) {
  return (
    <Dialog
      open={open}
      handler={() => setOpen(false)}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.0, y: -100 },
      }}
      className='border-2 border-gray-300'
    >
      <div className='p-6'>
        <DialogHeader>
          <div className="flex justify-between w-full">
            <span className="text-xl font-bold">Update Address</span>
            <Button
              variant="text"
              color="black"
              onClick={() => setOpen(false)}
              className="p-0 text-sm"
            >
              <span className="material-icons">x</span>
            </Button>
          </div>
        </DialogHeader>
        <DialogBody>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Pin Code"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Mobile Number with code"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <input
              type="text"
              placeholder="Locality"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="District"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="State"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </form>
        </DialogBody>
        <DialogFooter className='mt-5 flex justify-between'>
          <Button
            variant="text"
            color="black"
            onClick={() => setOpen(false)}
            className="border-2 border-black px-6 py-2"
          >
            <span>CANCEL</span>
          </Button>
          <Button
            className='bg-red-900 text-white px-6 py-2'
            onClick={saveAddress}
          >
            <span>UPDATE</span>
          </Button>
        </DialogFooter>
      </div>
    </Dialog>
  );
}

EditAddressModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  saveAddress: PropTypes.func.isRequired,
};