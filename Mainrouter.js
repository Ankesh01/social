import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Post from './Components/Post'

function Mainrouter() {
    return (
        <div>
             <Navbar />
            <Routes>
            {/* <Route exact path="/Login" element={<Login/>}></Route> */}
            <Route exact path="/Signup" element={<Signup/>}></Route>
            <Route exact path="/Post" element={<Post/>}></Route>
       
            </Routes>
        </div>
    )
}

export default Mainrouter
