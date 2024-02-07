import React from 'react';
import { motion } from 'framer-motion';
import './navbar.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
const Navbar = () => {
    
  return (
    <div className="navbar">
      <div className="content">
        <motion.div
            
          whileHover={{ scale: 1.1 }}
          whileTap={{rotate: 15 , scale: 1.5 }}
          className="logo"
          animate={{ rotate:0.1 }}
        >
            <Link to="/">
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

<CustomLink to="/">Home</CustomLink>
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
               <CustomLink to="/">Concact</CustomLink>
        </motion.div>
        </div>
     
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
