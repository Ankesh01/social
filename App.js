import React from 'react'
// import Navbar from './Components/Navbar'
// import Post from './Components/Post'
import Mainrouter from './Mainrouter'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    {/* <Signup />
    <Login /> */}
    {/* <Interval/> */}
    <Mainrouter />  
  </BrowserRouter>
  )
}

export default App
