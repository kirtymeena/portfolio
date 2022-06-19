import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="header">
        <Navbar />
      </div>
      <div className="components">
        <Home />

        <Projects />

        <About />
      </div>
    </Router>
  );
}

export default App;
