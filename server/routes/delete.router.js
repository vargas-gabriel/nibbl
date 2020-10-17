const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// router.delete("/:id'", (req, res) => {
// 	let query = 'DELETE from "user_meals" WHERE "USER_ID" = $1;';
// 	pool
// 		.query(query, [req.params.id])
// 		.then((result) => {
// 			res.send(result.rows);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.sendStatus(500);
// 		});
// });
router.delete("/:id", (req, res) => {
	// DELETE route code here
	console.log(req.params);
	queryText = 'DELETE from "user_meals" WHERE "USER_ID" = $1;';
	pool
		.query(queryText, [req.params.id])
		.then((result) => {
			res.send(result.rows);
		})
		.catch((err) => {
			console.log("got an error in shelf DELETE", err);
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
