import React from "react";
import { NavLink, Link } from "react-router-dom";
// import space from './assets/space2.jpg';
import Logo from "./assets/Water_Drop.svg";
import styles from '../App.module.css'

const Navbar = () => {
  return (
    <nav className="fixed-top"
      style={{
        display: "flex",
        justifyContent: "start",
        width: '100vw',
        position: 'sticky',
        lineHeight: '2.5rem',
        fontSize: "18px",
        // fontWeight: "lighter",
        fontFamily: "merriweather",
        // opacity: '0.5',
        // backgroundImage: `url(${space})`,
        backgroundImage: 'linear-gradient(45deg, #d3d3d3, #051622)',
        // background: "#2a2a2a",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <a href="/"><img className={styles.img} src={Logo} alt="logo" /></a>

      <NavLink
        to="/timer"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#d3d3d3",
          textShadow: isActive ? "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff" : "none",          
          // boxShadow: isActive
          //   ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          //   : "none",
          // background: isActive ? "lightgrey" : "none",
          padding: isActive ? "5px" : "5px",
          margin: isActive ? "5px" : "5px",
          marginLeft: '60vw',
          // borderRadius: isActive ? "5px" : "none",
          textDecoration: isActive ? "none" : "none",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Timer
      </NavLink>

      <NavLink
        to="/breathing"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#d3d3d3",
          textShadow: isActive ? "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff" : "none",    
          // boxShadow: isActive
          //   ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          //   : "none",
          // background: isActive ? "lightgrey" : "none",
          padding: isActive ? "5px" : "5px",
          margin: isActive ? "5px" : "5px",
          borderRadius: isActive ? "5px" : "none",
          textDecoration: isActive ? "none" : "none",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Breathing
      </NavLink>

      <NavLink
        to="/articles"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#d3d3d3",
          textShadow: isActive ? "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff" : "none",    
          // boxShadow: isActive
          //   ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          //   : "none",
          // background: isActive ? "lightgrey" : "none",
          padding: isActive ? "5px" : "5px",
          margin: isActive ? "5px" : "5px",
          borderRadius: isActive ? "5px" : "none",
          textDecoration: isActive ? "none" : "none",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        r/Meditation
      </NavLink>

      <NavLink
        to="/chart"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#d3d3d3",
          textShadow: isActive ? "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff" : "none",    
          // boxShadow: isActive
          //   ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          //   : "none",
          // background: isActive ? "lightgrey" : "none",
          padding: isActive ? "5px" : "5px",
          margin: isActive ? "5px" : "5px",
          borderRadius: isActive ? "5px" : "none",
          textDecoration: isActive ? "none" : "none",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Chart
      </NavLink>

      <NavLink
        to="/users"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#d3d3d3",
          textShadow: isActive ? "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff" : "none",    
          // boxShadow: isActive
          //   ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          //   : "none",
          // background: isActive ? "lightgrey" : "none",
          padding: isActive ? "5px" : "5px",
          margin: isActive ? "5px" : "5px",
          borderRadius: isActive ? "5px" : "none",
          textDecoration: isActive ? "none" : "none",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Account
      </NavLink>
    </nav>
  );
};

export default Navbar;