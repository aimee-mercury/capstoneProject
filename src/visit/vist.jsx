import React from 'react'

function vist() {
  return (
    
    <div>
    <div className='app'>
        <div className='loginContainer'>
            <h1 className='welcome'>Book Your Bokk In Our Book Shoop</h1>
            </div>
         
            <div className='input-container'>
              <label> first name</label><br/><br/>
              <input type="text"required  className='firstname'/>
            </div> <br />
                <div className='input-container'>
                    <label> Secord nName</label> <br/><br />
                    <input type="text" required  className='secondname'/><br /> <br />
                    <div >
                       <label >Methods of Payment</label> 
                       <p>credit card</p>
                       <input type="text"  required className='payment' />
                        </div>   
                </div>
                
                  </div>
                </div>
                
   

  )
}

export default vist
