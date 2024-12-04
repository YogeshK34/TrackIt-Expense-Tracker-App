"use client";
import { motion } from "framer-motion";
import { CircleDollarSign } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-lg blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="relative bg-gradient-to-br from-primary to-primary/80 dark:from-primary/90 dark:to-primary/70 p-2 rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <CircleDollarSign className="w-6 h-6 text-primary-foreground dark:text-white" />
        </motion.div>
      </div>
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-start"
        >
          <span className="text-xl font-bold tracking-tight text-foreground dark:text-white">
            TrackIt
          </span>
          <span className="text-xs text-muted-foreground dark:text-gray-400">
            Smart Finance
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}
