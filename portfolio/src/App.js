import "./App.css";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import AboutMe from "./components/aboutme.jsx";
import Contact from "./components/contact.jsx";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/portfolio" element={<Hero />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;