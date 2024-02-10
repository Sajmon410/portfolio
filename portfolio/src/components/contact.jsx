import React from 'react';
import { motion } from 'framer-motion';
import {ReactTyped} from "react-typed";
import './contact.css';
import serbia from '../img/serbia.png';
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
        </div>
      );
}
export default Contact;