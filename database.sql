
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
    "youtube" VARCHAR (2000) NOT NULL,
    "type" INT NOT NULL,
    "time" INT NOT NULL
);
--juction for meals and diets tables
CREATE TABLE "meals_diets" (
	"id" SERIAL PRIMARY KEY,
    "DIET_ID" INT REFERENCES "diets",
    "MEAL_ID" INT REFERENCES "meals"
    "TIME_ID" INT REFERENCES "meals"
);

INSERT INTO "meals" ("mealName", "calories", "youtube", "type", "time")
VALUES ('Keto Breakfast Casserole', '500', 'https://www.youtube.com/watch?v=1Aydu2xmue8&ab_channel=LowCarbRecipeswithJennifer', 1, 1;

INSERT INTO "meals" ("mealName", "calories", "youtube", "type", "time")
VALUES ('Keto Lunch', '600', 'youtube.com', 1, 2), ('Keto Dinner', '800', 'youtube', 1, 3), ('Vegan Breakfast', '500', 'youtube', 2, 1), ('Vegan Lunch', '430', 'youtube', 2, 2), 
('Vegan Dinner', '650', 'youtube', 2, 3), ('Vegetarian Breakfast', '690', 'youtube', 3, 1), ('Vegetarian Lunch', '680', 'youtube', 3, 2), ('Vegetarian Dinner', '750', 'youtube', 3, 3),
('Paleo BreakFast', '550', 'youtube', 4, 1), ('Paleo Lunch', '575', 'youtube', 4, 2), ('Paleo Dinner', '550', 'youtube', 4, 3);