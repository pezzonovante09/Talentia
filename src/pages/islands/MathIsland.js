import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ScreenSection from "../../components/ScreenSection";
import Card from "../../components/ui/Card";
import PrimaryButton from "../../components/ui/PrimaryButton";
import CharacterBubble from "../../components/ui/CharacterBubble";

const appleEmoji = "🍎";

function createRound() {
  const count = Math.floor(Math.random() * 4) + 2; // 2-5 apples
  const options = new Set([count]);

  while (options.size < 4) {
    options.add(Math.floor(Math.random() * 6) + 1);
  }

  return {
    count,
    options: Array.from(options).sort(() => Math.random() - 0.5),
  };
}

export default function MathIsland() {
  const [round, setRound] = useState(() => createRound());
  const [feedback, setFeedback] = useState(null);

  const appleRow = useMemo(
    () =>
      Array.from({ length: round.count }).map((_, index) => (
        <span key={index} className="animate-pop text-4xl sm:text-5xl">
          {appleEmoji}
        </span>
      )),
    [round.count],
  );

  const handleAnswer = (value) => {
    const isCorrect = value === round.count;
    setFeedback(isCorrect ? "Great job!" : "Try again!");

    if (isCorrect) {
      setTimeout(() => {
        setRound(createRound());
        setFeedback(null);
      }, 1200);
    }
  };

  return (
    <ScreenSection variant="sky">
      <div className="w-full max-w-lg space-y-6 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
            Math Island Mission
          </p>
          <h1 className="text-4xl font-black text-sky-900 drop-shadow-sm">
            Count the Apples
          </h1>
        </div>

        <Card>
          <h2 className="text-3xl font-black text-sky-800">
            How many apples?
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {appleRow}
          </div>
        </Card>

        <div className="grid w-full grid-cols-2 gap-4">
          {round.options.map((option) => (
            <PrimaryButton
              key={option}
              onClick={() => handleAnswer(option)}
              className="rounded-2xl py-3 text-2xl font-black"
            >
              {option}
            </PrimaryButton>
          ))}
        </div>

        <CharacterBubble
          tone={feedback === "Great job!" ? "success" : "default"}
          className="text-center text-xl font-bold"
        >
          {feedback ?? "Tap the number that matches the apples!"}
        </CharacterBubble>

        <div className="flex flex-col gap-3">
          <Link to="/map">
            <PrimaryButton variant="secondary">Back to Map</PrimaryButton>
          </Link>
          <button
            className="text-sm font-semibold text-sky-900 underline decoration-dotted"
            onClick={() => {
              setRound(createRound());
              setFeedback(null);
            }}
          >
            Need a new challenge? Shuffle apples
          </button>
        </div>
      </div>
    </ScreenSection>
  );
}

