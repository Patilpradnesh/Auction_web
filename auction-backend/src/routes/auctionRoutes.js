const express = require('express');
const { createAuction, getAuctions, bidAuction } = require('../controllers/auctionController');
const router = express.Router();

router.post('/', createAuction);
router.get('/', getAuctions);
router.post('/bid', bidAuction);

module.exports = router;
