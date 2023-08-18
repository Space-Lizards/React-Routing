// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import Calendar from './Calendar';
import Profile from './Profile';
import Logout from './Logout';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
