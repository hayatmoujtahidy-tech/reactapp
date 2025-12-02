import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
     <BrowserRouter>

     <Navbar/>
     <Layout/>

     <Routes>

      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/Services" element={<Services/>} />
      
     </Routes>

     <Footer/>

     </BrowserRouter>
        
    </div>
  )
}

export default App
