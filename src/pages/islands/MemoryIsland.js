import React from "react";
import { Link } from "react-router-dom";
import ScreenSection from "../../components/ScreenSection";
import Card from "../../components/ui/Card";
import CharacterBubble from "../../components/ui/CharacterBubble";
import PrimaryButton from "../../components/ui/PrimaryButton";

const samplePairs = [
  { icon: "🍓", label: "Berry" },
  { icon: "🎈", label: "Balloon" },
  { icon: "🌟", label: "Star" },
];

export default function MemoryIsland() {
  return (
    <ScreenSection variant="sunset">
      <div className="w-full max-w-xl space-y-6 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
            Memory Isle
          </p>
          <h1 className="text-4xl font-black text-rose-900 drop-shadow-sm">
            Flip & Remember
          </h1>
        </div>

        <Card className="space-y-5 bg-white/95">
          <p className="text-lg font-semibold text-rose-900">
            We&apos;re crafting a matching game with floating cards and sparkly
            sounds.
          </p>
          <div className="grid grid-cols-3 gap-3 text-left text-base">
            {samplePairs.map((pair) => (
              <div
                key={pair.label}
                className="rounded-3xl bg-rose-50 p-4 text-center font-semibold text-rose-800"
              >
                <div className="text-3xl">{pair.icon}</div>
                <p>{pair.label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm font-medium text-rose-700">
            Match twins to help Tali collect memory shells 💖
          </p>
        </Card>

        <CharacterBubble tone="warning">
          Memory cards are drying on the shore. Check back very soon!
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

