// src/components/Functionality.js
import React, { useState, useEffect } from "react";

const Functionality = () => {
  const [workouts, setWorkouts] = useState([]);
  const [workoutType, setWorkoutType] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");

  // Fetch workouts from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/progress")
      .then((response) => response.json())
      .then((data) => setWorkouts(data))
      .catch((error) => console.error("Error fetching workouts:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { workoutType, caloriesBurned };
    fetch("http://localhost:5000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWorkout),
    })
      .then((response) => response.json())
      .then((data) => setWorkouts([...workouts, data])) // Add the new workout to the list
      .catch((error) => console.error("Error adding workout:", error));

    // Reset form
    setWorkoutType("");
    setCaloriesBurned("");
  };

  return (
    <div className="functionality">
      <h1>Log Your Workouts</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Workout Type</label>
          <input
            type="text"
            value={workoutType}
            onChange={(e) => setWorkoutType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Calories Burned</label>
          <input
            type="number"
            value={caloriesBurned}
            onChange={(e) => setCaloriesBurned(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Workout</button>
      </form>

      <h2>Your Workouts</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout.workoutType} - {workout.caloriesBurned} calories
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Functionality;
