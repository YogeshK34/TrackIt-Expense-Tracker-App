import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  reverse?: boolean;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  reverse,
}: FeatureCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? "lg:order-2" : ""}`}>
      <div className="bg-background dark:bg-muted rounded-2xl p-8 shadow-lg dark:shadow-black/50 border border-muted">
        <div className="bg-primary/10 dark:bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
