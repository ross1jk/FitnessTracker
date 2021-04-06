# Fitness Tracker

![badge](https://img.shields.io/static/v1?label=License&message=MIT%20License&color=blue)
  
## Description

Fitness Tracker is an application that allows users to view and track daily workouts, and are able to log multiple exercises in a workout on a given day. Users can track weight and cardio excercises through custom input forms.

Users will reach their workout goals more easily and quickly by tracking their workouts through this application.

## Table of Contents

* [Deployed_Application](#Deployed_Application)
* [Usage](#Usage)
* [Mockup](#Mock-Up)
* [Schema](#Schema)
* [Routes](#Routes)
* [License](#License)
* [Questions](#Questions)
  
## Deployed_Application

To access this deployed application, visit the following link: [Fitness Tracker Application](https://dry-eyrie-60767.herokuapp.com/)

## Usage

Fitness Tracker is an interactive workout application that utilzes MongoDB, Node, Express, HTML, JavaScript, and API Routes and an ORM. Fitness Tracker uses Node and Mongo to query and route data to the application, and generate the HTML.

While utilizing this application the user is able to: add exercises to the most recent workout plan, add new exercises to a new workout plan, view the combined weight of multiple exercises from the past seven workouts on the `stats` page and the total duration of each workout from the past seven workouts on the `stats` page.

## Mock-Up

![Home]()
![StatsPage]()
![Logpage]()

## Schema

### Database: workout

### Models

Inside the database there is a document created titled workoutSchemea. That is comprised of the current date, and an array to provide an exercise type and its details. A virutal is used to render the information to JSON.

## Routes

### HTML Routes

There are three HTML Routes, they render the home page - '/', the stastics page - '/stats' and a page to enter in a new exercise - '/exercise'

### API Routes

## License

This application has a MIT License type. Please read more about permissions at [Choose A License](https://choosealicense.com/licenses/)

## Questions

Please reach out to me with any additional questions by contacting me.

* GitHub Profile: https://github.com/ross1jk
* My Email Address: Jacqueline.ross09@gmail.

Need from homeworkstill

> **Important:** Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) to learn how it can be accomplished.

To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application. Be sure to use the following guides for support:

  * [Set Up MongoDB Atlas](../04-Important/MongoAtlas-Setup.md)

  * [Deploy with Heroku and MongoDB Atlas](../04-Important/MongoAtlas-Deploy.md)