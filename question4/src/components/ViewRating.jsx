import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ViewRating({
  setRating,
  viewRate,
  setViewRate,
  updateValues,
}) {
  const handleClose = () => {
    setViewRate(false);
    setRating(true);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={viewRate}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, color: "red" }}
          id="customized-dialog-title"
        >
          View Rating #{updateValues.id}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom variant="h5" component="div">
            ID: {updateValues.id}
          </Typography>
          <Typography>User: {updateValues.username}</Typography>
          <Typography>Artist: {updateValues.artist}</Typography>
          <Typography>Song: {updateValues.title}</Typography>
          <Typography>Rating: {updateValues.rating}</Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
