import React from 'react'
import './menu.scss'


function Menu({ menuOpen, setMenuOpen}) {
    return (
        // add active class to the navbar depending on the state of menuOpen
        // if menuOpen is true, add active class
        <div className={"menu " + (menuOpen && "active")} id="myMenu">
            <ul onClick={()=>setMenuOpen(!menuOpen)}>
                <li>
                    <a href="#intro">Home</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#works">Work Details</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                
            </ul>
        
        </div>
    )
}

export default Menu
