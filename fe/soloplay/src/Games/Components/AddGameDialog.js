import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Snackbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function AddGameDialog({
  open,
  handleClose,
  onSubmit,
  setNameError,
  setDescriptionError,
  setIconError,
  setOpenSnackbar,
  nameError,
  descriptionError,
  iconError,
  openSnackbar,
  developerId,
  setDeveloperId,
  developers,
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Game</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Game Name"
          type="text"
          fullWidth
          variant="outlined"
          required
          error={nameError}
          helperText={nameError ? "Game Name is required" : ""}
          onChange={() => setNameError(false)}
        />
        <TextField
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          required
          error={descriptionError}
          helperText={descriptionError ? "Description is required" : ""}
          onChange={() => setDescriptionError(false)}
        />
        <TextField
          margin="dense"
          id="icon"
          label="Game Icon URL"
          type="text"
          fullWidth
          variant="outlined"
          required
          error={iconError}
          helperText={iconError ? "Game icon is required" : ""}
          onChange={() => setIconError(false)}
        />
        <TextField
          margin="dense"
          id="pictures"
          label="Pictures (comma-separated URLs)"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="userImages"
          label="User Images (comma-separated URLs)"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="video"
          label="Gameplay Video URL"
          type="text"
          fullWidth
          variant="outlined"
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="developer-label">Developer</InputLabel>
          <Select
            labelId="developer-label"
            id="developerId"
            value={developerId}
            onChange={(e) => setDeveloperId(e.target.value)}
            displayEmpty
          >
            {developers.map((developer) => (
              <MenuItem key={developer.id} value={developer.id}>
                {developer.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message="Please fill in all required fields"
      />
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddGameDialog;
