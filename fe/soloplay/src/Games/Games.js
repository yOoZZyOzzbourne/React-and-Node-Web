import { Box, Grid, TextField, Button } from "@mui/material";
import DeleteConfirmationDialog from "../Utils/DeleteConfirmationDialog.js";
import useGames from "./hooks/useGames"; // Adjust the path as necessary
import AddGameDialog from "./Components/AddGameDialog"; // Adjust the path as necessary
import GameCard from "./Components/GameCard";

function Games() {
  const {
    developers,
    developerId,
    openDeleteDialog,
    openSnackbar,
    requestDeleteGame,
    handleDeleteGame,
    handleCloseDeleteDialog,
    setOpenSnackbar,
    handleSearchChange,
    filteredGames,
    handleAddGame,
    handleClickOpen,
    handleClose,
    open,
    nameError,
    descriptionError,
    iconError,
    setNameError,
    searchTerm,
    setDescriptionError,
    setIconError,
    setDeveloperId,
  } = useGames();

  return (
    <Box p={3}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        sx={{ mb: 2 }}
      >
        + Add New Game
      </Button>
      <TextField
        fullWidth
        label="Search Games"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ mb: 2 }}
      />
      <Grid container spacing={2}>
        {filteredGames.map((game) => (
          <Grid item key={game.id} xs={12} sm={6} md={4} lg={3}>
            <GameCard
              game={game}
              developers={developers}
              requestDeleteGame={requestDeleteGame}
            />
          </Grid>
        ))}
      </Grid>
      <DeleteConfirmationDialog
        open={openDeleteDialog}
        handleClose={handleCloseDeleteDialog}
        handleConfirm={handleDeleteGame}
      />
      <AddGameDialog
        open={open}
        handleClose={handleClose}
        onSubmit={handleAddGame}
        setNameError={setNameError}
        setDescriptionError={setDescriptionError}
        setIconError={setIconError}
        setOpenSnackbar={setOpenSnackbar}
        nameError={nameError}
        descriptionError={descriptionError}
        iconError={iconError}
        openSnackbar={openSnackbar}
        developerId={developerId}
        setDeveloperId={setDeveloperId}
        developers={developers}
      />
    </Box>
  );
}

export default Games;
