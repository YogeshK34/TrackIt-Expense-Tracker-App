import { motion } from "framer-motion";

export function BudgetProgress() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="space-y-4">
        <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "65%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-primary rounded-full"
          />
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Monthly Budget</span>
          <span className="font-medium">65% utilized</span>
        </div>
      </div>
    </motion.div>
  );
}
