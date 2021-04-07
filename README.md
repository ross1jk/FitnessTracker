# Fitness Tracker

![badge](https://img.shields.io/static/v1?label=License&message=MIT%20License&color=blue)
  
## Description

FitnessTracker is an application that allows users to view and track daily workouts,and are able to log multiple exercises in a workout on a given day. Users cantrack weight and cardio excercises through custom input forms.Userswill reach their workout goals more easily and quickly by tracking theirworkouts through this application.

## Tableof Contents

* [Deployed_Application](#Deployed_Application)
* [Usage](#Usage)
* [Mockup](#Mock-Up)
* [Schema](#Schema)
* [Routes](#Routes)
* [License](#License)
* [Questions](#Questions)
  
## Deployed_Application

To access this deployed application, visit the following link: [Fitness TrackerApplication]()

## Usage

FitnessTracker is an interactive workout application that utilzes MongoDB, Node,Express, HTML, JavaScript, and API Routes and an ORM. Fitness Tracker uses Nodeand Mongo to query and route data to the application, and generate the HTML.Whileutilizing this application the user is able to: add exercises to the mostrecent workout plan, add new exercises to a new workout plan, view the combinedweight of multiple exercises from the past seven workouts on the `stats` pageand the total duration of each workout from the past seven workouts on the`stats` page.

## Mock-Up

### Home Page

![Home](/public/images/home.png)

## Stats Page

![StatsPage](/public/images/stats.png)

## Fitness Logs - Cardio and Resistance

![Cardio](/public/images/cardio.png)
![Resistance](/public/images/resistance.png)

## Schema

### Database

The database that is being utilized is "workout", this is hosted on mongodb locally and Mongo Atlas on Heroku

### Models

Inside the database there is a document created titled workoutSchemea. That is comprised of the current date, and an array to provide an exercise type and itsdetails. A virtual is used to render the information to JSON.

## Routes

There are multiple routes required to make this application work.  

### HTMLRoutes

There are three HTML Routes they render:

* The home page - '/'
* The stastics page -'/stats'
* Page to enter in anew exercise - '/exercise'

### APIRoutes

* Route to get workouts to render on the page: app.get("/api/workouts")-- First the field totalDuration needs to be aggregated with the sum ofduration of the exercise performed. Then db.Workout.find is ran to find allworkouts then the response is sent to json
* Route to create new workout: app.post("/api/workouts")-- db.Workout.createis ran to find all workouts then the response is sent tojson
* Route to create ID so new workout can be created: app.get("/api/workouts/:id")-- db.Workout.findBIdAndUpdate is ran to create a new id and then the response is sent to json
* Route to get all workouts for database for stats page app.get("/api/workouts/range")-- First the field totalDuration needs to be aggregated with the sum ofduration of the exercise performed. Then db.Workout.find is ran to find allworkouts then the response is sent to json

## License

Thisapplication has a MIT License type. Please read more about permissions at [Choose A License](https://choosealicense.com/licenses/)

## Questions

Please reach out to me with any additional questions by contacting me.

* GitHub Profile: [ross1jk](https://github.com/ross1jk)
* My Email Address: [Jacqueline.ross09@gmail.com](jacqueline.ross09@gmail.com)