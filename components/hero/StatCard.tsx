"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export function StatCard({ icon: Icon, label, value }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-background dark:bg-gray-800 p-4 rounded-xl shadow-lg dark:shadow-gray-900/50 flex items-center space-x-4"
    >
      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-primary dark:text-primary/90" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground dark:text-gray-400">
          {label}
        </p>
        <p className="text-xl font-semibold text-foreground dark:text-white">
          {value}
        </p>
      </div>
    </motion.div>
  );
}
