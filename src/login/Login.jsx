import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../components/Navigation';
function Login() {
  return (
    <>
    <div>
      <Navigation/>
      <div className='ap'>

      
    <div className='app'>
        
            <h1 className='welcome'>WELCOME TO WISDOM LIBRARY</h1>
            <h3 className='please'>Please enter your details</h3>
          
         
            <div className='input-container'>
              <label> Email</label><br/><br/>
              <input type="email"required  className='password'/>
            </div> <br />
                <div className='input-container'>
                    <label>Password</label> <br/><br />
                    <input type="password" required  className='password'/><br /> <br />
                <input type="checkbox" /> Remember me <span className='login-span-1'>Forgot password </span>
                </div>

<br /><br />
                <button className='loginbut'>Login as User</button>

                <Link to='/dashboard'><button className='loginbut'>Login as Admin</button></Link><br /><br />
                <p  className='add'>Don't have an account?<Link to='/signup' className='login-span-2'>Sign up</Link></p>
                </div>
                </div>
                </div>
           
              
                <Footer/>
   </>
  )
}



export default Login
