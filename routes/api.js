const db = require("../models");

module.exports = (app) => {
  // All Workouts - will render last workout on page
  app.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]).then((dbWorkout) => {
      res.json(dbWorkout);
      db.Workout.find({})
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
    });
  });

  // Creates Route
  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    });
  });

  // Grabs/creates ID to create the new workout
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true, runValidators: true }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
        console.log(dbWorkout);
      })
  });

  // All workouts in database for stats page
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]).then((dbWorkout) => {
      res.json(dbWorkout);
      db.Workout.find({})
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
    });
  });
};
