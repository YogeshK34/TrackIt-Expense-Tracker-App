"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center overflow-hidden rounded-md shadow-lg">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-gray-800 relative z-20">
        TrackIt
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#3B82F6" // Blue color for particles
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white to-gray-100 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <p className="mt-4 text-xl text-gray-600 max-w-lg text-center">
        Effortlessly manage your expenses with our intuitive tracking system
      </p>
    </div>
  );
}
