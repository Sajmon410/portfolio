import React from "react";
import { motion } from "framer-motion";
import "./../styles/hero.css";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import esp32 from "../img/slika4.png";
import roboticarm from "../img/slika1.png";
import aadsp from "../img/slika2.png";
import powermeter from "../img/slika3.png";
import sajmonet from "../img/photo1.PNG";
import doro from "../img/photo2.PNG";
import androidshopping from "../img/photo3.png";
import slime from "../img/photo4.png";
import insolvent from "../img/photo5.PNG";
import sajmonsays from "../img/photo6.png";
import arrow from "../img/arrow.png";

const images = [
  esp32, 
  roboticarm, 
  aadsp, 
  powermeter, 
  doro, 
  sajmonet, 
  androidshopping,
  sajmonsays,
  insolvent,
  slime];
const texts = [
  "Flutter App for Live ESP32 Streaming, Photo Capture, and Location Mapping.", //0
  "Remote Robotic Arm Control System with Custom Linex Driver.",
  "DSP Channel Combining Models with Fixed-Point Optimization.",
  "Power Meter Data Logger with RTC and SD Storage.",
  "I was engaged on a project featuring E-commerce web application.",//2
  `My Full-Stack Social Network in VanillaJS.`, //1 
  "Shopping List, Android Application in Java.", //3
  "Simon Says, My First Flutter App for Task Management.",  //4
  "Landing page for Bookkeeping Agency.", //  5z
  "Sajmon's Slime, my first game in C#  back in 2019.", //6
];
const hrefs = [
  "https://github.com/Sajmon410/flutter-esp32",
  "https://github.com/Sajmon410/Remote-Robot-Arm-Control",
  "https://github.com/Sajmon410/AADSP",
  "https://github.com/Sajmon410/AutonomtforPowerMeter",
    "https://jewelryshopdoro.com/ ",
  "https://sajmon410.github.io",
  "https://github.com/Sajmon410/ShoppingList",
  "https://github.com/Sajmon410/simon-says",
  null,
  "https://github.com/Sajmon410/Sajmon-s-slime",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isClicked, setIsClicked] = React.useState(false);
  const [hasClicked, setHasClicked] = React.useState(false);
  const [showNewImage, setShowNewImage] = React.useState(false);
  const [imageClass, setImageClass] = React.useState("animate__animated animate__backInLeft image1");
  const [resetAnimation, setResetAnimation] = React.useState(false);
  
  const handleDivClick = () => {
    setIsClicked(true);
    setHasClicked(true);
  };

  const handleScroll = () => {
    setResetAnimation(!resetAnimation);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setShowNewImage(true);
      setResetAnimation(false);
    }, 500);
  };

  React.useEffect(() => {
    let timer;
    if (isClicked) {
      timer = setTimeout(() => {
        setImageClass("animate__animated animate__zoomOutDown image1"); 
      }, 1500);
    }

    return () => clearTimeout(timer);  
  }, [isClicked]);

  React.useEffect(() => {
    let timeoutId;

    if (isClicked) {
      timeoutId = setTimeout(() => {
        setShowNewImage(true);
        setIsClicked(false);
      }, 3500); 
    }

    return () => clearTimeout(timeoutId);
  }, [isClicked]);

  return (
    <div className="container-hero">
      <div className="hero">
        <div style={{ display: isClicked ? "block" : "none" }}>
          <img
            src={images[1]} 
            alt="Image1"
            className={imageClass}
          />
        </div>

        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ rotate: 10, scale: 1.07 }}
          transition={5000}
          className="centar"
          onClick={hasClicked ? null : handleDivClick}
          animate={{ rotate: 0.1 }}
        >  
          <div className="animate__animated animate__jackInTheBox space">
            <div className="app-container"></div>
            {!hasClicked && (
              <div className="click-on-me-div">
                <p className="animate__animated animate__flash click-on-me">
                  Click on me.
                </p>
              </div>
            )}
            <h1 className="text-hero">Welcome.</h1>
            <ReactTyped
              className="typed"
              strings={[
                `My name is  <span style="color: #c985ed;">Simon</span> Radosavljević.`,
              ]}
              typeSpeed={100}
              loop
            />
          </div>
        </motion.div>
        <div style={{ display: isClicked ? "block" : "none" }}>
          <img
            src={images[0]} 
            alt="Image1"
            className={imageClass} 
          />
          
        </div>

        {showNewImage && (
          <div className="projects">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={`animate__animated ${
                resetAnimation ? "animate__backOutUp" : "animate__backInUp"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ rotate: 10, scale: 1.1 }}
                transition={5000}
                animate={{ rotate: 0.1 }}
              >
                <Link
                  to={hrefs[currentImageIndex]}
                  target="_blank"
                  className={hrefs[currentImageIndex] ? "" : "disabled-link"}
                >
                  <img
                    src={images[currentImageIndex]}
                    alt="slika"
                    className="fullphoto1"
                    href={hrefs[currentImageIndex]}
                  />
                </Link>
                <p className="downimage">{texts[currentImageIndex]}</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.15 }}
              >
              <img
                src={arrow}
                onClick={handleScroll}
                alt="slika"
                className="arrow"
              />
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;