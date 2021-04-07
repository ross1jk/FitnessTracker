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

  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    });
  });

//   Sudo code for aggreate function
//   app.put("api/workouts", (req, res) => {
//     db.Workout.aggregate([
//         {
//           $addFields: {
//             totalDuration: 9 //{ $sum: "$exercise.duration" },
//           },
//         },
//       ])
//       .then((dbWorkout) => {
//           res.json(dbWorkout);
//       })
//   }); 

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
};
