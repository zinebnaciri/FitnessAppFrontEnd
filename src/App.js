
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Diet from './components/Diet';
import Goals from './components/Goals';
import Profile from './components/auth/Profile';
import Workouts from './components/Workouts';
import Login from './components/auth/login';
import SignUp from './components/auth/signup';


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/workouts" element={<Workouts/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/diet" element={<Diet/>} />
        <Route path="/goals" element={<Goals/>} />
      </Routes>
   
  );
};

export default App;
