import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import HomePage from "./Components/Home";
import AllTrainsPage from "./Components/SingleTrain";
import "./App.css"; // Import a separate CSS file for styling

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              All trains
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/singleTrain" className="nav-link">
              Train Details
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singleTrain/:trainNumber?" element={<AllTrainsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
