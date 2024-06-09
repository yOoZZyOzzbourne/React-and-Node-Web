import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { slugify } from "../../Utils/utils"; // Ensure path is correct

function GameCard({ game, developers, requestDeleteGame }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 345,
        position: "relative",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        },
      }}
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/games/${slugify(game.name)}`);
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={game.icon || "/path_to_default_image.png"} // Consider a default image
        alt={game.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Developer:{" "}
          {developers.find((dev) => dev.id === game.developerId)?.name ||
            "Unknown"}
        </Typography>
      </CardContent>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          requestDeleteGame(game.id);
        }}
        color="error"
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
        }}
      >
        <DeleteIcon
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.8)",
            },
          }}
        />
      </IconButton>
    </Card>
  );
}

export default GameCard;
