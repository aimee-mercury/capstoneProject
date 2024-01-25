import React from 'react'
import './signout.css'
import Headersidebar from './Headersidebar';

function Signout({onLogout}) {
    const handleLogout = () => {
        if (onLogout) {
          onLogout();
        }
        
      };
  return (
    <div>
      <Headersidebar/>
      <div className='signout-dash-container'>
      <div className="logout-page-dashboard">
      <h1 className='dash-logout-header'>Logout</h1>
      <p className='dash-logout-paragraph'>Are you sure you want to logout?</p>
      <button onClick={handleLogout} className='dashboard-logout'>Logout</button>
    </div>
    </div>
    </div>
  )
}

export default Signout
