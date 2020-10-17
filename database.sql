
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

--meals table 
CREATE TABLE "meals" (
    "id" SERIAL PRIMARY KEY,
    "mealName" VARCHAR (80) NOT NULL,
    "calories" VARCHAR (1000) NOT NULL,
    "youtube" VARCHAR (2000) NOT NULL,
    "type" INT NOT NULL,
    "time" INT NOT NULL
);


--user meals junction table 
CREATE TABLE "user_meals" (
	"id" SERIAL PRIMARY KEY,
    "USER_ID" INT REFERENCES "user",
    "MEAL_ID" INT REFERENCES "meals"
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


SELECT * FROM movies JOIN movies_genres ON movies.id
 = movies_genres.movies_id JOIN genres ON
  movies_genres.genres_id = genres.id WHERE movies.id = $1;";


SELECT * FROM "species" JOIN "junction" ON "species"."id" = "junction"."species_id" 
JOIN "class" ON "junction"."class_id" = "class"."id";
INSERT INTO "junction" ("species_id", "class_id")
VALUES (1, 4), (2, 4), (3, 5), (4, 5), (5, 5), (6, 3), (7, 2), 
(8, 2), (9, 2), (10, 2), (11, 2), (12, 2), (13, 1), (14, 1), (15, 1), 
(16, 1), (17, 1), (18, 1), (19, 1), (20, 1);

SELECT * FROM "meals" JOIN "meals_diets" ON "meals"."id" = "meals_diets"."MEAL_ID" 
JOIN "diets" ON "meals_diets"."DIET_ID" = "diets"."id";

INSERT INTO "meals_diets" ("MEAL_ID", "DIET_ID", "TIME_ID")
VALUES (10,4,1), (11,4,2), (12,4,3);

SELECT * FROM "meals" JOIN "user_meals" ON "meals"."id" = "user_meals"."MEAL_ID" 
JOIN "user" ON "user_meals"."USER_ID" = "user"."id";

INSERT INTO "user_meals" ("USER_ID", "MEAL_ID")
VALUES (10,4,1), (11,4,2), (12,4,3);
SELECT * FROM "meals_diets" WHERE "DIET_ID" = 1;
SELECT * FROM "meals" WHERE "type" = 1;

'INSERT INTO "user_meals" ("USER_ID", "MEAL_ID")
VALUES (1, 1);'

SELECT * FROM "meals" JOIN "user_meals" ON "meals"."id" = "user_meals"."MEAL_ID" 
JOIN "user" ON "user_meals"."USER_ID" = "user"."id" WHERE "user"."id" = 1;

DELETE from "user_meals" WHERE "USER_ID" = $1;
DELETE FROM "user_meals" WHERE "USER_ID" = $1;`;