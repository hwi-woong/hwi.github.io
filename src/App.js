import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./comp/Home";
import Introduction from "./comp/Introduction";
import Language from "./comp/Language";
import Certificate from "./comp/Certificate";
import Intern from "./comp/Intern";
import Activity from "./comp/Activity";
import Project from "./comp/Project";
import Banner from "./comp/Banner";
import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div className="header">
          <Link to="/" className="item">
            Home
          </Link>
          <br />
          <Link to="/introduction" className="item">
            Introduction
          </Link>
          <br />
          <Link to="/language" className="item">
            Language
          </Link>
          <Link to="/certificate" className="item">
            Certificate
          </Link>
          <Link to="/intern" className="item">
            Intern
          </Link>
          <Link to="/activity" className="item">
            Activity
          </Link>
          <Link to="/project" className="item">
            Project
          </Link>
        </div>

        <Banner /> {/* Banner 컴포넌트를 렌더링합니다. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/language" element={<Language />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/intern" element={<Intern />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
