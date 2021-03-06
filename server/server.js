const express = require("express");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
const sessionMiddleware = require("./modules/session-middleware");

const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");
const ketoRouter = require("./routes/keto.router");
const veganRouter = require("./routes/vegan.router");
const veggieRouter = require("./routes/veggie.router");
const paleoRouter = require("./routes/paleo.router");
const indieRouter = require("./routes/individual.router");
const addRouter = require("./routes/add.router");
const removeRouter = require("./routes/delete.router");
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/keto", ketoRouter);
app.use("/api/vegan", veganRouter);
app.use("/api/veggie", veggieRouter);
app.use("/api/paleo", paleoRouter);
app.use("/api/ind", indieRouter);
app.use("/api/add", addRouter);
app.use("/api/remove", removeRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
