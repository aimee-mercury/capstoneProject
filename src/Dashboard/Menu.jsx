import React from 'react'
import logo from '../assets/1.jpg'
import './Dashboard.css'

function Menu() {
  return (
    <div>
        <div id="menu">
          <div className="logo">
            <img src={logo} alt="" className="logo-images"/>
            <h1 className="dyn">LMS Project</h1>
          </div>
          <div className="items"> 
       <li><a href="#dashboard" >Dashboard</a></li>
       <li><a href="#book">Books</a></li>
       <li><a href="#members">Members</a></li>
       <li><a href="#settings">Settings</a></li>
       <li><a href="#finance">Financial  Details</a></li>
       <li><a href="#help">Help</a></li>
       </div>
       </div>
    </div>
  )
}

export default Menu
