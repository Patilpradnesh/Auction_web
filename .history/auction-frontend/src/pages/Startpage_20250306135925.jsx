import React from 'react'

export default function Startpage() {
  return (
   <>
<div style={{ textAlign: 'center', padding: '50px' }}>
  <h1>Welcome to Antique Auction</h1>
  <p>Discover and bid on unique antiques from around the world.</p>
  <button 
    style={{ 
      padding: '10px 20px', 
      fontSize: '16px', 
      backgroundColor: '#007bff', 
      color: '#fff', 
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer' 
    }}
    onClick={() => alert('Start Bidding!')}
  >
    Start Bidding
  </button>
</div>
   </>
  )
}
