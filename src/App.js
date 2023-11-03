// import logo from './logo.svg';
import './App.css';
import Navbar from './HomePage/Navbar';
import Mainpage from './HomePage/Mainpage';
import AboutUs from './AboutPage/AboutUs';
import DoRegistration from './Registration/DoRegistration';
import ReRegistration from './Registration/ReRegistration';
import AdLogin from './Registration/AdLogin';
import DoLogin from './Registration/DoLogin';
import ReLogin from './Registration/ReLogin';
import ForgotPassword from './Registration/ForgotPassword';
import Contactus from './Contactus/Contactus'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Mainpage/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/adlogin' element={<AdLogin/>} />
          <Route path='/dologin' element={<DoLogin/>} />
          <Route path='/relogin' element={<ReLogin/>} />
          <Route path='/doregstration' element={<DoRegistration/>} />
          <Route path='/reregistration' element={<ReRegistration/>} />
          <Route path='/forgotpassword' element={<ForgotPassword/>} />
          <Route path='/contactus' element={<Contactus/>} />

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
