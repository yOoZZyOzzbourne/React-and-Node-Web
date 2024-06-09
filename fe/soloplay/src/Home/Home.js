import React, { useState, useEffect } from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { slugify } from "../Utils/utils";
import react_edit from "./Images/react_edit.png";
import react_images from "./Images/react_images.png";
import add_developer from "./Images/add_developer.png";
import add_game from "./Images/add_game.png";
import light_mode from "./Images/light_mode.png";
import dark_mode from "./Images/dark_mode.png";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function Home() {
  const [games, setGames] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [setDeveloperId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3001/api/games").then((res) => res.json()),
      fetch("http://localhost:3001/api/developers").then((res) => res.json()),
    ])
      .then(([gamesData, developersData]) => {
        setGames(gamesData);
        setDevelopers(developersData);
        if (developersData.length > 0) {
          setDeveloperId(developersData[0].id);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  });

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <Box sx={{ overflow: "hidden", height: "100vh", width: "60vw" }}>
        <Slide direction="up" triggerOnce>
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <Typography variant="h2" gutterBottom>
              Welcome to SoloPlay by yOoZZ
            </Typography>
            <Typography variant="subtitle1">
              Your ultimate gaming portal! Here, you can explore, play, and
              connect with the gaming community like never before. Dive into our
              extensive library of games, meet developers, and discover new
              adventures every day.
            </Typography>
            <Typography variant="h3" marginTop="150px">
              Press Space to continue
            </Typography>
          </Box>
        </Slide>

        <Fade triggerOnce>
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Explore New Releases
            </Typography>
            <Typography variant="body1">
              Below, you'll find interactive cards featuring the latest game
              releases. Simply click on any game card to see detailed
              information about the game, including options to edit game
              descriptions and add your personal screenshots.
            </Typography>
            <Box display="flex" justifyContent="space-around" flexWrap="wrap">
              {games.map((game) => (
                <Card
                  key={game.id}
                  sx={{
                    maxWidth: 345,
                    m: 2,
                    position: "relative",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                    },
                  }}
                  onClick={() => navigate(`/games/${slugify(game.name)}`)}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={game.icon || "/path_to_default_icon.jpg"}
                    alt={game.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {game.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Developer:{" "}
                      {developers.find((dev) => dev.id === game.developerId)
                        ?.name || "Unknown"}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Fade>
      </Box>

      <Box sx={{ overflow: "hidden", height: "100vh", width: "60vw" }}>
        <Fade triggerOnce>
          <Typography variant="h4" gutterBottom>
            Explore New Releases
          </Typography>
          <Typography variant="body1">
            Below, you'll find interactive cards featuring the latest game
            releases. Simply click on any game card to see detailed information
            about the game, including options to edit game descriptions and add
            your personal screenshots.
          </Typography>
          <Box display="flex" justifyContent="space-around" flexWrap="wrap">
            {games.map((game) => (
              <Card
                key={game.id}
                sx={{
                  maxWidth: 345,
                  m: 2,
                  position: "relative",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  },
                }}
                onClick={() => navigate(`/games/${slugify(game.name)}`)}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={game.icon || "/path_to_default_icon.jpg"}
                  alt={game.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {game.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Developer:{" "}
                    {developers.find((dev) => dev.id === game.developerId)
                      ?.name || "Unknown"}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Fade>
      </Box>

      <Box sx={{ overflow: "hidden", height: "100vh", width: "60vw" }}>
        <Slide direction="left" triggerOnce>
          <Typography variant="h4" gutterBottom>
            Personalize Your Experience
          </Typography>
          <Typography variant="body1">
            Be sure to check out the details page of each game where you can
            personalize your experience by adding unique images and tweaking
            game details to your preference.
          </Typography>
          <img
            src={react_edit}
            alt="Example Description"
            style={{
              height: "500px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "80%",
            }}
          />
        </Slide>
      </Box>

      <Box sx={{ overflow: "hidden", height: "100vh", width: "60vw" }}>
        <Slide direction="right" triggerOnce>
          <img
            src={react_images}
            alt="Example Description"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "80%",
            }}
          />
        </Slide>
      </Box>

      <Box sx={{ overflow: "hidden", height: "100vh", width: "60vw" }}>
        <Fade triggerOnce>
          <Typography variant="h4" gutterBottom>
            Manage Your Library
          </Typography>
          <Typography variant="body1">
            Additionally, you have the power to add
            <IconButton
              color="primary"
              sx={{
                marginLeft: "5px",
                marginRight: "5px",
                backgroundColor: "primary.main",
                color: "white",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <AddIcon />
            </IconButton>
            new games or developers to our database. Deleting is easy, look for
            an icon that looks like this {"-->"}
            <IconButton
              color="error"
              sx={{
                position: "center",
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
            Please note, deleting a developer will remove all associated games,
            so proceed with caution!
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <img src={add_game} alt="Example Description" height="500px" />
            <img src={add_developer} alt="Example Description" />
          </Box>
        </Fade>
      </Box>

      <Box sx={{ overflow: "hidden", height: "100vh", width: "60vw" }}>
        <Zoom textAlign="center" p={2}>
          <Typography variant="h4" gutterBottom>
            You can also change theme from
          </Typography>
          <img src={light_mode} alt="Example Description" />

          <Typography variant="h4" gutterBottom>
            to
          </Typography>
          <img src={dark_mode} alt="Example Description" />
        </Zoom>
      </Box>

      <Box sx={{ overflow: "hidden", height: "100vh", width: "60vw" }}>
        <Slide direction="right" triggerOnce>
          <Typography variant="h4" gutterBottom>
            Join Our Community
          </Typography>
          <Typography variant="body1">
            Join our vibrant community to share experiences, strategies, and
            reviews, or explore our exclusive offers for the latest deals and
            discounts on popular titles.
          </Typography>
        </Slide>

        <Fade triggerOnce>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: "1.2rem",
              padding: "10px 20px",
              margin: "20px auto",
              display: "block",
              width: "fit-content",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            onClick={() => navigate("/developers")}
          >
            Go to Developers Page
          </Button>
        </Fade>
      </Box>
    </div>
  );
}

export default Home;
