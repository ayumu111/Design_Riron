import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InitialSetupPage from "./pages/InitialSetupPage";
import SNSPage from "./pages/SNSPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialSetupPage />} />
        <Route path="/sns" element={<SNSPage />} />
      </Routes>
    </Router>
  );
}

export default App;
