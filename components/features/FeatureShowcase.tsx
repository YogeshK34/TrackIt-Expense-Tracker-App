import { motion } from "framer-motion";

interface FeatureShowcaseProps {
  stats: Record<string, string>;
}

export function FeatureShowcase({ stats }: FeatureShowcaseProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(stats).map(([key, value], index) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-background dark:bg-muted p-6 rounded-xl shadow-lg dark:shadow-black/50 border border-muted"
        >
          <div className="text-2xl font-bold mb-1 text-primary">{value}</div>
          <div className="text-sm text-muted-foreground capitalize">{key}</div>
        </motion.div>
      ))}
    </div>
  );
}
