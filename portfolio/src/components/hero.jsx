import React from 'react';
import { motion } from 'framer-motion';
import './hero.css';
import {ReactTyped} from "react-typed";
import img from '../img/photo1.PNG';
import img2 from '../img/photo2.PNG';
import arrow from '../img/arrow.png';
const Hero = () => {
    const [isClicked, setIsClicked] = React.useState(false);

    const handleDivClick = () => {
        setIsClicked(!isClicked);
    };
    const [showNewImage, setShowNewImage] = React.useState(false);
    React.useEffect(() => {
        let timeoutId;
    
        if (isClicked) {
          timeoutId = setTimeout(() => {
            setShowNewImage(true);
            setIsClicked(false);
          }, 5000);
        }
    
        return () => clearTimeout(timeoutId);
      }, [isClicked]);
      const [isScrolled, setIsScrolled] = React.useState(false);
      const handleScroll = () => {
        setIsScrolled(!isScrolled);
        
      };
      const [visible, setVisible] = React.useState(true);

      const removeElement = () => {

        setVisible((prev) => !prev);
      };
    return(
        <div className="container-hero">
            <div className='hero'>
                
            <div className="hinge" style={{ display: isClicked ? 'block' : 'none' }}> 
                <img src={img2} alt="React Logo" className="image1"/>
                </div>
            
                <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{rotate: 10 , scale: 1.1}}
                transition={5000}
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
                <div className="projects">
                {showNewImage   && visible &&(
          <motion.div
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
    
            className={isScrolled ? "pojetct_del" : "project"}
          >
             <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{rotate: 10 , scale: 1.1}}
                transition={5000}
                animate={{ rotate:0.1 }}>
        

            <img src={img} alt="New Image" className="fullphoto1" />
            <p className="downimage">This is my forum website with login and registration.</p> 
            <img src={arrow} onClick={handleScroll} alt="New Image" className="arrow" />
            </motion.div>
          </motion.div>
        )}
        {isScrolled && (
          <motion.div
      
            className="animate__animated animate__backInUp"
            onClick={removeElement}
          >
             <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{rotate: 10 , scale: 1.1}}
                transition={5000}
                animate={{ rotate:0.1 }}>
        

            <img src={img2} alt="New Image" className="fullphoto1" />
            <p className="downimage">Insovlet D.O.O. site (click to view)</p> 
            <img src={arrow} alt="New Image" className="arrow" />
            </motion.div>
          </motion.div>
        )}
        </div>
                </div>
                </div>
      
    );
    };

export default Hero;