
import Login from './login/Login';
import Support from './Supportusform/Supportform';

import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Category from './Categories/Categories';
import Supportus from './Support Us/supportus';
import SinUp from './Sinupproject/sinup';
import Visit from './visit/Visit';
<<<<<<< HEAD
import Books from './Dashboardd/Books'
import Finance from './Dashboardd/Finance'
import Help from './Dashboardd/Help'
import Settings from './Dashboardd/Settings'
import Signout from './Dashboardd/Signout'
import Dash from './Dashboardd/Dash'
import Members from './Dashboardd/Members'

=======
import Dashb from './Dashboard/Dashb';
import Book from './Dashboard/Book';
import Members from './Dashboard/Members';
import Settings from './Dashboard/Settings';
import Finance from './Dashboard/Finance';
import Help from './Dashboard/Help';

import SearchResultsPage from './components/SearchResultsPage';

import Fiction from './Fiction/Fiction';
import Nonfiction from './Non-Fiction/Nonfiction';
import Academics from './profile/Academics/Academic';
import Bibiliograph from './profile/Biography/Biogr';
>>>>>>> db2846e5f885c019f467134b91ee1ff4928ca70c

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
        <Route path='/help'element={<Help/>}/>
        <Route path='/signout'element={<Signout/>}/>
    </Routes>
    </Router>

    </>
  );
}
export default App



