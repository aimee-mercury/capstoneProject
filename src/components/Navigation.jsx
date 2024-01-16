import React , {useState} from 'react';
import './navigation.css';

import { IoSearch } from "react-icons/io5";


function Navigation() {
  // icon animation
 const [active, setActive] = useState("nav__menu");
 const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    //togglerIcon

    toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon("nav__toggler");
  };
  return (
   <>
    <div className='me'> 
   <div >
   <nav className="nav">
    <img src="./Screenshot 2024-01-12 114515.png" alt="" className='ai' />

    <ul className={active}>
     <li className="nav__item"><a href="#" className='nav__link'>Home</a></li> 
     <li className="nav__item"><a href="#About" className='nav__link'>About Us </a></li>
     <li className="nav__item"><a href="#categories" className='nav__link'>Collection </a></li>
     <li className="nav__item"><a href="#visit" className='nav__link'>visit Us</a></li>
     <li className="nav__item"><a href="#" className='nav__link'>Support Us</a></li>
     <button className="" id="me"><a href="#" className=''>Log in</a></button>

    </ul>

    <div className={toggleIcon} onClick={navToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
  </nav>
  </div>
   
  <div className='ae'>
  
    <h1 className='ae2'>
Wisdom Library space to <br />
read, learn, grow and connect.
     </h1>
    
<p className='ae2'>Open every day 9:00 am - 10:00 pm</p>
 <input type="text"  placeholder='Search a book' className='ae1'/><button className='ai'><IoSearch/></button>
  </div>

  {/* new section of about us  */}

</div>
  </>
  );
}

export default Navigation; 