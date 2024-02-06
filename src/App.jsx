// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Site from './components/Site';
import Machine from './components/Machine';
import Part from './components/Part';
import Drag from './components/Drag';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/drag/:username" element={<Drag />} />
      </Routes>


    </Router>
  );
};

export default App;
