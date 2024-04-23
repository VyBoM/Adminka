const allowedCors = ["localhost:3000", "http://practicum.yndex.ru", "http://students-projects.ru"];

function cors(req, res, next) {
	const { origin } = req.headers;

	if (allowedCors.includes(origin)) {
		res.headers("Access-Control-Allow-Origin", origin);
	}

	next();
}

module.exports = cors;
