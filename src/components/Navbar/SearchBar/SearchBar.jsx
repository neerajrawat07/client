import React from 'react'
import {BsMicFill} from 'react-icons/bs';
import {FaSearch} from 'react-icons/fa';
import { IoMdNotificationsOutline } from "react-icons/io";
import './SearchBar.css';
function SearchBar() {
  return (
    <div className='SearchBar_Container'>
        <div className="SearchBar_Container2">
            <div className="search_div">
            <input type="text" className='iBox_SearchBar' placeholder="Search" />
            <FaSearch className="searchIcon_SearchBar" 
           
            />
            <BsMicFill className='Mic_SearchBar'/>
            
            </div>
        </div>

    </div>
  )
}

export default SearchBar
