// src/components/ActiveBidCard.jsx
import React, { useState } from "react";
import '../index.css'

const ActiveBidCard = ({ bid }) => {
  const [bidAmount, setBidAmount] = useState("");

  // const handleBid = () => {
  //   // Handle bid submission (we'll implement this later)
  //   console.log("Bid placed:", bidAmount);
  //   // You can call an API here to update the bid in the backend
  // };

  const handleBid = async () => {
    try {
      const response = await fetch("/api/place-bid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bidId: bid._id, // Replace with the actual bid ID from your data
          userId: "user-id-here", // Replace with the logged-in user's ID
          bidAmount: bidAmount,
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        // Refresh the bids or update the UI
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error placing bid:", error);
    }
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