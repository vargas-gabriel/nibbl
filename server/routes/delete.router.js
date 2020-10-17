const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.delete("/", (req, res) => {
	let query = 'DELETE from "user_meals" WHERE "USER_ID" = $1;';
	pool
		.query(query, [req.body.id])
		.then((result) => {
			res.send(result.rows);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
});
router.get("/", (req, res) => {
	// GET route code here

	let query = 'SELECT * FROM "meals" WHERE "type" = 1;';
	pool
		.query(query)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
});
module.exports = router;
