import { PropTypes } from 'prop-types';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function AddProductVendorModal({ open, setOpen, saveProduct }) {
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
                <span className="text-xl font-bold">Add Product</span>
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
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <label className="text-lg font-medium">1. General Info</label>
                <div>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <textarea
                        placeholder="Description"
                        rows="3"
                        className="w-full px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>
                    </div>

                    <label className="text-lg font-medium">2. Stocking</label>
                    <input
                    type="text"
                    placeholder="Stock"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <label className="text-lg font-medium">3. Prizing</label>
                    <input
                    type="text"
                    placeholder="Price"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <label className="text-lg font-medium">4. Category</label>
                    <input
                    type="text"
                    placeholder="Category"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <label className="text-lg font-medium">5. Media</label>
                    <input
                    type="file"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <label className="text-lg font-medium">6. Color</label>
                    <input
                    type="text"
                    placeholder="Color"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
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
                    onClick={saveProduct}
                >
                    <span>SAVE</span>
                </Button>
            </DialogFooter>
        </div>
    </Dialog>
  );
}

AddProductVendorModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  saveProduct: PropTypes.func.isRequired,
};
