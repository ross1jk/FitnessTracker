const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  // day exercises
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    // {
    //   type: Schema.Types.ObjectId,
    //   ref: "Exercises",
    // },
    {
      type: {
        type: String,
        trim: true, 
        required: "Enter a workout type"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter the name for the workout"
    },
    duration: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
