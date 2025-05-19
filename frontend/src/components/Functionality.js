// src/components/Functionality.js
import React, { useState } from 'react';

const Functionality = () => {
  const [workout, setWorkout] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const workoutData = {
      workout_type: workout,
      calories_burned: caloriesBurned,
      date: new Date().toISOString(),
    };

    fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workoutData),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
        console.log("Workout submitted:", data);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Log Your Workout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg">Workout Type</label>
          <input 
            type="text" 
            className="border p-2" 
            value={workout} 
            onChange={(e) => setWorkout(e.target.value)} 
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg">Calories Burned</label>
          <input 
            type="number" 
            className="border p-2" 
            value={caloriesBurned} 
            onChange={(e) => setCaloriesBurned(e.target.value)} 
          />
        </div>
        <button type="submit" className="bg-green-600 py-2 px-4 text-white rounded-lg">Submit</button>
      </form>

      {response && <div>Workout submitted: {JSON.stringify(response)}</div>}
    </div>
  );
};

export default Functionality;
