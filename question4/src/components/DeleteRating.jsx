import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import apiClient from "../services/apiClient";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function DeleteRating({
  username,
  setRating,
  setDlt,
  setDeleteRating,
  deleteRating,
  dltID,
}) {
  const handleClose = () => {
    setDeleteRating(false);
    setRating(true);
  };
  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await apiClient.ratingD({
      id: dltID,
    });
    //successfully deleted from the DB
    if (data) {
      setRating(true);
      setDlt(false);
      window.location.reload();
    }
  }
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={deleteRating}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, color: "red" }}
          id="customized-dialog-title"
        >
          Delete Rating?
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Are you sure you want to delete this rating {username}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Delete
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
