import { useState, useEffect } from "react";

const useDevelopers = () => {
  const [developers, setDevelopers] = useState([]);
  const [currentDeveloperId, setCurrentDeveloperId] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const fetchDevelopers = () => {
    fetch("http://localhost:3001/api/developers")
      .then((response) => response.json())
      .then((data) => setDevelopers(data))
      .catch((error) => console.error("Failed to fetch developers:", error));
  };

  const requestDeleteDeveloper = (developerId) => {
    setOpenDeleteDialog(true);
    setCurrentDeveloperId(developerId);
  };

  const handleDelete = () => {
    fetch(`http://localhost:3001/api/developers/${currentDeveloperId}`, {
      method: "DELETE",
    })
      .then(() => {
        setDevelopers(
          developers.filter((dev) => dev.id !== currentDeveloperId),
        );
        setOpenDeleteDialog(false);
      })
      .catch((error) => {
        console.error("Failed to delete developer:", error);
        setOpenDeleteDialog(false);
      });
  };

  const handleClose = () => {
    setOpenDeleteDialog(false);
  };

  const handleAddDeveloper = (developer) => {
    fetch("http://localhost:3001/api/developers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(developer),
    })
      .then((response) => response.json())
      .then(() => {
        setDialogOpen(false);
        fetchDevelopers();
      })
      .catch((error) => console.error("Error adding developer:", error));
  };

  useEffect(() => {
    fetchDevelopers();
  }, []);

  return {
    developers,
    openDeleteDialog,
    isDialogOpen,
    requestDeleteDeveloper,
    handleDelete,
    handleClose,
    handleAddDeveloper,
    setDialogOpen,
  };
};

export default useDevelopers;
