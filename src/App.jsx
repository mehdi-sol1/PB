// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drag from './components/Drag';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Drag />} />
        <Route path="/drag" element={<Drag />} />
      </Routes>


    </Router>
  );
};

export default App;
