import React from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Design from './components/Design';


import Navbar from './components/Navbar';

import { Home, CreatePost } from './pages';
const App = () => {
  return (
    
       <BrowserRouter>
    
    <main >
    <Design/>
      <Navbar/>
     
      <div className="sm:p-8 px-4 py-8 w-full   min-h-[calc(100vh-73px)]">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
      </div>
      
    </main>
  </BrowserRouter>
    
  )
}

export default App