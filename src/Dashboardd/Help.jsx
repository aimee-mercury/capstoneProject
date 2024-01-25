import React from 'react'
import './help.css'
import Headersidebar from './Headersidebar'

function Help() {
  return (
    <>
    <Headersidebar/>
    <div className='help-dash-container'>
    <div className="help-page-dash">
    <h1 className='dash-help-header'>Help Center</h1>
      <div className="section">
      <h2 className='dash-help-headings'>Frequently Asked Questions (FAQs)</h2>
    </div>
    <div className="section-dash">
      <h2 className='dash-help-headings'>Contact Information</h2>
    </div>
    <div className="section">
      <h2 className='dash-help-headings'>Support Resources</h2>
    </div>
    </div>
    </div>
    </>
  )
}

export default Help
