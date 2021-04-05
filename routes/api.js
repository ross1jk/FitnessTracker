const db = require("../models");

module.exports = (app) => {
  // All Workouts for get last work out function
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // Route to Return ID
  // on a post method and returns a new workout

  // Add new workout
  app.post("/api/workouts", ({ body }, res) => {
    console.log(body);
    db.Workout.create(body).then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    });
  });

  // Update an existing workout
  app.post("api/workouts/:id", (req, res) => {
      db.Workout.findOneAndUpdate(
          {
              id: mongojs.ObjectId(req.params.id)
          },
          {
            $set: {
                exercies: req.body,
            }
          }
          
          );
  });

  // All workouts in database for stats page
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};

// * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

// * View the total duration of each workout from the past seven workouts on the `stats` page
