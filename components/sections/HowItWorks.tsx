"use client";
import { motion } from "framer-motion";
import { Smartphone, BarChart3, Lightbulb, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Connect Your Accounts",
    description:
      "Securely link your bank accounts and credit cards in minutes.",
  },
  {
    icon: BarChart3,
    title: "Track Expenses",
    description: "Automatically categorize and monitor your spending patterns.",
  },
  {
    icon: Lightbulb,
    title: "Get Insights",
    description:
      "Receive personalized recommendations to optimize your finances.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">How TrackIt Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with TrackIt in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-background rounded-xl p-8 shadow-lg border border-border/50 h-full">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
