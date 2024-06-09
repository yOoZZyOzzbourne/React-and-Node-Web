import React from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

function DescriptionEditor({
  editMode,
  description,
  setEditMode,
  handleSave,
  setEditedDescription,
  editedDescription,
}) {
  return (
    <Box
      sx={{
        width: "100%", // Ensures the Box takes the full width of its parent container
        maxWidth: 800, // Optional: Adjust this value based on your design needs
        m: "auto", // Centers the box in the parent
        p: 2, // Adds padding around the content
      }}
    >
      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        sx={{
          width: "100%", // Ensure Typography takes the full width
          mb: 2, // Adds margin below the Typography
        }}
      >
        {editMode ? (
          <TextField
            fullWidth
            variant="outlined"
            multiline
            rows={10}
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            sx={{
              mt: 2, // Adds margin top
              mx: "auto", // Centers the TextField
              maxWidth: "100%", // Ensures it doesn't overflow its container
            }}
          />
        ) : (
          description
        )}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 2,
          width: "100%", // Ensures the Buttons Box takes full width of its parent
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={
            editMode
              ? handleSave
              : () => {
                  setEditMode(true);
                  setEditedDescription(description);
                }
          }
        >
          {editMode ? "Save" : "Edit"}
        </Button>
        {editMode && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default DescriptionEditor;
