import React from 'react';
import { motion } from 'framer-motion';
import './hero.css';
import {ReactTyped,Typed} from "react-typed";
import img from '../img/photo1.PNG';
import img2 from '../img/photo2.PNG';
const Hero = () => {
    const [isClicked, setIsClicked] = React.useState(false);

    const handleDivClick = () => {
        setIsClicked(!isClicked);
    };
    return(
        <div className="container-hero">
            <div className='hero'>
                
            <div className="hinge" style={{ display: isClicked ? 'block' : 'none' }}> 
                <img src={img2} alt="React Logo" className="image1"/>
                </div>
            
                <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{rotate: 10 , scale: 1.1 }}
                className="centar"
                onClick={handleDivClick}
                animate={{ rotate:0.1 }}>
                     <div className="app-container"></div>
              
              <h1 className="text-hero">Welcome.</h1>
              <ReactTyped strings={[`My name is  <span style="color: rgb(0, 0, 0);">Simon</span> Radosavljević.`]} typeSpeed={100} loop />
              </motion.div>
              <div className="hinge" style={{ display: isClicked ? 'block' : 'none' }}> 
             <img src={img} alt="React Logo" className="image1"/>
             </div>
            </div>
            </div>
      
    );
    };

export default Hero;