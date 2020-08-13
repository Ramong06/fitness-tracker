const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  workouts: [
    {
      type: {
        type: String,
        required: "Choose a workout type",
      },
      name: {
        type: String,
        trim: true,
        required: "Name your workout",
      },
      duration: {
        type: Number,
        required: "Time spent working out",
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
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
