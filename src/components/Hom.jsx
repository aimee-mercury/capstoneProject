
import React from "react";
import "./home.css";
import Navigation from "./Navigation";
import { useNavigate } from 'react-router-dom';

function Home() {
   const navigate = useNavigate();
 
   const handleClick = () => {
     const shouldGoToSignIn = true;
 
     if (shouldGoToSignIn) {

       navigate('/collection');
 
     } else {
      
       navigate('/signup');
 
     }
   };

  return (
    <>
      <div>
        <Navigation />
        <div className="ae">
          <h1 className="we">
            Wisdom Library space <br /> to <span>re</span>ad, <span>le</span>
            arn, <span>gr</span>ow and <br /> <span>co</span>nnect.
          </h1>
          <p className="we1">Open every day 9:00 am - 10:00 pm <br /><br /> Do you want a book?<br /><br />
          <button onClick={handleClick} className="landing-letsget-btn">Let's get Started</button></p>
        </div>
      </div>
    </>
  );
}

export default Home;
