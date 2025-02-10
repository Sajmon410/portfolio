import React from "react";
import { motion } from "framer-motion";
import "./../styles/contact.css";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import serbia from "../img/serbia.png";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="container-hero">
      <motion.div
        whileHover={{ scale: 1 }}
        whileTap={{ rotate: 10, scale: 1.1 }}
        transition={5000}
        animate={{ rotate: 0.1 }}
      >
        <div className="animate__animated animate__backInDown">
          <img src={serbia} alt="serbia" className="serbia" />
        </div>
      </motion.div>
      <div className="socials">
        <div className="animate__animated animate__fadeInUp">
          <motion.div
            className="socials-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 10, scale: 1.1 }}
            transition={5000}
            animate={{ rotate: 0.1 }}
          >
            <Link to="https://www.github.com/Sajmon410">
            <LuGithub />{" "}
            </Link>
            <Link to="https://www.github.com/Sajmon410">
              <p> GitHub</p>
            </Link>
          </motion.div>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <motion.div
            className="socials-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 10, scale: 1.1 }}
            transition={5000}
            animate={{ rotate: 0.1 }}
          >
            <Link to="https://www.linkedin.com/in/simon-radosavljevi%C4%87-2717782b7/">
            <CiLinkedin />
            </Link>
            <Link to="https://www.linkedin.com/in/simon-radosavljevi%C4%87-2717782b7/">
              <p> LinkedIn</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
