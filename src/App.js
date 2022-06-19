import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Firefly from "./components/Firefly";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      
      <div className="header">
        <Navbar />
      </div>
      <div className="components">
      
        <Home />

        <Projects />

        <Contact />
        <Firefly/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
