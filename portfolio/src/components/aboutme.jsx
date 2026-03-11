import React from "react";
import { motion } from "framer-motion";
import "./../styles/aboutme.css";
import { ReactTyped } from "react-typed";

const openPdf = () => {
  window.open(`${window.location.origin}/portfolio/SimonRadosavljevic.pdf`, "_blank");
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
                `My name is <span style="color: #c985ed;">Simon</span> Radosavljević.`,
              ]}
              typeSpeed={100}
              loop
            />
          </div>
        </motion.div>

        <div className="text-and-button">
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
            I hold a Bachelor's degree in{" "}
            <span style={{ color: "#c985ed" }}>
              Electrical and Computer Engineering
            </span>{" "}
            with a strong focus on embedded systems and low-level programming.
          </p>

          <div className="animate__animated animate__jackInTheBox animate__delay-1s">
            <p className="about-me-text">
              Passionate about bridging the gap between hardware and software, I develop{" "}
              <span style={{ color: "#c985ed" }}>
                Robust Embedded Firmware and Real-Time Systems.
              </span>
            </p>
          </div>

          <div className="animate__animated animate__backInUp animate__delay-2s">
            <p className="about-me-text">
              With experience in{" "}
              <span style={{ color: "#c985ed" }}>
                C/C++, Linux Kernel drivers, and System Optimization,
              </span>{" "}
              I aim to build efficient, scalable solutions for the next generation of IoT devices.
            </p>
          </div>
            </div>
          </motion.div>

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
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
