import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { slugify } from "../../Utils/utils";

const useGameDetail = () => {
  const { gameSlug } = useParams();
  const [game, setGame] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 2500)}s`;
    }
  };

  const fetchGameDetail = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/games`);
      const games = await response.json();
      const foundGame = games.find((g) => slugify(g.name) === gameSlug);
      setGame(foundGame);
    } catch (error) {
      console.error("Error fetching game detail:", error);
    }
  };

  useEffect(() => {
    fetchGameDetail();
  });

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = () => {
    fetch(`http://localhost:3001/api/upload/${game.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Image URL uploaded:", data);
        fetchGameDetail();
        setImageUrl("");
      })
      .catch((error) => {
        console.error(imageUrl);
        console.error("Error uploading image URL:", error);
      });
  };

  const handleSave = async () => {
    if (!editMode) {
      return; // Only proceed if in edit mode
    }
    try {
      await fetch(
        `http://localhost:3001/api/games/update-description/${game.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description: editedDescription }),
        },
      );
      setGame({ ...game, description: editedDescription });
      setEditMode(false); // Exit edit mode
    } catch (error) {
      console.error("Failed to save description:", error);
    }
  };

  return {
    game,
    onAutoplayTimeLeft,
    fetchGameDetail,
    handleImageUrlChange,
    handleSubmit,
    handleSave,
    setEditedDescription,
    editMode,
    editedDescription,
    setEditMode,
    progressCircle,
    progressContent,
    imageUrl,
  };
};

export default useGameDetail;
