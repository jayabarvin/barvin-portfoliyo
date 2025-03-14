import React from 'react';
import './App.css';
import Navbar from './Componenets/Navbar/Navbar';
import Hero from './Componenets/Hero/Hero';
import About from './Componenets/About/About';
import Skills from './Componenets/Skills/Skills';
import Mywork from './Componenets/MyWork/MyWork';
import Contact from './Componenets/Contact/Contact';
import Footer from './Componenets/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Mywork/>
      <Contact/>
      <Footer/>
      

    </div>
  );
}

export default App;
