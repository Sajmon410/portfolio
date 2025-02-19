import React from "react";
import { motion } from "framer-motion";
import "./../styles/aboutme.css";
import { ReactTyped } from "react-typed";
const openPdf = () => {
  window.open(`${window.location.origin}/portfolio/SimonRadosavljevic.pdf`, '_blank');
};
const AboutMe = () => {
  return (
    <div className="container-hero">
      <div className="hero">
        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ rotate: 10, scale: 1.1 }}
          transition={5000}
          className="centar"
          animate={{ rotate: 0.1 }}
        >
          <div className="animate__animated animate__backInLeft space">
            <div className="app-container"></div>
            <h1 className="text-hero">Welcome.</h1>
            <ReactTyped
              strings={[
                `My name is  <span style="color: #c985ed;">Simon</span> Radosavljević.`,
              ]}
              typeSpeed={100}
              loop
            />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ rotate: 10, scale: 1.1 }}
          transition={5000}
          className="aboutmeText"
          animate={{ rotate: 0.1 }}
        >
          <div className="animate__animated animate__backInRight">
            <h1 className="title">About Me</h1>
            <p className="about-me-text">
              As a final-year student majoring in{' '}
              <span style={{ color: '#c985ed' }}>
               Computing and Control Engineering 
              </span>{' '}
              within the "Computer Technologies and Computer
              Communications" department,
            </p>

            <div className="animate__animated animate__jackInTheBox animate__delay-1s">
            <p className="about-me-text">
              I am deeply passionate about developing{' '}
              <span style={{ color: '#c985ed' }}>
                Cutting-Edge Websites and Mobile Applications.
              </span>{' '}
              My academic journey has equipped me with a strong foundation in computing
              principles.
            </p>
            </div>
            <div className="animate__animated animate__backInUp animate__delay-2s">
              <p className="about-me-text">
                I have chosen to specialize in the dynamic intersection of     {' '}
                <span style={{ color: '#c985ed' }}>
                Computer Technologies and Communications.
                </span>{' '}
                 I aspire to graduate this year.
              </p>
            </div>
          </div>
          <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ rotate: 10, scale: 1.1 }}
          transition={10000}
          animate={{ rotate: 0.1 }}
        >
          <div className="animate__animated animate__bounceIn animate__delay-3s">
          <button className="pdfbutton" onClick={openPdf}>
            Open CV
        </button>
        </div>
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
