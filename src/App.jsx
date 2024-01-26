
import Login from './login/Login';
import Support from './Supportusform/Supportform';

import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Category from './Categories/Categories';
import Supportus from './Support Us/supportus';
import SinUp from './Sinupproject/sinup';
import Visit from './visit/Visit';
import Members from './Dashboardd/Members';
import Settings from './Dashboardd/Settings';
import Finance from './Dashboardd/Finance';
import Dash from './Dashboardd/Dash';
import SearchResultsPage from './components/SearchResultsPage';
import Signout from './Dashboardd/Signout';
import Fiction from './Fiction/Fiction';
import Nonfiction from './Non-Fiction/Nonfiction';
import Academics from './profile/Academics/Academic';
import Bibiliograph from './profile/Biography/Biogr';
import Books from './Dashboardd/Books';

function App() {
 

  return (
    <>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path="/search-results" element={<SearchResultsPage />} />
      <Route path='/About' element={<About/>}/>
      <Route path='/Categories' element={<Category/>}/>
      <Route path='/Support' element={<Supportus/>}/>
      <Route path='/signup' element={< SinUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/fiction' element={<Fiction/>}/>
      <Route path='/non-fiction' element={<Nonfiction/>}/>
      <Route path='/bibiograph' element={<Bibiliograph/>}/>
      <Route path='/academics' element={<Academics/>}/>
      <Route path='/supportus' element={<Support/>}/>
      <Route path='/visitus' element={<Visit/>}/>
      <Route path='/dashboard'element={<Dash/>}/>
        <Route path='/books'element={<Books/>}/>
        <Route path='/members'element={<Members/>}/>
        <Route path='/finance'element={<Finance/>}/>
        <Route path='/settings'element={<Settings/>}/>
        <Route path='/signout'element={<Signout/>}/>
    </Routes>
    </Router>

    </>
  );
}
export default App



