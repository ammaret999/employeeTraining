import React from 'react';
import { Routes, Route } from "react-router-dom";
import { CreateEmployee, Home, Login } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/employee" element={<CreateEmployee />} />
    </Routes>
  );
}

export default App;
