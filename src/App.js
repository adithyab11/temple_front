import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Adminlogin from './Components/Adminlogin';
import AddPooja from './Components/AddPooja';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/adminlogin" element={<Adminlogin/>}/>
      <Route path="/addpooja" element={<AddPooja/>}/>
      
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
