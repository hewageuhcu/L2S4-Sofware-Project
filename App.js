import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homes from './pages/Homes';
import Logins from './pages/Logins';
import Contacts from './pages/Contacts';
import Welcome from './pages/Welcome';
import ForPassword from './pages/Forpassword';
import JobDetails1 from './pages/Jobdetails1';
import Joballocation from './pages/Joballocation';
import NewJob from './pages/NewJob';



function App() {
  return (
    <div className="App">



      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homes/>}></Route>
          <Route path='/lg' element={<Logins/>}></Route>
          <Route path='/ct' element={<Contacts/>}></Route>
          <Route path='/wl' element={<Welcome/>}></Route>
          <Route path='/fp' element={<ForPassword/>}></Route>
          <Route path='/jd1' element={<JobDetails1/>}></Route>
          <Route path='/ja' element={<Joballocation/>}></Route>
          <Route path='/nj' element={<NewJob/>}></Route>
       
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
