const asyncHandler = require('express-async-handler');
const Auction = require('../models/Auction');

const createAuction = asyncHandler(async (req, res) => {
  const { title, description, startingBid, endDate } = req.body;

  const auction = new Auction({
    title,
    description,
    startingBid,
    endDate,
    user: req.user._id,
  });

  const createdAuction = await auction.save();
  res.status(201).json(createdAuction);
});

const getAuctions = asyncHandler(async (req, res) => {
  const auctions = await Auction.find({});
  res.json(auctions);
});

const bidAuction = asyncHandler(async (req, res) => {
  const { auctionId, bidAmount } = req.body;
  const auction = await Auction.findById(auctionId);

  if (auction) {
    auction.currentBid = bidAmount;
    const updatedAuction = await auction.save();
    res.json(updatedAuction);
  } else {
    res.status(404);
    throw new Error('Auction not found');
  }
});

module.exports = { createAuction, getAuctions, bidAuction };
