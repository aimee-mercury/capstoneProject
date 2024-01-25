import React from 'react'
import './finance.css'
import Headersidebar from './Headersidebar'

function Finance() {
  return (
    <>
    <Headersidebar/>
    <div className='finance-dash-container'>
    <div className="dashboard-finance-page">
      <h1 className='dash-finance'>Finance Page</h1>
      <div className="section">
      <h2 className='dash-acc-summary'>Account Summary</h2>

    </div>
      <div className="dashboard-section">
      <h2 className='dash-transactions'>Transaction History</h2>
     
    </div>
    <div className="dashboard-section">
      <h2 className='dash-chart'>Chart</h2>
      
    </div>
    </div>
    </div>
    </>
  )
}

export default Finance
