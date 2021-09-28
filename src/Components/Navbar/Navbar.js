import React from "react";
import "../Navbar/navbar.scss";
function Navbar({ menuOpen, setMenuOpen }) {
  return (
    // add active class to the navbar depending on the state of menuOpen
    // if menuOpen is true, add active class
    <div className={"navbar " + (menuOpen && "active")} style={{overflow:"hidden"}}>
      <div className="wrapper" >
        <div className="left">
          <a href="#intro" className="logo">
            <img src="/assets/coding.svg" alt="settings" />
            Ademie
          </a>

        </div>
        <div className="right" >
          {/* set menuOpen to its opposite state */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
