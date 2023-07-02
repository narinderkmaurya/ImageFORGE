import React from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Design from './components/Design';


import Navbar from './components/Navbar';

import { Home, CreatePost } from './pages';
import Contact from './pages/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    
       <BrowserRouter>
    
    <main className='lg:mx-24'>
    <Design/>
      <Navbar/>
     
      <div className="sm:p-8 px-4 py-8 w-full   min-h-[calc(100vh-73px)]">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer/>
    </main>
  </BrowserRouter>
    
  )
}

export default App