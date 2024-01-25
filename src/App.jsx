
import Login from './login/Login';
import Support from './Supportusform/Supportform';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Category from './Categories/Categories';
import Supportus from './Support Us/supportus';
import SinUp from './Sinupproject/sinup';
import Visit from './visit/Visit';
import Books from './Dashboardd/Books'
import Finance from './Dashboardd/Finance'
import Help from './Dashboardd/Help'
import Settings from './Dashboardd/Settings'
import Signout from './Dashboardd/Signout'
import Dash from './Dashboardd/Dash'
import Members from './Dashboardd/Members'


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
      <Route path='/dashboard'element={<Dash/>}/>
        <Route path='/books'element={<Books/>}/>
        <Route path='/members'element={<Members/>}/>
        <Route path='/finance'element={<Finance/>}/>
        <Route path='/settings'element={<Settings/>}/>
        <Route path='/help'element={<Help/>}/>
        <Route path='/signout'element={<Signout/>}/>
    </Routes>
    </Router>

    </>
  );
}
export default App

