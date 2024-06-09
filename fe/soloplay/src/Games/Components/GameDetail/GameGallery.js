import React from "react";
import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function GameGallery({
  pictures,
  onAutoplayTimeLeft,
  progressCircle,
  progressContent,
}) {
  return (
    <Box sx={{ width: "100%", maxWidth: 1000, overflow: "hidden", mb: 2 }}>
      <Typography variant="h6" color="text.primary" textAlign="center">
        Gallery
      </Typography>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        style={{ width: "100%" }}
      >
        {pictures.split(",").map((url, index) => (
          <SwiperSlide key={index}>
            <img
              src={url}
              alt={`Screenshot ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default GameGallery;
