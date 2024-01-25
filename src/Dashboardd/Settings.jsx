import React from 'react'
import './settings.css'
import Headersidebar from './Headersidebar'

function Settings() {
  return (
    <>
    <Headersidebar/>
    <div className='settings-dashboard-container'>
    <div className='dashboard-settings-page'>
       <h1 className='dash-header'>Settings</h1>
      <div className="dashbord-settings-section">
      <h2 className='dash-headings'>User Profile</h2>
      
    </div>
    <div className="section">
      <h2 className='dash-headings'>Notification Settings</h2>

    </div>
    <div className="section">
      <h2 className='dash-headings'>Security Settings</h2>

    </div>
    </div>
    </div>
    </>
  )
}

export default Settings
