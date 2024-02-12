import React from 'react';
import { motion } from 'framer-motion';
import {ReactTyped} from "react-typed";
import './contact.css';
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import serbia from '../img/serbia.png';
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <div className="container-hero">
             <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{rotate: 10 , scale: 1.1}}
                transition={5000}
                animate={{ rotate:0.1 }}>
            <div className='animate__animated animate__backInDown'>
            <img src={serbia} alt="New Image" className="serbia" />
        
            </div>
            </motion.div>
            <div className="socials">
            <div className='animate__animated animate__fadeInUp'>
            <motion.div
                className='socials-item'
                whileHover={{ scale: 1 }}
                whileTap={{rotate: 10 , scale: 1.1}}
                transition={5000}
                animate={{ rotate:0.1 }}>
           <LuGithub /> <Link to="https://www.github.com/Sajmon410"><p> Sajmon410</p></Link>
            </motion.div>
            </div>
            <div className='animate__animated animate__fadeInUp'>
            <motion.div
             className='socials-item'
                whileHover={{ scale: 1 }}
                whileTap={{rotate: 10 , scale: 1.1}}
                transition={5000}
                animate={{ rotate:0.1 }}>
                   
            <CiLinkedin /><p> Sajmon410</p>
            
            </motion.div>
            </div>
            
            </div>
            </div>
      );
}
export default Contact;