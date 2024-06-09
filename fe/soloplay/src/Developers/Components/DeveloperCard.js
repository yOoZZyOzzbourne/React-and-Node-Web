import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Grid,
  CardActionArea,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteConfirmationDialog from "../../Utils/DeleteConfirmationDialog";
import { slugify } from "../../Utils/utils";
import { useNavigate } from "react-router-dom";
function DeveloperCard({
  developer,
  requestDeleteDeveloper,
  openDeleteDialog,
  handleClose,
  handleDelete,
}) {
  const navigate = useNavigate();

  return (
    <Card
      key={developer.id}
      sx={{
        width: 400,
        maxWidth: "100%",
        minHeight: 300,
        position: "relative",
        overflow: "visible",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardMedia component="img" height="140" image={developer.icon} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {developer.name}
        </Typography>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            requestDeleteDeveloper(developer.id);
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
      </CardContent>
      <DeleteConfirmationDialog
        open={openDeleteDialog}
        handleClose={handleClose}
        handleConfirm={handleDelete}
      />
      <CardActionArea
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: "center",
          borderTop: "1px solid #ccc",
          padding: "8px 0",
          minHeight: "30px",
          maxHeight: "30px",
          overflow: "hidden",
          transition: "max-height 0.5s ease",
          "&:hover": {
            maxHeight: "500px",
          },
        }}
      >
        <Typography variant="body2" color="text.secondary" mb={1}>
          Games:
        </Typography>
        <Grid
          container
          spacing={1}
          sx={{
            overflow: "hidden",
            maxHeight: "300px",
            transition: "max-height 0.5s ease",
          }}
        >
          {developer.games.map((game) => (
            <Grid item key={game.id} xs={6} sm={4}>
              <Card
                sx={{
                  maxWidth: 150,
                  transition: "box-shadow 0.3s",
                  "&:hover": {
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  },
                }}
                onClick={() => navigate(`/games/${slugify(game.name)}`)}
              >
                <CardMedia
                  component="img"
                  height="80"
                  image={game.icon || "/default-game-icon.png"}
                  source
                  is
                  provided
                  alt={game.name}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {game.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardActionArea>
    </Card>
  );
}

export default DeveloperCard;
