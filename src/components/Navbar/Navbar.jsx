import React from 'react'
import './Navbar.css'
import logo from './logo.png'
import menu from './menu1.png'
import SearchBar from './SearchBar/SearchBar'
import {Link} from "react-router-dom";
import { RiVideoAddLine } from "react-icons/ri"
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiUserCircle  } from 'react-icons/bi'




export default function Navbar({toggleDrawer}) {
  const CurrentUser = null;
  return (
    <div className="Container_Navbar">
      <div className="Burger_Logo_Navbar">
        <div className="burger" onClick={()=>toggleDrawer()}>
          <img src={menu} alt="" />
        </div>

        <Link to={'/'} className="logo_div_Navbar">
          <img src={logo} alt="" />
          <p className="logo_title_navbar">YouTube</p>
        </Link>
        
       
    

      </div>
      <SearchBar /> 
      <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
      <div className="apps_Box">
        <p className="appBox"></p> 
        <p className="appBox"></p> 
        <p className="appBox"></p> 
        <p className="appBox"></p> 
        <p className="appBox"></p> 
        <p className="appBox"></p>   
        <p className="appBox"></p>   
        <p className="appBox"></p>   
        <p className="appBox"></p>   
      </div>
      <IoMdNotificationsOutline size={22} className='vid_bell_Navbar' />
      
      <div className="Auth_cont_Navbar">
        <p className="Auth_Btn">
          <BiUserCircle size={22} />
          <b>Sign in</b>
        </p>
      </div>
   
    </div>

  )
}
