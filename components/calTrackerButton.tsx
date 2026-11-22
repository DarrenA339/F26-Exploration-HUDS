"use client";

import { useState } from "react";
import CalorieTracker from "@/components/calTrackerOverlay";

export default function CalTrackerButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-4 rounded-2xl bg-white px-9 py-6 font-serif text-2xl font-bold text-[#9B2335] cursor-pointer hover:bg-gray-50 active:opacity-70 transition duration-150 ease-in-out"
      >
        {/* Pulse / activity icon */}
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h4l3-8 6 16 3-8h4" />
        </svg>
        Enter Calorie Tracker Mode
      </button>

      {/* The overlay: dark backdrop + tracker, shown when the button is clicked */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-10"
        >
          {/* stopPropagation so clicks inside the tracker don't close it */}
          <div onClick={(e) => e.stopPropagation()}>
            <CalorieTracker onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
