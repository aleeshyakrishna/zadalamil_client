import { PropTypes } from 'prop-types';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function StatusUserModal({ open, setOpen, user, handleStatusChange   }) {
    console.log("User::", user);
    
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
                    <span className="text-xl font-bold">Update Status for {user?.name}</span>
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
                    <h3>Are you sure you want to change the user status?</h3>
                </div>
                <div className="flex justify-between w-full mt-4">
                    <h2>
                        Current status: <strong className='text-blue-900'>{user?.status === "UNBLOCKED" ? "UNBLOCKED" : "BLOCKED"}</strong>
                    </h2>
                </div>
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
                    onClick={() => handleStatusChange(user._id, user.status)}
                >
                    <span>CHANGE</span>
                </Button>
            </DialogFooter>
        </div>
    </Dialog>
  );
}

StatusUserModal.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    user: PropTypes.shape({
        _id: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
    handleStatusChange: PropTypes.func.isRequired, 
};
