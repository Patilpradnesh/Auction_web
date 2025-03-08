import React from 'react'
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export default function Startpage() {
const history = useHistory();

const handleStartBidding = () => {
    const isLoggedIn = false; // Replace with actual login check logic
    if (isLoggedIn) {
        history.push('/home');
    } else {
        history.push('/login');
    }
}

return (
    <>
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Welcome to Auction</h1>
            <p>Discover and bid on unique items from around the world.</p>
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
                onClick={handleStartBidding}
            >
                Start Bidding
            </button>
        </div>
    </>
)
}
