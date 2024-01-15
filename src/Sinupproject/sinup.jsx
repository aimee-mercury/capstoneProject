import React from 'react'
import './sinup.css'

function SinUp() {
  return (
    <>
      
     
     <div className='container'>
       <div className='wrapper'> 
        <div className='sinup'>
        <form action='' method='POST'>
              <h1>SignUp</h1><br/><br/><br/>
              
              <div className='name'>
                <div className='sinup2'>
              <label className='signup-firstname-label'>FirstName</label><br/><br/>
            <input type='text' required className='sinupfirst'></input>
            </div>
            <div className='sinup3'>
            <label >SurName</label><br/><br/>
            <input type='text' required className='sinupsecond'></input>
            </div>
            </div> 
           
            <div className="sinup3">
            <label >Email</label><br/>
            <input type="email"  required className='sinupthird'/>

            </div>

            <div className="sinup4">
            <label >Password</label><br/>
                <input type="password"  required  className='sinupfive'/>
            </div>
            <div className="sinup5">
            <label >confirm password</label><br/>
                <input type="password"  required className='sinupsix'/><br/>

            </div><br/><br/>
            <div className="remember">
            <input type="checkbox" className='larger-checkbox'/> I accept Terms of use and  privacy policy 
            <br/>
            <button type="submit" className='btnsinup'>SignUp</button><br/><br/>
            <div className="register-link">
                <p className='sinup6'>Already have an account?<a href="login" >Login In Here</a></p>
                </div>
  </div>
            </form>
           
            
        </div>
    </div>  
    </div>
    </>
  )
}

export default SinUp