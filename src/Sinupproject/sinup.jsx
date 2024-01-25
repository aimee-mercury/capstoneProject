import axios from 'axios'
import './sinup.css'
import Footer from '../Footer/Footer'
import Navigation from '../components/Navigation'
import { useState } from 'react'

function SinUp() {
  const [firstName, setFirstName]= useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
 

  const handleSignUp = (e) =>{
    e.preventDefault();
    console.log("submited successfully................");

    const data = {
      firstName: firstName,
      secondName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }
    console.log(data)
    axios.post("http://localhost:5000/api/expauth/v1/auth/signup",data).then((res)=>{
        console.log("response: ",res.data)
    }).catch((error)=>{
      console.log("error while signing up......",error)
    })
  }

  

  
  return (
    <>
    <div className='signup-container'>
     <Navigation/>
       <div className='wrapper'> 
        
        <form action='' method='POST' onSubmit={handleSignUp}>
               <h1 className='signup-heading'>SignUp</h1><br/><br />
              
              <div className='name'>
                <div className='sinup2'>
              <label className='signup-firstname-label'>FirstName</label><br/><br/>
            <input type='text' required className='sinupfirst' name="firstName" onChange={(e)=>setFirstName(e.target.value)}></input>
            </div>
            <div className='sinup3'>
            <label >LastName</label><br/><br/>
            <input type='text' required className='sinupsecond' name="secondName" onChange={(e)=>setLastName(e.target.value)}></input>
            </div>
            </div> 
           
            <div className="sinup3">
            <label >Email</label><br/>
            <input type="email"  required className='sinupthird' name="email" onChange={(e)=>setEmail(e.target.value)}/>

            </div>

 
            <div className="sinup5">
            <label >password</label><br/>
            <input type="password"  required className='sinupsix' name="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>

            </div><br/>
        
            <div className="sinup5">
            <label >conferm password</label><br/>
            <input type="password"  required className='sinupsix' name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)}/><br/>

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
  
    <Footer/> 
    </>
  )
}

export default SinUp