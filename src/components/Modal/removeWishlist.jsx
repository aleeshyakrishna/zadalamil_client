import { PropTypes } from 'prop-types';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function WishlistRemove({ open, setOpen, removeFromWishlist }) {
  return (
    <Dialog
      open={open}
      handler={() => setOpen(false)}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.0, y: -100 },
      }}
    >
      <DialogHeader>Confirm Wishlist Removal</DialogHeader>
      <DialogBody>
        Are you sure you want to remove this item from your wishlist? This
        action cannot be undone.
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={() => setOpen(false)}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={removeFromWishlist}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

WishlistRemove.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  removeFromWishlist: PropTypes.func.isRequired,
};