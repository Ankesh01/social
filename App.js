import React from 'react'
import Navbar from './MyComponents/Navbar'
import Post  from './MyComponents/Post'
import { Routes, Route } from "react-router-dom";
import Signup from './MyComponents/Signup'
import Cart from './MyComponents/Cart';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Post/>} />
        <Route exact path="/products" element={<Signup/>} />
        <Route exact path="/cart" element={<Cart/>} />
       
      </Routes>
    </div>
  )
}

export default App
