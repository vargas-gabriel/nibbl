const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
	// GET route code here
	// getting keto meals from db
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

/**
 * POST route template
 */
router.post("/", (req, res) => {
	// POST route code here
	const insertMealQuery = `
	INSERT INTO "meals" ("mealName", "calories", "youtube", "image", "type", "time" )
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING "id";`;

	pool
		.query(insertMealQuery, [
			req.body.mealName,
			req.body.calories,
			req.body.youtube,
			req.body.image,
			req.body.type,
			req.body.time,
		])
		.then((result) => {
			console.log("New Meal Id:", result.rows[0].id); //ID IS HERE!

			const createdMealId = result.rows[0].id;

			const insertMealJunctionQuery = `
      INSERT INTO "user_meals" ("USER_ID", "MEAL_ID")
      VALUES  ($1, $2);
      `;
			// SECOND QUERY MAKES USER FOR THAT NEW MEAL
			pool

				.query(insertMealJunctionQuery, [req.body.id, createdMealId])

				.then((result) => {
					//Now that both are done, send back success!
					res.sendStatus(201);
					console.log("here is your success message");
				})
				.catch((err) => {
					// catch for second query
					console.log("error second query", err);
					res.sendStatus(500);
				});

			// Catch for first query
		})
		.catch((err) => {
			console.log("error first query", err);
			res.sendStatus(500);
		});
});

module.exports = router;
