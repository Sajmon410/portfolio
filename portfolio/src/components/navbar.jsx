import React from 'react';
import { motion } from 'framer-motion';
import './navbar.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  
  const [showNavbar, setShowNavbar] = React.useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
    console.log("idemo")
  }
  return (
    <div className="navbar">
      <div className="content">
        <motion.div
            
          whileHover={{ scale: 1.1 }}
          whileTap={{rotate: 15 , scale: 1.5 }}
          className="logo"
          animate={{ rotate:0.1 }}
        >
            <Link to="/portfolio">
        Sajmon.
      </Link>
        </motion.div>
        </div>
        <div className='buttons'>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{rotate: 15 , scale: 1.5 }}
          className="menu"
          animate={{ rotate:0.1 }}
        >

<CustomLink to="/portfolio">Home</CustomLink>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{rotate: 15 , scale: 1.5 }}
          className="menu"
          animate={{ rotate:0.1 }}
        >
            <CustomLink to="/aboutme">About Me</CustomLink>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{rotate: 15 , scale: 1.5 }}
          className="menu"
          animate={{ rotate:0.1 }}
        >
               <CustomLink to="/contact">Contact</CustomLink>
        </motion.div>
        

        </div>
        {showNavbar &&
        <div id='nav-elements' className="animate__animated animate__fadeInRight">
          <ul>
            <li>
            <motion.div
            
            whileHover={{ scale: 1.1 }}
            whileTap={{rotate: 15 , scale: 1.5 }}
            className="logo"
            animate={{ rotate:0.1 }}
          >
              <Link to="/portfolio">
          Home
        </Link>
          </motion.div>
            </li>
            <li>
            <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{rotate: 15 , scale: 1.5 }}
          className="menu"
          animate={{ rotate:0.1 }}
        >
            <CustomLink to="/aboutme">About Me</CustomLink>
        </motion.div>
            </li>
            <li>
            <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{rotate: 15 , scale: 1.5 }}
          className="menu"
          animate={{ rotate:0.1 }}
        >
               <CustomLink to="/contact">Contact</CustomLink>
        </motion.div>
            </li>
          </ul>
        </div>
        }
       <IoMenu onClick={handleShowNavbar} className='menu-icon'/>
    </div>
  );
};

export default Navbar;
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
}
