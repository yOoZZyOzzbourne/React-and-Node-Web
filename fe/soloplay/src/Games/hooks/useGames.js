import { useState, useEffect } from "react";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [developerId, setDeveloperId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [iconError, setIconError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [gameToDelete, setGameToDelete] = useState(null);

  const handleDeleteGame = () => {
    fetch(`http://localhost:3001/api/games/${gameToDelete}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setGames(games.filter((game) => game.id !== gameToDelete));
          setOpenDeleteDialog(false);
          setGameToDelete(null);
        }
      })
      .catch((error) => {
        console.error("Failed to delete game:", error);
      });
  };

  const requestDeleteGame = (gameId) => {
    setOpenDeleteDialog(true);
    setGameToDelete(gameId);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setGameToDelete(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3001/api/games").then((res) => res.json()),
      fetch("http://localhost:3001/api/developers").then((res) => res.json()),
    ])
      .then(([gamesData, developersData]) => {
        setGames(gamesData);
        setDevelopers(developersData);
        setDeveloperId(developersData[0].id);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredGames = games.filter((game) =>
    game?.name?.toLowerCase().includes(searchTerm),
  );

  const handleAddGame = () => {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const icon = document.getElementById("icon").value;

    // Reset all errors
    setNameError(false);
    setDescriptionError(false);
    setIconError(false);

    let isValid = true;
    if (!name) {
      setNameError(true);
      isValid = false;
    }
    if (!description) {
      setDescriptionError(true);
      isValid = false;
    }
    if (!icon) {
      setIconError(true);
      isValid = false;
    }

    if (!isValid) {
      setOpenSnackbar(true);
      return;
    }

    const gameData = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      icon: document.getElementById("icon").value,
      pictures: document.getElementById("pictures").value,
      userImages: document.getElementById("userImages").value,
      video: document.getElementById("video").value,
      developerId: developerId,
    };

    fetch("http://localhost:3001/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
    })
      .then((response) => response.json())
      .then((data) => {
        setGames([...games, data]); // Assuming server sends back the new game
        handleClose();
      })
      .catch((error) => console.error("Failed to add new game:", error));
  };

  return {
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
  };
};

export default useGames;
