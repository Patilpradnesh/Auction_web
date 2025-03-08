
// backend/models/Bid.js
const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  highestBid: { type: Number, default: 0 },
  highestBidder: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  timeLeft: { type: String, required: true },
});

module.exports = mongoose.model("Bid", bidSchema);