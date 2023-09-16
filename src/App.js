import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AllRoutes from "./components/AllRoutes";
import DrawerSiderbar from "./components/LeftSidebar/DrawerSiderbar";


function App() {

  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };

  return (
    <div>
     <Router>
      <Navbar
       toggleDrawer={toggleDrawer}
       
      />
      
        <DrawerSiderbar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
        />
      

   <AllRoutes />
     </ Router>
    </ div>
  );
}

export default App;
