import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />;
      <Route path="/about" element={<About />} />;
      <Route path="/profile" element={<Profile />} />;
      <Route path="/signin" element={<SignIn />} />;
      <Route path="/signup" element={<SignUp />} />;
    </Routes>
  </BrowserRouter>
  );
}

export default App;
