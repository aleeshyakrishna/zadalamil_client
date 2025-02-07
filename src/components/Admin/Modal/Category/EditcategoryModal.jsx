import { PropTypes } from 'prop-types';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function EditCategoryModal({ open, setOpen, saveCategory, category, setEditingCategory, existingCategories=[]  }) {
    console.log("category::", category);
    
    
    const handleSave = () => {
        if (!category.name.trim()) {
            setEditingCategory({
                ...category,
                errorMessage: "Category name is required",
            });
            return;
        }
        
        const isDuplicate = existingCategories.some(
            (existingCategory) =>
                existingCategory.name.toLowerCase() === category.name.toLowerCase() && existingCategory._id !== category._id
        );
    
        if (isDuplicate) {
            setEditingCategory({
                ...category,
                errorMessage: "This category name already exists.",
            });
            return;
        }
    
        setEditingCategory({
            ...category,
            errorMessage: "",
        });
    
        saveCategory(category);
    };
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setEditingCategory({
                ...category,
                categoryImg: imageUrl,
            });
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
                    <label className="text-sm font-medium">Category Name</label>
                    <div>
                        <input
                            type="text"
                            value={category?.name || ""}
                                onChange={(e) =>
                                    setEditingCategory({
                                        ...category,
                                        name: e.target.value,
                                        errorMessage: "",
                                    })
                                }
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
                        />

                            {category?.errorMessage && (
                                <p className="text-red-500 text-xs mt-1">
                                    {category.errorMessage}
                                </p>
                            )}

                        <label className="text-sm font-medium">Category Image</label>
                            <div>
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg, image/jpg"
                                    onChange={(e) => handleImageChange(e)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                {category?.categoryImg && (
                                    <div className="mt-8 w-[200px] ">
                                        <img
                                            src={category.categoryImg}
                                            alt="Category"
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                        </div>
                    </div>
                </form>
                </DialogBody>

                <DialogFooter className=' flex justify-between'>
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
    category: PropTypes.object.isRequired,
    setEditingCategory: PropTypes.func.isRequired, 
    existingCategories: PropTypes.array.isRequired,
};
