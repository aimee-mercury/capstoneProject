import React from 'react'
import './visit.css'
import Footer from '../Footer/Footer'
import Navigation from '../components/Navigation'
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";


const Visit = () => {
  return (
   <>
    <Navigation/>
    
    <div className='container'>
 <div className='visit'>

  <h2>Visit US</h2>
  <p className="kigali-rwanda"><br/><CiLocationOn className="city" />Kigali - Rwanda</p>
  <p className="telephone"><IoIosCall className="mobile" />+250-782-467-899</p>
  <p className="gmail"><MdOutlineMail className="pesonalemail" />readrwa@gmail.com</p>
 

 </div>
 <div className="visitpeople">
    <h2> Book Your  Place In Our Book  Shop</h2>
    <div className='visitname'>
                <div className='visittfirst'>
              <label className='visit-firstname-label'>FirstName</label><br/><br/>
            <input type='text' required className='visittfirst2'></input>
            </div>
            <div className='visitsecond'>
            <label className="visit-surname-label">SecondName</label><br/><br/>
            <input type='text' required className='visitsecond3'></input>
            </div>
            </div> 
            <div className='visitthird'>
              <label className='visit-third-label'>Email</label><br/><br/>
            <input type='text' required className='visitfirst4'></input>
            </div>
            <div className='visitfouth'>
              <label className='visit-fouth-label'>Method of payments</label><br/><br/>
      <select name="" id="card">
        
      <option value="">credit card</option>
      <option value="">visa card</option>
      <option value="">payroll</option>
      
     
     </select>
     <div className='visitfith'>
              <label className='visit-fith-label'>Leave A Message</label><br/><br/>
            </div>
            </div>
            </div>
</div>

<Footer/>
</>
  )
}

export default Visit
