import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DinoIntro from "./pages/DinoIntro";
import MapScreen from "./pages/MapScreen";
import MathIsland from "./pages/islands/MathIsland";
import LogicIsland from "./pages/islands/LogicIsland";
import ShapesIsland from "./pages/islands/ShapesIsland";
import MemoryIsland from "./pages/islands/MemoryIsland";
import PatternsIsland from "./pages/islands/PatternsIsland";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapScreen />} />
        <Route path="/story" element={<DinoIntro />} />
        <Route path="/island/math" element={<MathIsland />} />
        <Route path="/island/logic" element={<LogicIsland />} />
        <Route path="/island/shapes" element={<ShapesIsland />} />
        <Route path="/island/memory" element={<MemoryIsland />} />
        <Route path="/island/patterns" element={<PatternsIsland />} />
      </Routes>
    </Router>
  );
}

export default App;
