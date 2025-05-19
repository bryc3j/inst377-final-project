import React from "react";
import { Link, Route, Routes } from "react-router-dom";  // Use Routes instead of Switch
import Home from "./components/Home";
import About from "./components/About";
import Functionality from "./components/Functionality";

const App = () => {
  return (
    <div>
      {/* Navigation Links */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/functionality">Functionality</Link>
      </nav>

      {/* Routing Setup */}
      <Routes>
        {/* Use element instead of component */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/functionality" element={<Functionality />} />
      </Routes>
    </div>
  );
};

export default App;
