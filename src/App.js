import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DinoIntro from "./pages/DinoIntro";
import MapScreen from "./pages/MapScreen";
import IslandQuiz from "./pages/IslandQuiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<MapScreen />} />
      <Route path="/story" element={<DinoIntro />} />
      <Route path="/island/:islandId" element={<IslandQuiz />} />
    </Routes>
  );
}

export default App;
