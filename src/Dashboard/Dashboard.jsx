import React from 'react'
import Book from './Book'
import Menu from './Menu'
import Dashb from './Dashb'


function Dashboard() {
  return (
    <div className='whole-dashboard'>
      <Menu/>
      <Dashb tittle='Dashboard' num1='8,123' num2='17' num3='19,027' num4='$27,000' detail1='Users' detail2='Employees' detail3='Books' detail4='Income'/>
      <Book/>
    </div>
  )
}

export default Dashboard
