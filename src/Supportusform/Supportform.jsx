
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { TbArrowBack } from "react-icons/tb";
import React from 'react'
// import './sinup.css'

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
            
 </div>


</div>





</>

  )
}

export default Support;