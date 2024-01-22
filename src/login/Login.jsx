import React from 'react'
import './Login.css'
<<<<<<< HEAD


import { TbArrowBack } from "react-icons/tb";
=======
>>>>>>> 82b38aba08dfc9ef09b528d88e483ba422adb5d6
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../components/Navigation';

function Login() {
  return (
    <>
    <div>
      <Navigation/>
    <div className='app'>
        <div className='loginContainer'>
            <h1 className='welcome'>WELCOME TO WISDOM LIBRARY</h1>
            <h3 className='please'>Please enter your details</h3>
<<<<<<< HEAD
            </div>
         
            <div className='input-container'>
              <label> Email</label><br/><br/>
              <input type="email"required  className='email'/>
            </div> <br />
                <div className='input-container'>
                    <label>Password</label> <br/><br />
                    <input type="password" required  className='password'/><br /> <br />
=======
           
           <div className='login-form'>
           <div className='input-container'>
                    <label>EMAIL</label> <br/><br />
                    <input type="text" required  className='password'/><br />
           
             <br />
                
                <label>Password</label> <br/><br />
                <input type="password" required  className='password'/><br /> <br />
>>>>>>> 82b38aba08dfc9ef09b528d88e483ba422adb5d6
                <input type="checkbox" /> Remember me <span className='login-span-1'>Forgot password </span>
                </div>
<br /><br />
                <button className='loginbut'>USER</button>

                <Link to='/dashboard'><button className='loginbut'>ADMIN</button></Link><br /><br />
                </div>
                    <p  className='add'>Don't have an account?<Link to='/signup' className='login-span-2'>Sign up</Link></p>
                </div>
                
                
                <Footer/>
   </>
  )
}



export default Login
