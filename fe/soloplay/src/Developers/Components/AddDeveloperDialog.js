import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

function AddDeveloperDialog({ open, handleClose, handleSubmit }) {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [nameError, setNameError] = useState(false);

  const onSubmit = () => {
    setNameError(false);

    let isValid = true;
    if (!name) {
      setNameError(true);
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    handleSubmit({ name, icon });
    setName("");
    setIcon("");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Developer</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Developer Name"
          type="text"
          fullWidth
          variant="outlined"
          required
          value={name}
          error={nameError}
          helperText={nameError ? "Developer Name is required" : ""}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="icon"
          label="Developer Image URL"
          type="text"
          fullWidth
          variant="outlined"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddDeveloperDialog;
