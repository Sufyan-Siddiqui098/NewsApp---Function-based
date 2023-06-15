import React, { useState } from "react";
import menuIcon from './Images/menu-icon.png'
import closeIcon from "./Images/close-icon.png"

import {Link} from "react-router-dom";

const NavBar = (props)=> {
  
  const [menu, setMenu] = useState(true)
  const handleMenu = ()=>{
    setMenu(!menu)
    let nav = document.getElementById("nav")
    nav.classList.toggle('visible')
    
  }

  // const links = [
  //   {
  //     name: 'Home',
  //     uri: '/'
  //   },
  //   {
  //     name: 'General',
  //     uri: '/general'
  //   }
  // ];

  
    let menuSwitch = menu?menuIcon:closeIcon;
    return (
      <header className={`bg-secondary-${props.theme}`}>
        <div className="logo">News App</div>

        <div className="menu-icon" onClick={handleMenu}><img src={menuSwitch} alt="" /></div> {/*MENU ICON*/}

        <nav className="flex-justify-end" id="nav">
            {/* <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/">General</a>
            <a className="nav-link" href="/business">Business</a>
            <a className="nav-link" href="/entertainment">Entertainment</a>
            <a className="nav-link" href="/health">Health</a>
            <a className="nav-link" href="/science">Science</a>
            <a className="nav-link" href="/sports">Sports</a>
            <a className="nav-link" href="/technology">Technology</a> */}
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/">General</Link>
            <Link className="nav-link" to="/business">Business</Link>
            <Link className="nav-link" to="/entertainment">Entertainment</Link>
            <Link className="nav-link" to="/health">Health</Link>
            <Link className="nav-link" to="/science">Science</Link>
            <Link className="nav-link" to="/sports">Sports</Link>
            <Link className="nav-link" to="/technology">Technology</Link>
            {/* {links.map((link) => {
                return (
                  <Link className="nav-link" to={link.uri}>{link.name}</Link>
                )
              })
            } */}
        </nav>
      </header>
    );
  
}

export default NavBar;