import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />;
        <Route path="/about" element={<About />} />;
        <Route path="/profile" element={<Profile />} />;
        <Route path="/login" element={<LogIn />} />;
        <Route path="/signup" element={<SignUp />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
