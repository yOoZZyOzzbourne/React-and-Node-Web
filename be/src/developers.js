import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const developersRoutes = (app) => {
  // Get all developers
  app.get("/api/developers", async (req, res) => {
    const developers = await prisma.developer.findMany({
      include: { games: true },
    });
    res.json(developers);
  });

  // Add a new developer
  app.post("/api/developers", async (req, res) => {
    const { name, icon } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Developer name is required" });
    }
    try {
      const newDeveloper = await prisma.developer.create({
        data: { name, icon },
      });
      res.status(201).json(newDeveloper);
    } catch (error) {
      console.error("Failed to create a new developer:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Delete a developer
  app.delete("/api/developers/:developerId", async (req, res) => {
    const { developerId } = req.params;
    try {
      await prisma.developer.delete({
        where: { id: parseInt(developerId) },
      });
      res.status(200).json({
        message: "Developer and all related games deleted successfully",
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2003") {
          return res
            .status(400)
            .json({ error: "Cannot delete developer due to other relations." });
        }
      }
      console.error("Failed to delete developer:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
};
