import React from "react";
import { Box, Typography } from "@mui/material";

function UserImagesGallery({ userImages }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" color="text.primary" textAlign="center">
        User images
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        {userImages.split(",").map((url, index) => (
          <div key={index} style={{ width: "calc(100% / 3 - 20px)" }}>
            <img
              src={url}
              alt={`User ${index}`}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default UserImagesGallery;
