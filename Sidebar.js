import React from 'react'
import './sidebar.css'
function Sidebar() {
    return (
        <div>
             <div className="sidebar">
      <div className="sidebarWrapper">
      <h3> Categories</h3>

        <ul className="sidebarList">
          <li className="sidebarListItem">
            
            <span className="sidebarListItemText">Dairy</span>
          </li>
          <li className="sidebarListItem">
            
            <span className="sidebarListItemText">Fruits</span>
          </li>
          <li className="sidebarListItem">
          
            <span className="sidebarListItemText">Vegetables</span>
          </li>
          <li className="sidebarListItem">
        
            <span className="sidebarListItemText">Bakery</span>
          </li>
          <li className="sidebarListItem">
          
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
         
            <span className="sidebarListItemText">Questions</span>
          </li>
      
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
     
      </div>
    </div>
        </div>
    )
}       

export default Sidebar
