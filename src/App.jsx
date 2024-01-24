
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
import Fiction from './Fiction/Fiction';
import Nonfiction from './Non-Fiction/Nonfiction';
import Bibiliograph from './profile/Biography/Biogr';
import Academics from './profile/Academics/Academic';



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
      <Route path='/fiction' element={<Fiction/>}/>
      <Route path='/non-fiction' element={<Nonfiction/>}/>
      <Route path='/bibiograph' element={<Bibiliograph/>}/>
      <Route path='/academics' element={<Academics/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </Router>

    </>
  );
}
export default App

