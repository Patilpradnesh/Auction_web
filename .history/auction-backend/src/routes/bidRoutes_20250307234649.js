// backend/routes/bidRoutes.js
const express = require("express");
const router = express.Router();
const Bid = require("../models/Bid"); 

/// backend/routes/bidRoutes.js
router.post("/place-bid", async (req, res) => {
  const { bidId, userId, bidAmount } = req.body;

  try {
    // Find the bid by ID
    const bid = await Bid.findById(bidId);

    // Check if the new bid is higher than the current highest bid
    if (bidAmount > bid.highestBid) {
      bid.highestBid = bidAmount;
      bid.highestBidder = userId;
      await bid.save();
      res.status(200).json({ message: "Bid placed successfully!" });
    } else {
      res.status(400).json({ message: "Your bid must be higher than the current bid." });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
});
router.get("/active-bids", async (req, res) => {
  try {
    const activeBids = await Bid.find({}); // Fetch all bids (you can add filters if needed)
    res.status(200).json(activeBids);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
});


module.exports = router;