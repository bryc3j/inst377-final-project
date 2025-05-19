// backend/api/index.js
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client using environment variables
const supabase = createClient(
  'https://feciwqupridmfcttwroh.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlY2l3cXVwcmlkbWZjdHR3cm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MjkwMzEsImV4cCI6MjA2MzAwNTAzMX0.j0CH2RnhZTcimn_MjQ-kmBCZM675-6NK6MwGgUurpZo'
);

// Handle the incoming API requests
module.exports = async (req, res) => {
  try {
    // Check the HTTP request method (GET or POST)
    if (req.method === 'GET') {
      // GET route: Fetch workouts
      const { data, error } = await supabase.from('workouts').select();
      if (error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(200).json(data);
    }

    if (req.method === 'POST') {
      // POST route: Add new workout
      const { workoutType, caloriesBurned } = req.body;

      // Insert the new workout into the 'workouts' table
      const { data, error } = await supabase.from('workouts').insert([
        { workout_type: workoutType, calories_burned: caloriesBurned },
      ]);
      if (error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(201).json(data);  // Return the inserted data
    }

    // Method Not Allowed for any unsupported HTTP methods (other than GET or POST)
    return res.status(405).json({ message: 'Method Not Allowed' });

  } catch (err) {
    // Catch any unexpected errors and send them back to the client
    return res.status(500).json({ error: 'Internal Server Error', message: err.message });
  }
};
