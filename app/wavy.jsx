"use client";
import React from "react";
import { WavyBackground } from "./components/ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    (<WavyBackground className="max-w-4xl mx-auto pb-40">
      <p
        className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Is your Medical Info ❝SECURED ?❞
      </p>
      <p
        className="text-base md:text-2xl mt-4 text-white font-normal inter-var text-center">
        Secure your medical data with us .  We are 👇
      </p>
    </WavyBackground>)
  );
}
