const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
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
}); 

const Exercises = mongoose.model("Exercises", exerciseSchema);

module.exports = Exercises