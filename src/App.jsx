import './App.css'
import SinUp from './Sinupproject/sinup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './login/login';
import Support from './Supportusform/Supportform';
import Home from './home';
import Visit from './visit/vist';

function App() {
 

  return (
    <>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SinUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/supportus' element={<Support/>}/>
      <Route path='/visit' element={<Visit/>}/>
      {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
    </Routes>
    </Router>
    </>
  );
}
export default App

