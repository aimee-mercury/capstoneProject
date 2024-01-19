
import Login from './login/login';
import Support from './Supportusform/Supportform';
import Home from './Home';
import './App.css'
import Nonfiction from './Non-Fiction/Nonfiction';
import Fiction from './Fiction/Fiction';
import Signup from './Sinupproject/sinup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Categories from './Categories/Categories';
import Supportus from './Support Us/supportus';
function App() {
 

  return (
    <>

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

