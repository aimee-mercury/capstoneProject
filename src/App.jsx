
import SinUp from './Sinupproject/sinup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './login/login';
import Support from './Supportusform/Supportform';
import Home from './home';
import './App.css'
import Nonfiction from './Non-Fiction/Nonfiction';
import Fiction from './Fiction/Fiction';



function App() {
 

  return (
    <>


  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SinUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/supportus' element={<Support/>}/>
      <Route path='/non-fiction' element={<Nonfiction/>}/>
      <Route path='/fiction' element={<Fiction/>}/>
      {/* <Route path='/visitus' element={<VisitUs/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/> */}
    </Routes>
    </Router>

    </>
  );
}
export default App

