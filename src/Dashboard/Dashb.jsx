import React from 'react'
import './Dashboard.css'

import Menu from './Menu';

function Dashb(props) {
  return (
    <div>
      <div className='interf-section'>
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
