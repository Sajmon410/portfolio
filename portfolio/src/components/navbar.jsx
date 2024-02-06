import React from 'react';
import { motion } from 'framer-motion';
import './navbar.css';

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
         Sajmon.
        </motion.div>
        </div>
        <div className='buttons'>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{rotate: 15 , scale: 1.5 }}
          className="menu"
          animate={{ rotate:0.1 }}
        >
         Home
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{rotate: 15 , scale: 1.5 }}
          className="menu"
          animate={{ rotate:0.1 }}
        >
          About Me
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{rotate: 15 , scale: 1.5 }}
          className="menu"
          animate={{ rotate:0.1 }}
        >
          Concact
        </motion.div>
        </div>
     
    </div>
  );
};

export default Navbar;
