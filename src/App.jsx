
import './App.css'
import Sinup from './Sinupproject/sinup'
import Profiles from './profile/Profiles'
import non1 from '../public/non1.jpg'
import non2 from '../public/non2.jpg'
import non3 from '../public/non3.jpg'
import non4 from '../public/non4.jpg'
import non5 from '../public/non5.jpg'
import non6 from '../public/non6.jpg'
import non7 from '../public/non7.jpg'
import non8 from '../public/non8.jpg'
import non10 from '../public/non10.jpg'
import non11 from '../public/non11.jpg'
import non12 from '../public/non12.jpg'
import Footer from './Footer/Footer'
import Production from './Production/production'
import Category from './Categories/Categories'
import Newb from './News & Blog/newsb'
import Supportus from './Support Us/supportus'
import Navigation from './components/Navigation'
import About from './components/About'
import Support from './Supportusform/Supportform'



function App() {
 

  return (
    <>
    <Navigation/>
    <About/>
    <Category/>
    <Production/>
    <Newb/>
    <Supportus/>
     <Sinup/> 
        <Profiles image={non1} name="Maya Angelou" description= "Maya Angelou (April 4, 1928 – May 28, 2014) was an American poet"  />  
        <Profiles image={non2} name="The Boys in the Boat" description=" the Boys in the Boat is a non-fic2013. ."/>                                                                    
        <Profiles image={non3} name="Other Slavery" description="This novel explores the complex relationships between slaves"  />                                                                                                                           
        <Profiles image={non12} name="Becomming of Michelle Obama" description= " from her childhood in the South Side " />
        <Profiles image={non5} name="The Dairly of A young Girl" description= "This poignant and influential diary is the ."/>
        <Profiles image={non6} name="Maya Angelou" description= "Maya Angelou (April 4, 1928 – May 28, 2014) " />
        <Profiles image={non7} name="All things Bright and Beatiful"description= " recount his experiences with a wide" />
        <Profiles image={non8} name="in the Heart of the Sea" description= "the harrowing true story of the whal Moby-Dick." />
        <Profiles image={non10} name="The Bug of girl" description= " booklife of Maria Merian, a pioneering naturalist" />
        {/* <Profiles image={non11} name="Ghost Of Tsunami" description= " is a recent or niche publication, I recommend checking with local " />
        <Profiles image={non12} name="Becomming of Michelle Obama" description= " from her childhood in the South Side " />
         <button className='btnlibrary'>add new book</button> */}
         <Support/>
    <Footer/>
       
    </>
  );
}

export default App

