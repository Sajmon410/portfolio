import React from 'react';
import { motion } from 'framer-motion';
import {ReactTyped} from "react-typed";
import './contact.css';
import serbia from '../img/serbia.png';
const Contact = () => {
    return (
        <div className="container-hero">
            <div className='animate__animated animate__backInDown'>
            <img src={serbia} alt="New Image" className="serbia" />
            </div>
            
        </div>
      );
}
export default Contact;