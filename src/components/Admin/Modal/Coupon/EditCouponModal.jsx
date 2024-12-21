import { PropTypes } from 'prop-types';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function EditCouponModal({ open, setOpen, saveCoupon }) {
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
                    <span className="text-xl font-bold">Edit Coupon</span>
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
                <form className="items-center">
                    <label className="text-lg font-medium">Coupon Code</label>
                    <div className='mb-5'>
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    <label className="text-lg font-medium">Discount</label>
                    <div className='mb-5'>
                        <input
                            type="text"
                            placeholder="Discount"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    <label className="text-lg font-medium">Expiry Date</label>
                    <div>
                        <input
                            type="text"
                            placeholder="Expiry Date"
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
                    className="border-2 border-gray-400 px-6 py-2"
                >
                    <span>CANCEL</span>
                </Button>
                <Button
                    className='bg-green-900 text-white px-6 py-2 rounded-md'
                    onClick={saveCoupon}
                >
                    <span>SAVE</span>
                </Button>
            </DialogFooter>
        </div>
    </Dialog>
  );
}

EditCouponModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  saveCoupon: PropTypes.func.isRequired,
};
