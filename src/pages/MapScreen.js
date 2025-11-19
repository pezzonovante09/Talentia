import React from "react";
import { Link } from "react-router-dom";
import ScreenSection from "../components/ScreenSection";
import PrimaryButton from "../components/ui/PrimaryButton";
import CharacterBubble from "../components/ui/CharacterBubble";

const islands = [
  {
    name: "Math Island",
    path: "/island/math",
    color: "from-emerald-400 to-lime-500",
    icon: "🔢",
    description: "Counting + numbers",
  },
  {
    name: "Logic Island",
    path: "/island/logic",
    color: "from-amber-300 to-orange-400",
    icon: "🧠",
    description: "Riddles & patterns",
  },
  {
    name: "Shapes Island",
    path: "/island/shapes",
    color: "from-cyan-300 to-sky-400",
    icon: "🟣",
    description: "Shapes & colors",
  },
  {
    name: "Memory Isle",
    path: "/island/memory",
    color: "from-rose-300 to-pink-400",
    icon: "🧩",
    description: "Remember & match",
  },
  {
    name: "Patterns Cove",
    path: "/island/patterns",
    color: "from-violet-300 to-indigo-400",
    icon: "🌈",
    description: "Complete the path",
  },
];

export default function MapScreen() {
  return (
    <ScreenSection variant="sky" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 flex w-full flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-black text-emerald-900 drop-shadow-lg">
          Choose Your Island
        </h1>
        <p className="max-w-xl text-lg font-semibold text-emerald-800">
          Tap an island to start a playful mission with Tali. Each island hides
          a new learning adventure!
        </p>

        <div className="relative w-full max-w-4xl rounded-[48px] border-4 border-white/80 bg-white/70 p-6 shadow-2xl">
          <div className="absolute inset-0 rounded-[48px] bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_1px,_transparent_1px)] bg-[length:40px_40px] opacity-70" />
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3">
            {islands.map((island, index) => (
              <Link
                key={island.name}
                to={island.path}
                className="group focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
              >
                <div
                  className={`flex h-40 flex-col items-center justify-center rounded-[36px] border-4 border-white bg-gradient-to-br ${island.color} text-center text-white shadow-xl shadow-emerald-900/10 transition duration-200 hover:-translate-y-1 hover:scale-[1.03] active:scale-95`}
                >
                  <span className="text-4xl sm:text-5xl">
                    {island.icon}
                  </span>
                  <p className="mt-2 text-lg font-bold leading-tight">
                    {island.name}
                  </p>
                  <p className="text-xs font-semibold opacity-90">
                    {island.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <CharacterBubble className="max-w-md text-center">
          Psst! More islands are coming soon. For now, explore the ones glowing
          brightest.
        </CharacterBubble>

        <div className="w-full max-w-xs space-y-3">
          <Link to="/">
            <PrimaryButton variant="secondary">Back Home</PrimaryButton>
          </Link>
        </div>
      </div>
    </ScreenSection>
  );
}

