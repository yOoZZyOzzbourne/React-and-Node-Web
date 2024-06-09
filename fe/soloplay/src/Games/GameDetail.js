import {
  Box,
  Typography,
  CardMedia,
  Container,
  Button,
  TextField,
} from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/styles.css";

import useGameDetail from "./hooks/useGameDetail";
import DescriptionEditor from "./Components/GameDetail/DescriptionEditor";
import GameGallery from "./Components/GameDetail/GameGallery";
import GameVideo from "./Components/GameDetail/GameVideo";
import UserImagesGallery from "./Components/GameDetail/UserImagesGallery";

function GameDetail() {
  const {
    onAutoplayTimeLeft,
    handleImageUrlChange,
    handleSubmit,
    handleSave,
    setEditedDescription,
    game,
    imageUrl,
    editMode,
    editedDescription,
    progressCircle,
    progressContent,
    setEditMode,
  } = useGameDetail();

  if (!game) return <Typography>Loading...</Typography>;

  // Function to extract video ID from YouTube URL
  // Somehow it needs to be defined here, not in the hook
  const getYouTubeID = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeID(game.video);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
        }}
      >
        <Box sx={{ maxWidth: "100%", width: "100%", mb: 2 }}>
          <CardMedia
            component="img"
            height="400"
            image={game.icon}
            sx={{ width: "100%" }}
          ></CardMedia>
        </Box>

        <DescriptionEditor
          editMode={editMode}
          description={game.description}
          setEditMode={setEditMode}
          handleSave={handleSave}
          setEditedDescription={setEditedDescription}
          editedDescription={editedDescription}
        />
        {game.pictures && (
          <GameGallery
            pictures={game.pictures}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            progressCircle={progressCircle}
            progressContent={progressContent}
          />
        )}
        {videoId && <GameVideo videoId={videoId} name={game.name} />}
        <TextField
          label="Image URL"
          value={imageUrl}
          onChange={handleImageUrlChange}
          fullWidth
          sx={{ mb: 2, mt: 10 }}
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ mt: 2, mb: 10 }}
        >
          Upload Image
        </Button>
        {game.userImages && <UserImagesGallery userImages={game.userImages} />}
      </Box>
    </Container>
  );
}

export default GameDetail;
