import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteDialog({
  setData,
  setOpenDelete,
  record,
  open,
  data,
  setUpdate,
}) {
  const handleClick = () => {
    if (!!record && !!data) {
      const array = data.filter((item) => item.title !== record.title);
      setData(array);
      setUpdate(true);
      setOpenDelete(false);
    }
  };
  const handleClose = () => {
    setOpenDelete(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Delete Google's location ?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location.
          Do you want 
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClick} autoFocus variant="outlined">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
