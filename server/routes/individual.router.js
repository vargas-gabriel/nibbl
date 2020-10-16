const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/:id", (req, res) => {
	// GET route code here
	// getting keto meals from db
	console.log("this is req.body in get:", req.params.id);
	let query = 'SELECT * FROM "user_meals" WHERE "USER_ID" = $1;';
	pool
		.query(query, [req.params.id])
		.then((result) => {
			res.send(result.rows);
		})
		.catch((err) => {
			console.log("error with get query", err);
			res.sendStatus(500);
		});
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
	// POST route code here
	console.log("this is req.body:", req.body);
	let query = `INSERT INTO "user_meals" ("USER_ID", "MEAL_ID")
	VALUES ($1, $2);`;
	pool
		.query(query, [req.body.user, req.body.meal])
		.then((result) => {
			res.send(result.rows);
		})
		.catch((err) => {
			console.log("error with post query", err);
			res.sendStatus(500);
		});
});

module.exports = router;
