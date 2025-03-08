// src/components/ActiveBidCard.jsx
import React, { useState } from "react";
import '..indexcss/'

const ActiveBidCard = ({ bid }) => {
  const [bidAmount, setBidAmount] = useState("");

  const handleBid = () => {
    // Handle bid submission (we'll implement this later)
    console.log("Bid placed:", bidAmount);
    // You can call an API here to update the bid in the backend
  };

  return (
    <div className="active-bid-card">
      <h3>{bid.itemName}</h3>
      <p>Current Highest Bid: ${bid.highestBid}</p>
      <p>Time Left: {bid.timeLeft}</p>
      <input
        type="number"
        placeholder="Enter your bid"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
      />
      <button onClick={handleBid}>Place Bid</button>
    </div>
  );
};

export default ActiveBidCard;