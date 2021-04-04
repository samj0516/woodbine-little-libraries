import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"
import '../../css/mystyles.css'

export const NavBar = (props) => {
    return (
<>   
<div className="stickyNav">
    <div className="deco-line-teal"></div>
    <div className="deco-line-orange"></div>
    <header className="header level is-small">
        <figure className="image level has-text-centered-touch">
            <img className="" src="../lfl-logo_50.png" alt="little free library logo" />
        </figure>
        
       <h1 className="title is-size-2-touch is-size-6-mobile has-text-centered">Woodbine's Little Free Libraries</h1> 
       
    </header>
    
    <hr className="deco-line"></hr>
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">Home</Link>
           
            <Link className="navbar-item" to="/create">Add Library</Link>
            
        </div>

           
        
    </nav><hr className="deco-line-liver"></hr>
</div>

</>
    )
}


