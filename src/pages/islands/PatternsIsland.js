import React from "react";
import { Link } from "react-router-dom";
import ScreenSection from "../../components/ScreenSection";
import Card from "../../components/ui/Card";
import CharacterBubble from "../../components/ui/CharacterBubble";
import PrimaryButton from "../../components/ui/PrimaryButton";

const previewPattern = ["🌞", "🌜", "🌞", "🌜", "❓"];

export default function PatternsIsland() {
  return (
    <ScreenSection variant="sky">
      <div className="w-full max-w-xl space-y-6 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Patterns Cove
          </p>
          <h1 className="text-4xl font-black text-indigo-900 drop-shadow-sm">
            Rhythm Reef
          </h1>
        </div>

        <Card className="space-y-4 bg-white/95">
          <p className="text-lg font-semibold text-indigo-900">
            Soon you&apos;ll drag the missing icon to finish Tali&apos;s beach
            patterns.
          </p>
          <div className="flex items-center justify-center gap-3 text-4xl">
            {previewPattern.map((icon, idx) => (
              <span
                key={`${icon}-${idx}`}
                className={`rounded-full bg-indigo-50 px-4 py-2 ${
                  icon === "❓" ? "animate-pulse text-indigo-500" : ""
                }`}
              >
                {icon}
              </span>
            ))}
          </div>
          <p className="text-base font-medium text-indigo-800">
            Can you guess what comes next? 🌊
          </p>
        </Card>

        <CharacterBubble>
          Rhythm Reef opens after Tali tunes her seashell xylophone. Stay ready!
        </CharacterBubble>

        <div className="mx-auto w-full max-w-xs space-y-3">
          <PrimaryButton disabled className="opacity-60">
            Coming Soon
          </PrimaryButton>
          <Link to="/map" className="block">
            <PrimaryButton variant="secondary">Back to Map</PrimaryButton>
          </Link>
        </div>
      </div>
    </ScreenSection>
  );
}

