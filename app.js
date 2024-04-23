const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const mainRouter = require("./routes/main");
const gamesRouter = require("./routes/games");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")), mainRouter, gamesRouter);

app.listen(PORT, () => {
	console.log(`Приложение запущено тут: http://localhost:${PORT}`);
});
