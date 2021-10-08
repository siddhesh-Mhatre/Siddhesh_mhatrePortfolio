import React, { useState } from "react";
import menu from "C:/porfolio/portfolio/src/images/menu.png";
import {Link} from "react-scroll"
const Navbar = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("HN").style.top = "0px";
    } else {
      document.getElementById("HN").style.top = "-81px";
    }
    prevScrollpos = currentScrollPos;
  };

  const [Hgt, setHgt] = useState(`0px`);
  const fun = () => {
    console.log("click");
    if (Hgt === `0px`) {
      setHgt(`269px`);
    } else {
      setHgt(`0px`);
    }
  };
  return (
    <>
      <header id="HN">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <Link to="about" smooth={true} duration={500}>
                <h2>SIDDHESH MHATRE</h2>
              </Link>
            </div>
            <nav>
              <ul id="MenuItems" style={{ maxHeight: Hgt }}>
                <li style={{ position: "relative" }}>
                  <Link to="about" smooth={true} duration={1000}>ABOUT</Link>
                </li>
                <li>
                  <Link to="projects" smooth={true} duration={1000}>PROJECTS</Link>
                </li>
                <li>
                  <Link to="more" smooth={true} duration={1000}>MORE</Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={1000}>CONTACT</Link>
                </li>
              </ul>
            </nav>

            <img
              src={menu}
              className="menu-icon"
              onClick={fun}
              alt="lodaing.."
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
