// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Diet from './components/Diet';
import Goals from './components/Goals';
import Profile from './components/auth/Profile';
import Workouts from './components/Workouts';
import Login from './components/auth/login';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/workouts" component={Workouts} />
        <Route path="/profile" component={Profile} />
        <Route path="/diet" component={Diet} />
        <Route path="/goals" component={Goals} />
      </Routes>
    </Router>
  );
};

export default App;
