import { Routes, Route } from "react-router-dom";
import React from "react";

//login
import Login from './menuUser/login';
import Home from "./menuUser/home";
import CreateEmployee from "./menuUser/createEmployee";

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
