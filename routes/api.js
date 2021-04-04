const db = require('../models'); 

module.exports = (app) => {
    // display the workouts
    // app.get - findAll
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
    }); 
    // add new 
    // app.post - create
    // upudate workout
    // app.put - update 
}