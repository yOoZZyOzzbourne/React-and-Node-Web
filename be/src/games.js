import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const gamesRoutes = (app) => {
  // Get all games
  app.get("/api/games", async (req, res) => {
    const games = await prisma.game.findMany({
      include: { developer: true },
    });
    res.json(games);
  });

  // Add a new game
  app.post("/api/games", async (req, res) => {
    const {
      name,
      description,
      icon,
      pictures,
      userImages,
      video,
      developerId,
    } = req.body;
    try {
      if (!developerId || isNaN(parseInt(developerId, 10))) {
        return res.status(400).json({ error: "Invalid developerId provided." });
      }
      const newGame = await prisma.game.create({
        data: {
          name,
          description,
          icon,
          pictures,
          userImages,
          video,
          developerId: parseInt(developerId, 10),
        },
      });
      res.status(201).json(newGame);
    } catch (error) {
      console.error("Failed to create new game:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Upload image URL
  app.post("/api/upload/:gameId", async (req, res) => {
    const { gameId } = req.params;
    const { imageUrl } = req.body;

    try {
      const game = await prisma.game.findUnique({
        where: { id: parseInt(gameId) },
      });
      if (!game) {
        return res.status(404).json({ error: "Game not found" });
      }
      const updatedGame = await prisma.game.update({
        where: { id: parseInt(gameId) },
        data: {
          userImages: game.userImages
            ? game.userImages + "," + imageUrl
            : imageUrl,
        },
      });
      res.json(updatedGame);
    } catch (error) {
      console.error("Error uploading image URL:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Delete a game
  app.delete("/api/games/:gameId", async (req, res) => {
    const { gameId } = req.params;
    try {
      await prisma.game.delete({
        where: { id: parseInt(gameId) },
      });
      res.status(200).json({ message: "Game deleted successfully" });
    } catch (error) {
      console.error("Failed to delete game:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Update game description
  app.post("/api/games/update-description/:gameId", async (req, res) => {
    const { gameId } = req.params;
    const { description } = req.body;
    try {
      const updatedGame = await prisma.game.update({
        where: { id: parseInt(gameId) },
        data: { description },
      });
      res.json(updatedGame);
    } catch (error) {
      console.error("Failed to update description:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
};
