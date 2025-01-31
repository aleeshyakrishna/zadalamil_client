import { PropTypes } from 'prop-types';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useEffect, useState } from 'react';

export function AddCategoryModal({ open, setOpen, saveCategory,categories  }) {
    const [categoryName, setCategoryName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        if(open) {
            setErrorMessage("");
            setCategoryName("");
        }
    }, [open])

    const handleSave = () => {
        if (categoryName.trim()) {
            const isCategoryExist = categories.some(
                (cat) => cat.categoryName.toLowerCase() === categoryName.toLocaleLowerCase()
            );
            if (isCategoryExist) {
                setErrorMessage("Category already exists.");
            } else {
                setErrorMessage("");
                setLoading(true); 
                saveCategory(categoryName)
                    .finally(() => {
                        setLoading(false);
                    });
            }
        } else {
            setErrorMessage("Category name is required.");
        }
    };

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
                        <span className="text-xl font-bold">Add Category</span>
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
                    <label className="text-lg font-medium">Category Name</label>
                    <div>
                        <input
                            type="text"
                            placeholder="Category Name"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    {errorMessage && (
                        <div className='text-red-900 mt-2 text-sm'>
                            {errorMessage}
                        </div>
                    )}
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
                        onClick={handleSave}
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="spinner-border animate-spin h-5 w-5 border-t-2 border-white rounded-full" />
                        ) : (
                            <span>SAVE</span>
                        )}
                    </Button>
                </DialogFooter>
            </div>
        </Dialog>
    );
}

AddCategoryModal.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    saveCategory: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
};
