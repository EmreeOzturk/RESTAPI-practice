const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
  {
    placeName: {
      type: String,
      require: "Place name cant be empty",
    },
    isVisited: {
      type: Boolean,
      default: false,
    },
    createdTime: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Placeee", placeSchema);
