import React from 'react'
import "./navbar.css"
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-Left">
                    <span className="logo">Logo</span>
                </div>
                <div className="navbar-Center">
                        <div className="searchbar">
                            <input type="search" className="search-input" placeholder="Search..."/>
                        </div>
                </div>
                <div className="navbar-Right">
                        <div className="Links">
                            <Link to="/" className="link">Home</Link>
                            <Link to="/signup" className="link">Signup</Link>
                            <Link to="/post" className="link">Posts</Link>
                            <Link to="/cart" className="link">Cart</Link>
                       
                        </div>
                </div>
             

            </div>
        </>
    )
}

export default Navbar
