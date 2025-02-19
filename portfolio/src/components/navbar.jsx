import React from "react";
import { motion } from "framer-motion";
import "./../styles/navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLogoClick = (e) => {
    // Proveri da li je trenutni URL `/portfolio` i osveži stranicu
    if (window.location.pathname === "/portfolio") {
      e.preventDefault();
      window.location.href = "/portfolio";
    }
  };

  return (
    <div className="navbar">
      <>
        <div className="content">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 15, scale: 1.5 }}
            className="logo"
            animate={{ rotate: 0.1 }}
          >
            <Link className="nav-text" to="/portfolio" onClick={handleLogoClick}>
              Sajmon
            </Link>
          </motion.div>
        </div>
        <div className="buttons">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 15, scale: 1.5 }}
            className="menu"
            animate={{ rotate: 0.1 }}
          >
            <CustomLink className="nav-text" to="/portfolio">Home</CustomLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 15, scale: 1.5 }}
            className="menu"
            animate={{ rotate: 0.1 }}
          >
            <CustomLink className="nav-text" to="/aboutme">About Me</CustomLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 15, scale: 1.5 }}
            className="menu"
            animate={{ rotate: 0.1 }}
          >
            <CustomLink className="nav-text" to="/contact">Contact</CustomLink>
          </motion.div>
        </div>

        <IoMenu onClick={handleShowNavbar} className="menu-icon" />
      </>

      {showNavbar && (
        <div
          id="nav-elements"
          className="animate__animated animate__fadeInRight"
        >
          <div className="elements">
            <ul>
              <li>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ rotate: 15, scale: 1.5 }}
                  className="menu"
                  animate={{ rotate: 0.1 }}
                >
                  <Link className="nav-text" to="/portfolio" onClick={handleLogoClick}>
                    Sajmon
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ rotate: 15, scale: 1.5 }}
                  className="menu resp"
                  animate={{ rotate: 0.1 }}
                >
                  <IoClose
                    onClick={handleShowNavbar}
                    className="menu-icon-phone"
                  />
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ rotate: 15, scale: 1.5 }}
                  className="menu resp"
                  animate={{ rotate: 0.1 }}
                >
                  <Link className="nav-text" to="/portfolio" onClick={handleShowNavbar}>
                    Home
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ rotate: 15, scale: 1.5 }}
                  className="menu resp"
                  animate={{ rotate: 0.1 }}
                >
                  <CustomLink className="nav-text" to="/aboutme" onClick={handleShowNavbar}>
                    About Me
                  </CustomLink>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ rotate: 15, scale: 1.5 }}
                  className="menu resp"
                  animate={{ rotate: 0.1 }}
                >
                  <CustomLink className="nav-text" to="/contact" onClick={handleShowNavbar}>
                    Contact
                  </CustomLink>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const handleClick = (e) => {
    if (isActive) {
      // Ako je trenutna stranica ista kao cilj, osveži stranicu
      e.preventDefault();
      window.location.href = to;
    }
  };

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} onClick={handleClick} {...props}>
        {children}
      </Link>
    </li>
  );
}