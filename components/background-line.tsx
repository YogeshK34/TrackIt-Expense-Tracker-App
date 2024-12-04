import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { CreditCard } from "lucide-react"; // Importing a relevant icon from lucide-react

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center flex-col px-4 py-12">
      <div className="flex items-center justify-center mb-4">
        <CreditCard className="w-12 h-12 text-slate-700 mr-2" />
        <h2 className="bg-clip-text text-slate-700 bg-gradient-to-b from-blue-600 to-blue-800 text-4xl md:text-5xl lg:text-6xl font-sans relative z-20 font-bold tracking-tight">
          TrackIt
        </h2>
      </div>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
        Smart Expense Tracking for Modern Life
      </h3>
      <p className="max-w-xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-400 text-center">
        Effortlessly manage your finances, track expenses, and gain valuable
        insights into your spending habits. TrackIt empowers you to take control
        of your financial future.
      </p>
    </BackgroundLines>
  );
}
