import React from "react";
import { Box, Typography } from "@mui/material";

function GameVideo({ videoId, name }) {
  return (
    <Box sx={{ width: "100%", maxWidth: 1000 }}>
      <Typography variant="h6" color="text.primary" textAlign="center">
        Gameplay Video
      </Typography>
      <iframe
        title={`${name} Gameplay Video`}
        width="1000"
        height="600"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          maxWidth: "100%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></iframe>
    </Box>
  );
}

export default GameVideo;
