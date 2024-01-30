
import Login from './login/Login';
import Support from './Supportusform/Supportform';
import Hom from './components/Hom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Category from './Categories/Categories';
import Supportus from './Support Us/supportus';
import SinUp from './Sinupproject/sinup';
import Visit from './visit/Visit';
import Books from './Dashboard/Books'
import Finance from './Dashboard/Finance'
import Settings from './Dashboard/Settings'
import Signout from './Dashboard/Signout'
import Members from './Dashboard/Members'
import Dashboard from './Dashboard/Dashboard';
import Home from './Home';
import Collection from './Collection/Collection';


function App() {
 

  return (
    <>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Hom/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Categories' element={<Category/>}/>
      <Route path='/Support' element={<Supportus/>}/>
      <Route path='/signup' element={< SinUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/supportus' element={<Support/>}/>
      <Route path='/visitus' element={<Visit/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
        <Route path='/books'element={<Books/>}/>
        <Route path='/members'element={<Members/>}/>
        <Route path='/finance'element={<Finance/>}/>
        <Route path='/settings'element={<Settings/>}/>
        <Route path='/signout'element={<Signout/>}/>
        <Route path='/collection' element={<Collection/>}/>
    </Routes>
    </Router>

    </>
  );
}
export default App

