
import Login from './login/Login';
import Support from './Supportusform/Supportform';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Category from './Categories/Categories';
import Supportus from './Support Us/supportus';
import SinUp from './Sinupproject/sinup';
import Dashboard from './Dashboard/Dashboard';
import Visit from './visit/Visit';
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
      <Route path='/visitus' element={<Visit/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/dashboard' element={<Dashb/>}/>
      <Route path='/books' element={<Book/>}/>
      <Route path='/members' element={<Members/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/finance' element={<Finance/>}/>
      <Route path='/help' element={<Help/>}/>
    </Routes>
    </Router>

    </>
  );
}
export default App

