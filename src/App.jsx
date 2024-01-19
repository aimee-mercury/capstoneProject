<<<<<<< HEAD

import SinUp from './Sinupproject/sinup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './login/login';
import Support from './Supportusform/Supportform';
import Home from './home';
import './App.css'
import Nonfiction from './Non-Fiction/Nonfiction';
import Fiction from './Fiction/Fiction';


=======
import Signup from './Sinupproject/sinup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login/login';
import Support from './Supportusform/Supportform';
import Nonfiction from './Non-Fiction/Nonfiction';
import Fiction from './Fiction/Fiction';
import Home from './components/Home';
import About from './components/About';
import Categories from './Categories/Categories';
import Supportus from './Support Us/supportus';
<<<<<<< HEAD
=======
>>>>>>> cd0312bdf04923032898afa4ca669cb28f0fc806

>>>>>>> 2d98588cac9945ac53f33a68891dec2db3e290b6
function App() {
 

  return (
    <>
<<<<<<< HEAD

=======
<<<<<<< HEAD


=======
  
>>>>>>> cd0312bdf04923032898afa4ca669cb28f0fc806
>>>>>>> 2d98588cac9945ac53f33a68891dec2db3e290b6
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Categories' element={<Categories/>}/>
      <Route path='/Support' element={<Supportus/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/supportus' element={<Support/>}/>
      <Route path='/non-fiction' element={<Nonfiction/>}/>
      <Route path='/fiction' element={<Fiction/>}/>
    
    </Routes>
    </Router>

    </>
  );
}
export default App

