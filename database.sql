
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "user_meals" (
    "id" SERIAL PRIMARY KEY,
    "USER_ID" INT,
    "MEAL_ID" INT
);
CREATE TABLE "diets" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL
    
);
INSERT INTO "diets" ("name")
VALUES ('Ketogenic'), ('Vegan'), ('Vegetarian'), ('Paleo');