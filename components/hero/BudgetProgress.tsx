import { motion } from "framer-motion";

export function BudgetProgress() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-background dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50"
    >
      <div className="space-y-4">
        <div className="h-2 w-full bg-primary/10 dark:bg-primary/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "65%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-primary dark:bg-primary/90 rounded-full"
          />
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground dark:text-gray-400">
            Monthly Budget
          </span>
          <span className="font-medium text-foreground dark:text-white">
            65% utilized
          </span>
        </div>
      </div>
    </motion.div>
  );
}
