import React from 'react';
import { motion } from 'framer-motion';
import './aboutme.css';
import {ReactTyped} from "react-typed";
import { TiInfoLargeOutline,TiKeyboard,TiMortarBoard,TiDeviceDesktop,TiMessages  } from "react-icons/ti";
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
     
            <TiInfoLargeOutline style={{color: "black"}}/>Hello, I'm <span style={{color: "black"}}>Simon Radosavljevic</span>, a final-year Computer Science and Automation student at the <span style={{color: "black"}}>Faculty of Technical Sciences (FTN) in Novi Sad</span>.
                <br></br>
                
                <div class="animate__animated animate__jackInTheBox animate__delay-1s">
                <TiKeyboard style={{color: "black"}}/> Passionate about frontend web development and design, I specialize in <span style={{color: "black"}}>creating engaging websites using React</span>. Beyond my studies, I explore diverse programming languages like <span style={{color: "black"}}>Python, Java, and C#</span>, showcasing a versatile skill set.
                
                <br></br>
                <TiMortarBoard style={{color: "black"}}/> My IT journey started in high school at <span style={{color: "black"}}>ESTS Nikola Tesla in Kraljevo</span>, where I pursued the IT track. Now, as a final-year student, I continue to embrace challenges and expand my skills.
                <br></br>
                </div>
                <div class="animate__animated animate__backInUp animate__delay-2s">
                <TiDeviceDesktop style={{color: "black"}}/> Proficient in <span style={{color: "black"}}>React, C , C++, Python, Java, C#, and more</span>.
                Experienced in mobile app development and game design.
                Committed to continuous learning and staying updated on industry trends.
                <br></br>
                <TiMessages style={{color: "black"}}/> I'm <span style={{color: "black"}}>open to exciting opportunities and collaborations</span>. Explore my portfolio and connect with me to discuss the fusion of creativity and technology.
                </div>
            </p>
            </div>
            </motion.div>
        </div>
        
    </div>
  );
};

export default AboutMe;
