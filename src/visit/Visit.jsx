import React from 'react'
import './visit.css'
import Footer from '../Footer/Footer'
import Navigation from '../components/Navigation'

const Visit = () => {
  return (
   <>
    <Navigation/>
     <div className='signup-container'>
       
               <h1 className='visitheading'>Visit Us</h1><br/><br />             
              <div className='name'>
                <div className='visit'>
              <label className='firstname-label'>FirstName</label><br/><br/>
            <input type='text' required className='vistfirst'></input>
            </div>
            <div className='visit3'>
            <label >SurName</label><br/><br/>
            <input type='text' required className='visitsecond'></input>
            </div>
            </div>  
                     
            <div className="visit4">
            <label >Methods of payment</label><br/>
            <select name="" id="see">
        <option value="">credit card</option>
        <option value="">visa card</option>
        <option value="">payroll</option>

       </select>
         

            </div>

            <div className="sinup4">
            <label >Leave A message</label><br/>
                <input type="text"  required  className='message'/>
            </div>
            
</div>
<Footer/>
</>
  )
}

export default Visit
