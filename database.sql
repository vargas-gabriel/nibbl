
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--user table query
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
--diets table
CREATE TABLE "diets" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL
    
);
--query to populate diets table
INSERT INTO "diets" ("name")
VALUES ('Ketogenic'), ('Vegan'), ('Vegetarian'), ('Paleo');

--user meals junction table 
CREATE TABLE "user_meals" (
	"id" SERIAL PRIMARY KEY,
    "USER_ID" INT REFERENCES "user",
    "MEAL_ID" INT REFERENCES "meals"
);
--meals table 
CREATE TABLE "meals" (
    "id" SERIAL PRIMARY KEY,
    "mealName" VARCHAR (80) NOT NULL,
    "calories" VARCHAR (1000) NOT NULL,
    "youtube" VARCHAR (2000) NOT NULL
);
--juction for meals and diets tables
CREATE TABLE "meals_diets" (
	"id" SERIAL PRIMARY KEY,
    "DIET_ID" INT REFERENCES "diets",
    "MEAL_ID" INT REFERENCES "meals"
);
