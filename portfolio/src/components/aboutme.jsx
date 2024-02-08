import React from 'react';
import { motion } from 'framer-motion';
import './aboutme.css';
import {ReactTyped} from "react-typed";
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
     
            Hello, I'm Simon Radosavljevic, a final-year Computer Science and Automation student at the Faculty of Technical Sciences (FTN) in Novi Sad.
                <br></br>
                
                <div class="animate__animated animate__jackInTheBox animate__delay-2s">
                Passionate about frontend web development and design, I specialize in creating engaging websites using React. Beyond my studies, I explore diverse programming languages like Python, Java, and C#, showcasing a versatile skill set.
                
                <br></br>
                My IT journey started in high school at ESTS Nikola Tesla in Kraljevo, where I pursued the IT track. Now, as a final-year student, I continue to embrace challenges and expand my skills.
                <br></br>
                Proficient in React, Python, Java, C#, and more.
                Experienced in mobile app development and game design.
                Committed to continuous learning and staying updated on industry trends.
                <br></br>
                I'm open to exciting opportunities and collaborations. Explore my portfolio and connect with me to discuss the fusion of creativity and technology.
                </div>
            </p>
            </div>
            </motion.div>
        </div>
        
    </div>
  );
};

export default AboutMe;
