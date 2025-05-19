// backend/server.js
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Supabase client
const supabase = createClient('https://feciwqupridmfcttwroh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlY2l3cXVwcmlkbWZjdHR3cm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MjkwMzEsImV4cCI6MjA2MzAwNTAzMX0.j0CH2RnhZTcimn_MjQ-kmBCZM675-6NK6MwGgUurpZo'
);

// GET all workouts
app.get("/api/progress", async (req, res) => {
  const { data, error } = await supabase.from("workouts").select();
  if (error) return res.status(400).json({ error });
  res.status(200).json(data);
});

// POST a new workout
app.post("/api/progress", async (req, res) => {
  const { workoutType, caloriesBurned } = req.body;
  const { data, error } = await supabase.from("workouts").insert([
    { workout_type: workoutType, calories_burned: caloriesBurned },
  ]);
  if (error) return res.status(400).json({ error });
  res.status(201).json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
