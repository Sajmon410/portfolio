import React from 'react';
import { motion } from 'framer-motion';
import './aboutme.css';
import {ReactTyped} from "react-typed";
import { TiInfoLargeOutline,TiKeyboard,TiMortarBoard,TiDeviceDesktop,TiMessages  } from "react-icons/ti";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
const AboutMe = () => {
  return (
    <div className="container-hero">
        <div className='hero'>
        <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{rotate: 10 , scale: 1.1}}
                transition={5000}
                className="centar"
                animate={{ rotate:0.1 }}>
                <div className='animate__animated animate__backInLeft'>
                <div className="app-container"></div>
                    <h1 className="text-hero">Welcome.</h1>
                    <ReactTyped strings={[`My name is  <span style="color: rgb(0, 0, 0);">Simon</span> Radosavljević.`]} typeSpeed={100} loop />
                </div>
        </motion.div>
        <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{rotate: 10 , scale: 1.1}}
                transition={5000}
                className="aboutmeText"
                animate={{ rotate:0.1 }}>
                <div className='animate__animated animate__backInRight'>
                    <h1>About Me</h1>
                     <p>
     
                        Final-year Computer Science and Automation student at FTN in Novi Sad.
                        <br></br>
                      </p>
                      
                        <div className="animate__animated animate__jackInTheBox animate__delay-1s">
                        <p>
                        Specializing in 
                        React for engaging web development, I'm proficient in languages like Python, Java, and C#.
      
                        Experienced in React, C, C++, Python, Java, and C#.
                        </p>
                        </div>
                        <div className="animate__animated animate__backInUp animate__delay-2s">
                        <p>
                        I'm open to exciting opportunities,
                        exploring mobile app development and game design. Connect with me to discuss the fusion of creativity and technology.
                        </p>
                        </div>
                        </div>
                        <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{rotate: 10 , scale: 1.1}}
                transition={5000}
                className="animate__animated animate__backInUp animate__delay-3s"
                animate={{ rotate:0.1 }}>
                 <button className='contact-button'><CustomLink to="/contact">Contact me</CustomLink></button>

                 </motion.div>
          </motion.div>
        </div>   
    </div>
  );
};

export default AboutMe;
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
