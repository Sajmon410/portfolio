import React from "react";
import { motion } from "framer-motion";
import "./../styles/aboutme.css";
import { ReactTyped } from "react-typed";
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
                `My name is  <span style="color: rgb(0, 0, 0);">Simon</span> Radosavljević.`,
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
              As a final-year student majoring in Computing and Control
              Engineering within the "Computer Technologies and Computer
              Communications" department,
            </p>

            <div className="animate__animated animate__jackInTheBox animate__delay-1s">
              <p className="about-me-text">
                I am deeply passionate about developing cutting-edge websites
                and mobile applications. My academic journey has equipped me
                with a strong foundation in computing principles and control
                engineering,
              </p>
            </div>
            <div className="animate__animated animate__backInUp animate__delay-2s">
              <p className="about-me-text">
                I have chosen to specialize in the dynamic intersection of
                computer technologies and communications. I aspire to graduate
                this year.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
