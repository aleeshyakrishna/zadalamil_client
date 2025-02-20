import { PropTypes } from 'prop-types';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function ConfirmEditCategoryVendorModal({ open, setOpen, saveCategory }) {
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
                    <span className="text-xl font-bold">Confirm Update Category</span>
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
                <div className="flex justify-between w-full">
                    <h3>Are you sure you want to update the category?</h3>
                </div>
            </DialogBody>
            <DialogFooter className='mt-5 flex justify-between'>
                <Button
                    variant="text"
                    color="black"
                    onClick={() => setOpen(false)}
                    className="border-2 border-black px-6 py-2"
                >
                    <span>NO</span>
                </Button>
                <Button
                    className='bg-green-900 text-white px-6 py-2'
                    onClick={saveCategory}
                >
                    <span>YES</span>
                </Button>
            </DialogFooter>
        </div>
    </Dialog>
  );
}

ConfirmEditCategoryVendorModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  saveCategory: PropTypes.func.isRequired,
};