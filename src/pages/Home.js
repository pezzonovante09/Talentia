import React from "react";
import { Link } from "react-router-dom";
import ScreenSection from "../components/ScreenSection";
import DinoCharacter from "../components/DinoCharacter";
import CharacterBubble from "../components/ui/CharacterBubble";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function Home() {
  return (
    <ScreenSection variant="meadow">
      <div className="flex w-full flex-col items-center gap-6 text-center">
        <DinoCharacter />
        <div className="space-y-1">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-800">
            Welcome to
          </p>
          <h1 className="text-5xl font-black text-emerald-900 drop-shadow-sm">
            Talentia
          </h1>
          <p className="text-lg font-semibold text-emerald-800">
            Learn & play with Tali the Dino
          </p>
        </div>

        <CharacterBubble>
          Hi, friend! I&#39;m Tali. Let&#39;s go on a math adventure where we
          count, compare, and giggle together.
        </CharacterBubble>

        <div className="w-full max-w-xs space-y-3">
          <Link to="/map">
            <PrimaryButton>Start Journey</PrimaryButton>
          </Link>
          <Link
            to="/story"
            className="block text-sm font-semibold text-emerald-900/80 underline decoration-dotted"
          >
            Meet Tali&#39;s story
          </Link>
        </div>
      </div>
    </ScreenSection>
  );
}

