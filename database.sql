
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
    "image" VARCHAR (2000) NOT NULL,
    "type" INT NOT NULL,
    "time" INT NOT NULL,
    "likes" INT,
    "dislikes" INT
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

INSERT INTO "meals" ("mealName", "calories", "youtube", "type", "time", "image" )
  VALUES ('Soufflé Omelette With Cheese', '500', 'https://www.youtube.com/watch?v=y-Wr401Bio4&ab_channel=livelife365',1, 1, 'https://www.seriouseats.com/2019/02/20190122-souffle-omelet-vicky-wasik-15.jpg'),
  ('Spatchcocked (Butterflied) Roast Chicken', '500', 'https://www.youtube.com/watch?v=XIZxT7iI-QI&ab_channel=BabishCulinaryUniverse',1, 2, 'https://www.seriouseats.com/recipes/images/2017/01/20170110-spatchcock-chicken-23.jpg'),
  ('Sous Vide Salmon', '375', 'https://www.youtube.com/watch?v=KObL442PWhQ&ab_channel=BabishCulinaryUniverse',1, 3, 'https://www.seriouseats.com/recipes/images/2016/08/20160826-sous-vide-salmon-46.jpg'),
  ('Menemen (Turkish-Style Scrambled Eggs With Tomatoes, Onions, and Chilies)', '435', 'https://www.youtube.com/watch?v=uFxXw0eSSC0&ab_channel=J.KenjiL%C3%B3pez-Alt', 2, 1, 'https://www.seriouseats.com/recipes/images/2014/09/20140923-menemen-recipe-14.jpg'),
  ('Roasted Eggplant With Tahini, Pine Nuts, and Lentils Recipe', '430', 'https://www.youtube.com/watch?v=CUA5gYeb7VA&ab_channel=MYTASTYFOODY', 2, 2, 'https://www.seriouseats.com/recipes/images/2016/03/20160410-roasted-eggplant-lentil-vegan-5.jpg'),
  ('Sautéed Japanese Turnips With Turnip Greens', '650', 'https://www.youtube.com/watch?v=Dj2cneh-cxI&ab_channel=JudiintheKitchen', 2, 3, 'https://www.seriouseats.com/recipes/images/2016/05/20160520-japanese-turnips-vicky-wasik-8.jpg'),
  ('Sourdough Waffles', '690', 'https://www.youtube.com/watch?v=bUTH1pqEzCA&ab_channel=FlavorLab', 3, 1, 'https://www.seriouseats.com/2011/01/20200615-sourdough-waffle-reshoot-ariel-kanter.jpg'),
  ('Mexican Street Corn Salad', '680', 'https://www.youtube.com/watch?v=VG5lJMwjlcU&ab_channel=TheStayAtHomeChef', 3, 2, 'https://www.seriouseats.com/2019/07/20190901-esquites-reshoot-vicky-wasik-1.jpg'),
  ('Tomato Basil Soup', '435', 'https://www.youtube.com/watch?v=W88m7LKFR9s&ab_channel=YourFoodLab', 3, 3, 'https://www.seriouseats.com/recipes/images/20110224-dt-nordstrom-tomato-soup.jpg'),
  ('Japanese-Style Salted Salmon (Shiozake)', '550', 'https://www.youtube.com/watch?v=cr2cP89TtIk&ab_channel=JapaneseCooking101', 4,1, 'https://www.seriouseats.com/2018/07/20180620-japanese-breakfast-vicky-wasik-19.jpg'),
  ('Grilled Skirt Steak Fajitas', '575', 'https://www.youtube.com/watch?v=bptRd0YLVe4&ab_channel=FoodNetwork', 4, 2, 'https://www.seriouseats.com/2018/05/20130621-fajitas-food-lab-61-large.jpg'),
  ('All-American Beef Stew', '550', 'https:///www.youtube.com/watch?v=8DCw_eR_iPA&ab_channel=BabishCulinaryUniverse', 4, 3, 'https://www.seriouseats.com/recipes/images/2016/01/20160116-american-beef-stew-recipe-34.jpg');







SELECT * FROM "meals" JOIN "meals_diets" ON "meals"."id" = "meals_diets"."MEAL_ID" 
JOIN "diets" ON "meals_diets"."DIET_ID" = "diets"."id";

INSERT INTO "meals_diets" ("MEAL_ID", "DIET_ID", "TIME_ID")
VALUES (1,1,1), (2,1,2), (3,1,3), (4,2,1), (5,2,2), (6,2,3), (7,3,1), (8,3,2), (9,3,3), (10,4,1), (11,4,2), (12,4,3);

SELECT * FROM "meals" JOIN "user_meals" ON "meals"."id" = "user_meals"."MEAL_ID" 
JOIN "user" ON "user_meals"."USER_ID" = "user"."id";

INSERT INTO "user_meals" ("USER_ID", "MEAL_ID")
VALUES (10,4,1), (11,4,2), (12,4,3);
SELECT * FROM "meals_diets" WHERE "DIET_ID" = 1;
SELECT * FROM "meals" WHERE "type" = 1;

SELECT * FROM "meals" JOIN "user_meals" ON "meals"."id" = "user_meals"."MEAL_ID" 
JOIN "user" ON "user_meals"."USER_ID" = "user"."id" WHERE "user"."id" = 1;

DELETE from "user_meals" WHERE "USER_ID" = $1;