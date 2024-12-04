"use client";
import { motion } from "framer-motion";
import { BarChart2, Shield, Zap } from "lucide-react";
import { FeatureCard } from "./FeatureCard";
import { FeatureShowcase } from "./FeatureShowcase";

const features = [
  {
    id: "analytics",
    title: "Advanced Analytics",
    description:
      "Get deep insights into your spending patterns with AI-powered analytics and visualization tools.",
    icon: BarChart2,
    stats: {
      accuracy: "99.9%",
      processed: "1M+ transactions",
      savings: "30% cost reduction",
      encryption: "Not applicable",
      compliance: "Not applicable",
      protection: "Not applicable",
      speed: "Real-time updates",
      saved: "Time-efficient",
    },
  },
  {
    id: "security",
    title: "Bank-Grade Security",
    description:
      "Your data is protected with enterprise-level encryption and multi-factor authentication.",
    icon: Shield,
    stats: {
      accuracy: "Industry standard",
      processed: "Continuous monitoring",
      savings: "Not applicable",
      encryption: "256-bit AES encryption",
      compliance: "SOC2 certified",
      protection: "100% coverage",
      speed: "Instant verification",
      saved: "Improved safety",
    },
  },
  {
    id: "automation",
    title: "Smart Automation",
    description:
      "Automate your expense tracking with intelligent categorization and real-time updates.",
    icon: Zap,
    stats: {
      accuracy: "98% categorization accuracy",
      processed: "Over 1M+ transactions",
      savings: "Significant manual effort saved",
      encryption: "Built-in security protocols",
      compliance: "GDPR compliant",
      protection: "Automated fraud detection",
      speed: "0.1-second response time",
      saved: "5 hours/week saved",
    },
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export function FeatureSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted dark:from-background dark:to-muted" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-foreground"
          >
            Powerful Features for Modern Finance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Experience the next generation of financial management
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                reverse={index % 2 === 1}
              />
              <FeatureShowcase stats={feature.stats} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
