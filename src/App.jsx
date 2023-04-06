import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import './App.css'
import { useState } from "react";


function App() {
  const [notLogin, Login] = useState(0);
  return (
    <div className="app">
      <BrowserRouter>
    <Routes>
        <Route expect path="/" element={<Home Login={Login}/>} />
        <Route expect path="/about" element={<About />} />
        <Route expect path="/contact" element={<Contact />} />
        <Route expect path="/profile/:id" element={<Profile />} />
        <Route expect path="/admin" element={notLogin==1 && <Admin Login={Login} />} />
    </Routes>
    <nav id="menu">
    <NavLink to="/" >Home</NavLink>
    <NavLink to="/about" >About</NavLink>
    <NavLink to="/contact" >Contact</NavLink>
    <NavLink to="/profile/45" >Profile</NavLink>
    <NavLink to="/admin" >For Admin!!</NavLink>
    </nav>
    
    </BrowserRouter>
    </div>
    
  );
}

export default App;
