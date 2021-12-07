import React,{useState} from 'react'
import './post.css'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

import { NavLink } from 'react-router-dom';
import {Posts} from "./dummyData"

function Post() {

    const dispatch = useDispatch();
    const handleOrder = (currElm) =>{
        // product.push(id)
        console.log(currElm)
    //    setProduct(currElm)
       dispatch(addCart(currElm));    
       

    }
    return (
        <>
           <div className="post-container">
                
            <div className="post-side">
   
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


           <section className="main-card--container">
           
            {
               Posts.map((currElm) => {
                   return( 
                <div className="card-container" key={currElm.id}>
                <div className="card">
                <div className="card-body">
                    {/* <span className="card-number card-circle subtle">{currElm.id}</span> */}
                    <span className="card-author subtle">{currElm.title}</span>
                    <h2 className="card-title">{currElm.type}</h2>
                    
                     <span className="card-description subtle">{currElm.description}</span>     
                  
                </div>
                <img  src={currElm.filename} className="class-media"  width="500" height="600" alt=""/>
                <button className="card-tag subtle" onClick={()=>handleOrder(currElm)}>Order Now</button>
            </div>
        </div>
                    )

                })
            }
        </section>
        </div>
   
    
        
          </>
    )
}

export default Post
