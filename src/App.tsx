import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Finished from "./pages/Finished";
import Trash from "./pages/Trash";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <div className="mainWrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/finished" element={<Finished />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
