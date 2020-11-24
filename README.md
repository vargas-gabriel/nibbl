# nibbl

Duration: 2 week sprint.

nibble is a meal planning web application that generates meal suggestions based on
the users input (diet choice). The user can save their favorite meals to their profile.
Each meal option contains a link to directions on how to prepare the meal.

I created this app to solve my issue of never knowing what I want to cook.

This application uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database

Create a new database called `nibbl` and create tables using the queries in the
database.sql file

If you would like to name your database something else, you will need to change `nibbl` to the name of your new database name in `server/modules/pool.js`

## Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Directory Structure

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `server/` contains the Express App

## Using the app

- Create an account
- On the homepage, select the diet you ascribe to
- Based on your choice, you'll be presented with a Breakfast, Lunch, and Dinner option
- Each option contains calorie information, and image, and a youtube link to a video on how to prepare the meal
- You can favorite a meal and it will be saved to your profile.

## Acknowledgement

Thanks to Prime Digital Academy in Minneapolis who equipped and helped me to make this application a reality.
