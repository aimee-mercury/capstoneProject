
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { TbArrowBack } from "react-icons/tb";
import React from 'react'
import './Supportform.css'
import Footer from "../Footer/Footer";


function Support() {
  return (   
<>
<div className='container'>
 <div className='supportus'>

  <h2>Support Us</h2>
  <p><br/><CiLocationOn />Kigali - Rwanda</p>
  <p><IoIosCall />+250-782-467-899</p>
  <p><MdOutlineMail />readrwa@gmail.com</p>
  <button>Back<TbArrowBack /></button>

 </div>
 <div className="supportus2">
    <h2> Raise your hand  to donate</h2>
    <div className='supportname'>
                <div className='supportfirst'>
              <label className='support-firstname-label'>FirstName</label><br/><br/>
            <input type='text' required className='supportfirst2'></input>
            </div>
            <div className='supportsecond'>
            <label >SurName</label><br/><br/>
            <input type='text' required className='supportsecond3'></input>
            </div>
            </div> 
            <div className='supportthird'>
              <label className='support-third-label'>email</label><br/><br/>
            <input type='text' required className='supportfirst4'></input>
            </div>
            <div className='supportfouth'>
              <label className='support-fouth-label'>Method of payments</label><br/><br/>
      <select name="" id="">
      <option value="">credit card</option>
      <option value="">you</option>
      <option value="">he</option>
      <option value="">them</option>
      <option value="">let</option>
    
     </select>
     <div className='supportfith'>
              <label className='support-fith-label'>Leave A Message</label><br/><br/>
              <textarea></textarea>
              <button>Sumbit</button>
            </div>
            </div>
            </div>
</div>
<Footer/>
</>

  )
}

export default Support;