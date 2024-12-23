import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FindDoctorsPage from "./pages/FindDoctorsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-doctors" element={<FindDoctorsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
