"use client";

import { useEffect, useState } from "react";

// ⚠️ PENDIENTE: fecha/hora real del evento — pedir al cliente (ver CLAUDE_CODE_BRIEF.md).
// Placeholder: viernes 13 de noviembre de 2026, 13hs (Argentina, UTC-3).
const EVENT_DATE = new Date("2026-11-13T13:00:00-03:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function hasEventPassed(target: Date) {
  return Date.now() >= target.getTime();
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Seg" },
];

export default function Countdown() {
  // null hasta el primer render en cliente, para evitar mismatch de hidratación.
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    setTimeLeft(getTimeLeft(EVENT_DATE));
    setPassed(hasEventPassed(EVENT_DATE));
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(EVENT_DATE));
      setPassed(hasEventPassed(EVENT_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (passed) {
    return (
      <p className="font-serif text-2xl text-cream">
        ¡Ya nos casamos! Gracias por acompañarnos.
      </p>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6">
      {UNITS.map(({ key, label }) => (
        <div
          key={key}
          className="flex flex-col items-center justify-center rounded-lg border border-cream/25 bg-cream/10 px-3 py-2 min-w-16 backdrop-blur-sm"
        >
          <span className="font-serif text-2xl tabular-nums text-cream">
            {timeLeft ? String(timeLeft[key]).padStart(2, "0") : "--"}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-cream/70">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
