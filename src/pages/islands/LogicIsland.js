import React from "react";
import { Link } from "react-router-dom";
import ScreenSection from "../../components/ScreenSection";
import Card from "../../components/ui/Card";
import CharacterBubble from "../../components/ui/CharacterBubble";
import PrimaryButton from "../../components/ui/PrimaryButton";

const sampleChallenges = [
  "Help Tali finish a silly pattern of shapes.",
  "Spot the picture that doesn’t belong.",
  "Solve a mini riddle about jungle friends.",
];

export default function LogicIsland() {
  return (
    <ScreenSection variant="sunset">
      <div className="w-full max-w-xl space-y-6 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Logic Island
          </p>
          <h1 className="text-4xl font-black text-orange-900 drop-shadow-sm">
            Puzzle Camp
          </h1>
        </div>

        <Card className="space-y-4 bg-white/95">
          <div className="flex items-center justify-center gap-3 text-4xl">
            <span role="img" aria-label="brain">
              🧠
            </span>
            <span role="img" aria-label="puzzle">
              🧩
            </span>
          </div>
          <p className="text-lg font-semibold text-orange-900">
            We are building fun logic puzzles where Tali sorts goofy clues and
            patterns.
          </p>
          <ul className="space-y-2 text-left text-base font-medium text-orange-800">
            {sampleChallenges.map((challenge) => (
              <li key={challenge} className="flex items-start gap-2">
                <span>✨</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </Card>

        <CharacterBubble tone="warning">
          Logic Island unlocks soon! Stay tuned for brain-tickling stories.
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

