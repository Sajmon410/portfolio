import './App.css';
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import AboutMe from './components/aboutme.jsx'
import { Route, Routes } from "react-router-dom"
function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/portfolio" element={<Hero />} />
    <Route path="/aboutme" element={<AboutMe />} />
    <Route path="/aboutme" element={<AboutMe />} />
  </Routes>
  </>
  );
}

export default App;
