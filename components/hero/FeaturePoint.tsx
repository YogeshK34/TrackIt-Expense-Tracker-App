import { motion } from "framer-motion";

interface FeaturePointProps {
  children: React.ReactNode;
}

export function FeaturePoint({ children }: FeaturePointProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center space-x-2"
    >
      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
      <span className="text-muted-foreground">{children}</span>
    </motion.div>
  );
}
