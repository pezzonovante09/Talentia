import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ScreenSection from "../components/ScreenSection";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import CharacterBubble from "../components/ui/CharacterBubble";
import ChatPanel from "../components/ChatPanel";
import ISLANDS from "../data/islands";

export default function IslandQuiz() {
  const { islandId } = useParams();
  const navigate = useNavigate();
  const island = useMemo(
    () => ISLANDS.find((entry) => entry.id === islandId),
    [islandId],
  );
  const [feedback, setFeedback] = useState(null);
  const [hint, setHint] = useState("");
  const [isHintLoading, setIsHintLoading] = useState(false);

  if (!island) {
    return (
      <ScreenSection variant="sunset">
        <Card className="space-y-4 text-center">
          <h1 className="text-3xl font-black text-rose-600">
            Island Not Found
          </h1>
          <p>Let&#39;s sail back to the map and try again.</p>
          <PrimaryButton onClick={() => navigate("/map")}>
            Back to Map
          </PrimaryButton>
        </Card>
      </ScreenSection>
    );
  }

  const fetchHint = async (childAnswer) => {
    try {
      setIsHintLoading(true);
      const response = await fetch("/api/hints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: island.question,
          childAnswer,
          correctAnswer: island.answer,
        }),
      });

      if (!response.ok) {
        throw new Error("Hint failed");
      }

      const data = await response.json();
      setHint(data.hint);
    } catch (err) {
      setHint("Keep going! Maybe count with your fingers.");
      console.error(err);
    } finally {
      setIsHintLoading(false);
    }
  };

  const handleAnswer = (value) => {
    const isCorrect = value === island.answer;
    setFeedback(isCorrect ? "Great job! 🌟" : "Try again!");

    if (isCorrect) {
      setTimeout(() => {
        setFeedback(null);
        setHint("");
        navigate("/map");
      }, 1500);
    } else {
      fetchHint(value);
    }
  };

  return (
    <ScreenSection variant="meadow">
      <div className="w-full max-w-xl space-y-6 text-center">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            {island.name}
          </p>
          <div className="flex items-center justify-center gap-3 text-5xl">
            <span>{island.icon}</span>
            <span role="img" aria-label="math sparkles">
              ✨
            </span>
          </div>
          <h1 className="text-4xl font-black text-emerald-900">
            Math Mission
          </h1>
          <p className="text-base font-semibold text-emerald-800">
            {island.description}
          </p>
        </div>

        <Card className="space-y-4">
          <p className="text-xl font-semibold text-emerald-900">
            {island.question}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {island.options.map((option) => (
              <PrimaryButton
                key={option}
                onClick={() => handleAnswer(option)}
                className="rounded-2xl py-3 text-2xl font-black"
              >
                {option}
              </PrimaryButton>
            ))}
          </div>
        </Card>

        <CharacterBubble
          tone={feedback?.includes("Great") ? "success" : "default"}
          className="text-center text-xl font-bold space-y-2"
        >
          <p>{feedback ?? "Choose the answer to help Tali!"}</p>
          {isHintLoading && <p className="text-base font-medium">Tali is thinking of a hint...</p>}
          {!isHintLoading && hint && (
            <p className="text-base font-semibold text-emerald-700">{hint}</p>
          )}
        </CharacterBubble>

        <div className="rounded-3xl border-2 border-amber-100 bg-white/90 p-4 text-left shadow-inner">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Voice chat coming soon
          </p>
          <p className="text-base text-amber-800">
            Tali is learning new sound tricks. For now, type or tap the chat box
            below to talk with her.
          </p>
        </div>

        <ChatPanel question={island.question} />

        <div className="mx-auto w-full max-w-xs space-y-3">
          <Link to="/map">
            <PrimaryButton variant="secondary">Back to Map</PrimaryButton>
          </Link>
        </div>
      </div>
    </ScreenSection>
  );
}


