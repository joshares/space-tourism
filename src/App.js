import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Destination from './Destination';
import Crew from './Crew';
import Technology from './technology';
import Navbar from './Navbar';

function App() {
  const [background, setBackground] = useState('home')


  useEffect(()=> {
    document.documentElement.className = background
    // eslint-disable-next-line
  }, [background])
  return (
    <BrowserRouter>
    <Navbar setBackground={setBackground} />
    <Routes>
      <Route  index element={<Home setBackground={setBackground}/>}/>
      <Route path='destination' element={<Destination/>}/>
      <Route path='crew' element={<Crew/>}/>
      <Route path='technology' element={<Technology/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
