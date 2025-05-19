// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to HealthyLivingApp</h1>
      <p className="text-xl mb-4">Track your workouts and progress to live a healthier life.</p>
      <Link to="/about" className="bg-blue-600 py-2 px-4 rounded-lg mb-4">Learn More</Link>
      <Link to="/functionality" className="bg-yellow-600 py-2 px-4 rounded-lg">Start Tracking</Link>
    </div>
  );
};

export default Home;
