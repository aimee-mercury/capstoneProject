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
              
            
            <div className="sinup3">
            <label  className='co'>Full Name</label><br/>
            <input type="text"  required  className='sinupthird' name="firstName" onChange={(e)=>setFirstName(e.target.value)}/><br/>

            </div><br />



            <div className="sinup3">
            <label >Email</label><br/>
            <input type="email"  required className='sinupthird' name="email" onChange={(e)=>setEmail(e.target.value)}/>

            </div>

 
            <div className="sinup5">
            <label >password</label><br/>
            <input type="password"  required className='sinupsix' name="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>

            </div><br/>
        
            <div className="sinup9">
            <label  className='co'>confirm password</label><br/>
            <input type="password"  required className='sinupsix' name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)}/><br/>

            </div><br/><br/>

            <div className="remember">
            <input type="checkbox" className='larger-checkbox'/> I accept Terms of use and  privacy policy 

            <br/><br/>
            
            <button type="submit" className='btnsinup'>SignUp</button><br/><br/>


            <br/><br/> 
            <button type="submit" className='btnsinup'>SignUp</button>

            <br/><br/>
            
            {/* <button type="submit" className='btnsinup'>SignUp</button><br/><br/> */}
{/* >>>>>>> 512b7f56dc423ab2c173821e143205b3b6973134 */}
>>>>>>> 658cfda8a9fae49a872d97fe8969a60673b4659f
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