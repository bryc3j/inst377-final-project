// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to HealthyLivingApp</h1>
      <p>Track your workouts and progress!</p>
      <div className="navigation">
        <Link to="/about">About</Link>
        <Link to="/functionality">Functionality</Link>
      </div>
    </div>
  );
};

export default Home;
