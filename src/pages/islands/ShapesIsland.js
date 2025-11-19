import React from "react";
import { Link } from "react-router-dom";
import ScreenSection from "../../components/ScreenSection";
import Card from "../../components/ui/Card";
import CharacterBubble from "../../components/ui/CharacterBubble";
import PrimaryButton from "../../components/ui/PrimaryButton";

export default function ShapesIsland() {
  return (
    <ScreenSection variant="meadow">
      <div className="w-full max-w-xl space-y-6 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Shapes Island
          </p>
          <h1 className="text-4xl font-black text-cyan-900 drop-shadow-sm">
            Shape Lagoon
          </h1>
        </div>

        <Card className="space-y-4 bg-white/90">
          <div className="flex flex-wrap items-center justify-center gap-3 text-4xl">
            <span>🔺</span>
            <span>🟢</span>
            <span>🟣</span>
            <span>⬜️</span>
          </div>
          <p className="text-lg font-semibold text-cyan-900">
            Soon you will sort shapes, tap colors, and build silly boats for
            Tali&apos;s lagoon friends.
          </p>
          <div className="grid grid-cols-2 gap-3 text-left text-base font-medium text-cyan-800">
            <p className="rounded-2xl bg-cyan-50 p-3">Match glowing shapes.</p>
            <p className="rounded-2xl bg-cyan-50 p-3">
              Trace super-sized stars.
            </p>
            <p className="rounded-2xl bg-cyan-50 p-3">
              Sort by size & sparkle.
            </p>
            <p className="rounded-2xl bg-cyan-50 p-3">
              Build rainbow towers.
            </p>
          </div>
        </Card>

        <CharacterBubble>
          Take a peek later—Tali is painting new shapes as fast as possible!
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

