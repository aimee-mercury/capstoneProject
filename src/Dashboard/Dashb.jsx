import React from 'react'
import './Dashboard.css'
import adminprofile from '../assets/avatar-profile.webp'
import { IoIosNotificationsOutline } from "react-icons/io";

function Dashb(props) {
  return (
    <div>
      <div className='interf-section'>
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
        <div className="values">
  <div className="val-box1">
    <i></i>
    <div>
      <h3 className='dashboard-head-numbers'>{props.num1}</h3>
      <span className='dashboard-span'>{props.detail1}</span>
    </div>
  </div>
  <div className="val-box2">
    <i></i>
    <div>
      <h3 className='dashboard-head-numbers'>{props.num2}</h3>
      <span className='dashboard-span'>{props.detail2}</span>
    </div>
  </div>
  <div className="val-box3">
    <i></i>
    <div>
      <h3 className='dashboard-head-numbers'>{props.num3}</h3>
      <span className='dashboard-span'>{props.detail3}</span>
    </div>
  </div>
  <div className="val-box4">
    <i></i>
    <div>
      <h3 className='dashboard-head-numbers'>{props.num4}</h3>
      <span className='dashboard-span'>{props.detail4}</span>
    </div>
  </div>
    </div> 
      </div>
    </div>
  )
}

export default Dashb
