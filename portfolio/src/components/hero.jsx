import React from "react";
import { motion } from "framer-motion";
import "./../styles/hero.css";
import { ReactTyped } from "react-typed";
import img1 from "../img/photo1.PNG";
import img2 from "../img/photo2.PNG";
import img3 from "../img/photo3.png";
import img4 from "../img/photo4.png";
import arrow from "../img/arrow.png";

const images = [img1, img2, img3, img4];
const texts = [
  "This is my forum website with login and registration.",
  "Insovlet D.O.O. site (click to view).",
  "Shopping List, Android application in Java.",
  "This is my first game in C#, back in 2019.",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isClicked, setIsClicked] = React.useState(false);
  const [hasClicked, setHasClicked] = React.useState(false);
  const [showNewImage, setShowNewImage] = React.useState(false);
  const [resetAnimation, setResetAnimation] = React.useState(false);

  const handleDivClick = () => {
    setIsClicked(true);
    setHasClicked(true);
  };

  const handleScroll = () => {
    setResetAnimation(!resetAnimation); // Dodato za resetovanje animacije
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setShowNewImage(true);
      setResetAnimation(false);
    }, 500);
  };

  React.useEffect(() => {
    let timeoutId;

    if (isClicked) {
      timeoutId = setTimeout(() => {
        setShowNewImage(true);
        setIsClicked(false);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [isClicked, resetAnimation]);

  return (
    <div className="container-hero">
      <div className="hero">
        <div style={{ display: isClicked ? "block" : "none" }}>
          <img
            src={images[currentImageIndex + 1]}
            alt="React Logo"
            className="animate__animated animate__hinge image1"
          />
        </div>

        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ rotate: 10, scale: 1.1 }}
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
                `My name is  <span style="color: rgb(0, 0, 0);">Simon</span> Radosavljević.`,
              ]}
              typeSpeed={100}
              loop
            />
          </div>
        </motion.div>
        <div style={{ display: isClicked ? "block" : "none" }}>
          <img
            src={images[currentImageIndex]}
            alt="React Logo"
            className="animate__animated animate__hinge image1"
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
                whileHover={{ scale: 1 }}
                whileTap={{ rotate: 10, scale: 1.1 }}
                transition={5000}
                animate={{ rotate: 0.1 }}
              >
                <img
                  src={images[currentImageIndex]}
                  alt="slika"
                  className="fullphoto1"
                />
                <p className="downimage">{texts[currentImageIndex]}</p>
              </motion.div>
              <img
                src={arrow}
                onClick={handleScroll}
                alt="slika"
                className="arrow"
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
