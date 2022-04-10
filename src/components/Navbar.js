// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { Link } from 'react-router-dom';

// const pages = ['Timer', 'Breathing', 'Articles', 'Chart', 'Users'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar style={{background: '#2E3B55'}} position="fixed">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <Link to='../pages/Breathing.js'>
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//                 </Link>
//               ))}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;

import React from "react";
import { NavLink } from "react-router-dom";
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
        // backgroundImage: 'linear-gradient(to right, #051622, #1BA098)',
        // background: "#2a2a2a",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <img className={styles.img} src={Logo} alt="logo" />

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
          marginLeft: '5rem',
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
        Articles
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
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;