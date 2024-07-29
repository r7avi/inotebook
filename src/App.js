import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import Dashboard from "./components/Users/Dashboard";
import EnquiryPage from "./components/Enquiry/EnquiryPage"; // Updated import path
import DevOpsCourse from "./components/Pages/DevOpsCourse";
import GoLangCourse from "./components/Pages/GoLangCourse";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/devops-course" element={<DevOpsCourse />} />
          <Route path="/golang-course" element={<GoLangCourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
