const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter a workout type",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter the name for the workout",
        },
        duration: {
          type: Number,
        },
        distance: {
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
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// workoutSchema.virtual("totalDuration").get(() => {
//   return this.exercise.reduce((total, exercise) => {
//     return total + exercise.duration;
//   }, 0);
// });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
