const db = require("../models");

module.exports = (app) => {

  // All Workouts - will render last workout on page
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // Adds a new workout
    app.post("/api/workouts", ({ body }, res) => {
      console.log(body);
      db.Workout.create(body).then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      });
    });

  // Grabs/creates ID to create the new workout
  app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
            req.params.id,
          { $push: { exercises: req.body } },
          { new: true }
        )
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
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
//   app.post("/api/workouts/range", (req, res) => {
//     db.Workout.create({})
//       .then((dbWorkout) => {
//         res.json(dbWorkout);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   });
};

// * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

// * View the total duration of each workout from the past seven workouts on the `stats` page
