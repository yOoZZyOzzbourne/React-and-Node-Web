import express from "express";
import cors from "cors";
import { gamesRoutes } from "./games.js";
import { developersRoutes } from "./developers.js";
const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

gamesRoutes(app);
developersRoutes(app);

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
