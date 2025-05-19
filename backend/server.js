// server.js
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Test
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// GET endpoint to fetch progress data
app.get("/api/progress", async (req, res) => {
  const { data, error } = await supabase.from("progress").select();
  if (error) return res.status(400).json(error);
  res.status(200).json(data);
});

// GET endpoint to fetch goals data (assuming you have a "goals" table)
app.get("/api/goals", async (req, res) => {
  const { data, error } = await supabase.from("goals").select();
  if (error) return res.status(400).json(error);
  res.status(200).json(data);
});

// GET endpoint to fetch user profile data (assuming you have a "profiles" table)
app.get("/api/profile", async (req, res) => {
  const { data, error } = await supabase.from("profiles").select();
  if (error) return res.status(400).json(error);
  res.status(200).json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
