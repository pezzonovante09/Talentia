import React from "react";
import { Link } from "react-router-dom";
import ScreenSection from "../components/ScreenSection";
import CharacterBubble from "../components/ui/CharacterBubble";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import DinoCharacter from "../components/DinoCharacter";

const storyText = [
  "Tali the Dino lives in the Rainbow Valley where fruits glow and shapes sing.",
  "Each day, Tali collects shiny learning stars by solving mini-missions.",
  "Today, Tali needs your help counting magical apples. Ready to be a helper?",
];

export default function DinoIntro() {
  return (
    <ScreenSection variant="sunset" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.5)_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="relative flex w-full flex-col items-center gap-6 text-center">
        <DinoCharacter size="w-40" className="animate-wiggle" />

        <Card className="space-y-4 bg-white/95">
          <h2 className="text-3xl font-black text-emerald-700">Dino Intro</h2>
          <div className="space-y-3 text-left text-lg text-emerald-900">
            {storyText.map((line) => (
              <p key={line} className="animate-slide-up">
                {line}
              </p>
            ))}
          </div>
        </Card>

        <CharacterBubble tone="success">
          When you&#39;re ready, tap continue to start the first mission.
        </CharacterBubble>

        <div className="w-full max-w-xs space-y-3">
          <Link to="/play">
            <PrimaryButton>Continue</PrimaryButton>
          </Link>
          <Link to="/" className="block">
            <PrimaryButton variant="secondary">Back Home</PrimaryButton>
          </Link>
        </div>
      </div>
    </ScreenSection>
  );
}

