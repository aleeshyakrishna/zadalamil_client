import { PropTypes } from 'prop-types';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import { checkCategoryNacheckCategoryNameExists } from '../../../../Utils/categoryService';

export function EditCategoryModal({ open, setOpen, saveCategory, categoryData, token  }) {
    const [categoryName, setCategoryName] = useState("");
    const [validationMessage, setValidationMessage] = useState("");

    useEffect(() => {
        // console.log("categoryData:", categoryData);
        if (categoryData) {
          setCategoryName(categoryData.categoryName || "");
        }
      }, [categoryData]);

    const handleCategoryNameChange = async (e) => {
        const newName = e.target.value;
        setCategoryName(newName);
        setValidationMessage("");

        if (token) {
            try {
                const {  message } = await checkCategoryNacheckCategoryNameExists(newName, token);
                setValidationMessage(message); 
            } catch (error) {
                setValidationMessage(error.message); 
            }
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
                        <span className="text-xl font-bold">Edit Category</span>
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
                            value={categoryName}  
                            onChange={handleCategoryNameChange} 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        {validationMessage && (
                            <p className={`text-sm mt-2 ${validationMessage.includes("available") ? "text-green-500" : "text-red-500"}`}>
                                {validationMessage}
                            </p>
                        )}
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
                        onClick={() => saveCategory(categoryName)}
                    >
                        <span>UPDATE</span>
                    </Button>
                </DialogFooter>
            </div>
        </Dialog>
    );
}

EditCategoryModal.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    saveCategory: PropTypes.func.isRequired,
    categoryData: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
};
