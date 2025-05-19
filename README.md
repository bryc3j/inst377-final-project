# HealthyLivingApp

**HealthyLivingApp** is a web application designed to help individuals track their fitness progress. Users can log workouts, track calories burned, and monitor their progress toward health and fitness goals. The app allows users to set goals and visualize their workout history, helping them stay motivated to live a healthier lifestyle. 

This app provides a simple, intuitive interface to log workout types, the number of calories burned, and view past workouts. The backend is built with **Node.js** and **Express** for handling API requests, while the frontend uses **React.js** for dynamic user interaction.

## Target Browsers

The application is designed to be cross-platform and should work seamlessly on both desktop and mobile browsers. Specifically:

- **Desktop Browsers**:
  - Google Chrome (latest version)
  - Mozilla Firefox (latest version)
  - Safari (latest version)
  - Microsoft Edge (latest version)

- **Mobile Browsers**:
  - Safari on iOS (latest version)
  - Chrome on Android (latest version)

## Developer Manual

### 1. Installation and Dependencies

#### 1.1 Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **Supabase** account (for storing workout data)

#### 1.2 Installing the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/HealthyLivingApp.git
   cd HealthyLivingApp
2. install frontend dependencies:
   cd frontend
   npm install
3. install backend dependencies:
   cd backend
   npm install
### 1.3 Setting up the Environment
1.  Create a .env file in the backend directory.
2. add these: SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-api-key
### 1.4 Running it Locally
1. Start the backend portion:
   cd backend
   node api/index.js
2. start the frontend (react):
   cd frontend
   npm start
3. you can find the frontend at http://localhost:3000 and the backend at http://localhost:500/api/progress
### 2. Tests
- use GET requests to fetch workout data from http://localhost:500/api/progress
- use POST requests to add a new workout at: http://localhost:500/api/progress  (with JSON body like { "workoutType": "Running", "caloriesBurned": 300 })

### 3. API Documentation
### 3.1 Endpoints
- to **retrieve** all logged workout data use GET/api/progress. The response will be a JSON arrow of workout
- objects that each has a workout_type and the amount of calories burned.
- to **log** use POST/api/progress. This response with be a JSON object that also has workout type
- and calories burned.
- ## 4 Bugs and Roadmap for the future
- ## 4.1 Known Bugs
- - no major bugs. occasional errors when viewing the webpage.
  ## 4.2 Roadmap
  - I want to implement a user login and registration
  - I want to have a goals tracking feature
  - a lot of charts and visualizations
  - improving the UI so it is mobile device accepted.
  ## 5. Contributors
  ## Bryce Jackson
## End of Dev Manual
