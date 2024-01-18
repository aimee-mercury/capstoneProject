import React , {useState} from 'react';
<<<<<<< HEAD
import './navigation.css';                                                        
=======
import './navigation.css';
import { AppProvider } from '../booklist/book';
>>>>>>> 4c2632a492afcd43281a64483bc0c33c607adbe2
import { IoSearch } from "react-icons/io5";
import logo from '../assets/1.jpg'


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
<<<<<<< HEAD
   <img src={logo} alt="Our logo" className='ai'/>

    <ul className={active}>
=======
    <img src="./Screenshot 2024-01-12 114515.png" alt="" className='ai' />
<AppProvider>
<ul className={active}>
>>>>>>> 4c2632a492afcd43281a64483bc0c33c607adbe2
     <li className="nav__item"><a href="#" className='nav__link'>Home</a></li> 
     <li className="nav__item"><a href="#About" className='nav__link'>About Us </a></li>
     <li className="nav__item"><a href="#categories" className='nav__link'>Collection </a></li>
     <li className="nav__item"><a href="#visit" className='nav__link'>visit Us</a></li>
     <li className="nav__item"><a href="#" className='nav__link'>Support Us</a></li>
     <button className="" id="me">Log in</button>

    </ul>
</AppProvider>
    

    <div className={toggleIcon} onClick={navToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
  </nav>
  </div>
   
  <div className='ae'>
  <div>
    <h1 className='ae2'>
Wisdom Library space to <br />
read, learn, grow and connect.
     </h1>
     </div>
     <div className='ae2-para-input'>   
<p className='ae2'>Open every day 9:00 am - 10:00 pm</p>
 <input type="text"  placeholder='Search a book' className='ae1'/><span className='ai'><IoSearch className='search-icon'/></span>
 </div>
  </div>

  {/* new section of about us  */}

</div>
  </>
  );
}

export default Navigation; 