
import Login from './login/login';
import Support from './Supportusform/Supportform';
import Home from './home';


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
      {/* <Route path='/visitus' element={<VisitUs/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/> */}
    </Routes>
    </Router>

    </>
  );
}
export default App

