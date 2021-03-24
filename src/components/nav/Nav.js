import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

export const NavBar = (props) => {
    return (
<>
    <section className="section is-warning is-small">
        <figure className="image ">
            <img src="../lfl-logo.png" alt="little free library logo" />
        </figure>
       <h1 className="title">Woodbine's Little Libraries</h1> 
    </section>
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                {/* <img src="" alt="Little Free Library logo" width="164" height="41" /> */}
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    </nav>
</>
    )
}



{/* <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Libraries</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/create">Add Library</Link>
            </li>
            
        </ul> */}