import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from './assets/shared/logo.svg'
import menu from './assets/shared/icon-hamburger.svg'
import cancel from './assets/shared/icon-close.svg'

const Navbar = ({setBackground}) => {
 const [open, setOpen] = useState(true);


 return (
  <nav className="nav">
   <div className="nav-icon">
    <img  alt='logo' src={logo} className='logo'/>
   </div>
   <div className={open ? 'nav-menu' : 'nav-menu hidden'}>
    <img  alt='logo'  className="menu" src={menu} onClick={()=> setOpen(false)}/>
   </div>
   <div className={open ? 'nav-link hidden' : 'nav-link'}>
    <ul className="nav-links">
     <li><NavLink onClick={() => {
      setOpen(true)
      return setBackground('home')}} to='/space-tourism'>00 Home</NavLink></li>
     <li><NavLink onClick={() => {
        setOpen(true)
      return setBackground('destination')}}  to='/destination'>01 Destination</NavLink></li>
     <li><NavLink onClick={() => {
      setOpen(true)
      return setBackground('crew')}}  to='/crew'>02 Crew</NavLink></li>
     <li><NavLink onClick={() => {
      setOpen(true)
      return setBackground('technology')}}  to='/technology'>03 Technology</NavLink></li>
    </ul>
    <div className="cancel">
   <img  alt='logo' className="close" src={cancel} onClick={()=> setOpen(true)} />
    </div>
   </div>
  </nav>
 )
}

export default Navbar;