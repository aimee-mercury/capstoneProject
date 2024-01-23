import React from 'react'
import logo from '../assets/1.jpg'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import { IoIosNotificationsOutline } from "react-icons/io";
import adminprofile from '../assets/avatar-profile.webp'

function Menu(props) {
  return (
    <div className='menu-container'>
        <div id="menu">
          <div className="logo">
            <img src={logo} alt="" className="logo-images"/>
            <h1 className="dyn">LMS Project</h1>
          </div>
          <div className="items"> 
       <li><Link to='/dashboard'>Dashboard</Link></li>
       <li><Link to='/books'>Books</Link></li>
       <li><Link to='/members'>Members</Link></li>
       <li><Link to='/finance'>Financial  Details</Link></li>
       <li><Link to='/settings'>Settings</Link></li>
       <li><Link to='/settings'>Signout</Link></li>
       <li><Link to='/help'>Help</Link></li>
       </div>
       </div>
       <div className="interface">
            <div className="navigation">
                <div className="n1">
                <img src="src/assets/search.svg" alt=""/>
                    <div className="search">
                        <input type="text" placeholder="search" className='dashboard-search-placeholder'/>
                    </div>
                </div>
                <div className="profile">
                <div><IoIosNotificationsOutline className='dashboard-notify-icon'/></div>
                <div><img  src={adminprofile} alt="" /></div>
                </div>
            </div>
                <h1 className='i-name'>{props.tittle}</h1>
        </div>
    </div>
  )
}

export default Menu
