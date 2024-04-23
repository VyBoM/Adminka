const { getAllGames, deleteGame } = require("../controllers/games");

const gamesRouter = require("express").Router();

const addGame = async (req, res) => {};

gamesRouter.get("/games", getAllGames);
gamesRouter.delete("/games/:id", deleteGame);
gamesRouter.post("/games", addGame);

module.exports = gamesRouter;
