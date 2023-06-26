import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./home";
import { CountryNews } from "./country-news";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <div>
          <div>
            <Link to={"/us"}>USA</Link>
          </div>
          <div>
            {" "}
            <Link to={"/my"}>Malaysia</Link>
          </div>
          <div>
            {" "}
            <Link to={"/jp"}>Japan</Link>
          </div>
          <div>
            {" "}
            <Link to={"/ae"}>Emirate</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/:country" element={<CountryNews />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
