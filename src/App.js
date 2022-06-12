import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";

function App() {

  return (
    <Router>
      <Navbar />
      <Home />
      <About />
    </Router>
  );
}

export default App;
