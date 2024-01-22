
import Login from './login/Login';
import Support from './Supportusform/Supportform';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Category from './Categories/Categories';
import Supportus from './Support Us/supportus';
import SinUp from './Sinupproject/sinup';
import Dashboard from './Dashboard/Dashboard';


function App() {
 

  return (
    <>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Categories' element={<Category/>}/>
      <Route path='/Support' element={<Supportus/>}/>
      <Route path='/signup' element={< SinUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/supportus' element={<Support/>}/>
      {/* <Route path='/visitus' element={<VisitUs/>}/> */}
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </Router>

    </>
  );
}
export default App

