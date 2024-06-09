import { Box, Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddDeveloperDialog from "./Components/AddDeveloperDialog.js";
import useDevelopers from "./hooks/useDevelopers.js";
import DeveloperCard from "./Components/DeveloperCard.js";

function Developers() {
  const {
    developers,
    openDeleteDialog,
    isDialogOpen,
    requestDeleteDeveloper,
    handleDelete,
    handleClose,
    handleAddDeveloper,
    setDialogOpen,
  } = useDevelopers();

  return (
    <Box p={3} display="flex" flexWrap="wrap" gap={3} position="relative">
      <IconButton
        color="primary"
        onClick={() => setDialogOpen(true)}
        sx={{
          position: "absolute",
          right: 16,
          top: 16,
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        <AddIcon />
      </IconButton>
      <AddDeveloperDialog
        open={isDialogOpen}
        handleClose={() => setDialogOpen(false)}
        handleSubmit={handleAddDeveloper}
      />
      <AddDeveloperDialog
        open={isDialogOpen}
        handleClose={() => setDialogOpen(false)}
        handleSubmit={handleAddDeveloper}
      />
      <Grid container spacing={2}>
        {developers.map((developer) => (
          <Grid item key={developer.id} xs={12} sm={6} md={4} lg={3}>
            <DeveloperCard
              developer={developer}
              requestDeleteDeveloper={requestDeleteDeveloper}
              openDeleteDialog={openDeleteDialog}
              handleClose={handleClose}
              handleDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Developers;
