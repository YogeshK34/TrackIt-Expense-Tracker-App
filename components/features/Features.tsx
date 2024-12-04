"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SmartBudgeting } from "./smart-budgeting";
import { BankSyncForm } from "./bank-sync-form";
import { SmartReceiptScanningForm } from "./smart-receipt-form";
import { Card } from "@/components/ui/card";

const features = [
  {
    id: "receipt",
    title: "Smart Receipt Scanning",
    description:
      "Capture receipts instantly with our AI-powered scanner. No more manual data entry or lost receipts.",
    component: SmartReceiptScanningForm,
  },
  {
    id: "budget",
    title: "Intelligent Budgeting",
    description:
      "Get personalized insights and automated categorization. Make smarter financial decisions with real-time tracking.",
    component: SmartBudgeting,
  },
  {
    id: "bank",
    title: "Secure Bank Integration",
    description:
      "Connect your accounts securely for real-time synchronization. Your data is always protected and encrypted.",
    component: BankSyncForm,
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

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <div className="bg-gradient-to-b from-background to-muted">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="text-center mb-16">
          <motion.h2
            variants={item}
            className="text-3xl font-bold tracking-tight mb-4"
          >
            Powerful Features for{" "}
            <span className="text-primary">Smart Finance</span>
          </motion.h2>
          <motion.p
            variants={item}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Experience the future of expense tracking with our innovative tools
            and intelligent features.
          </motion.p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={item}
              className={`flex flex-col gap-16 items-center lg:items-start lg:gap-8 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="w-full lg:w-5/12 space-y-6 text-center lg:text-left lg:pt-20">
                <Card className="p-6 bg-gradient-to-br from-background to-muted border-none shadow-lg">
                  <h2 className="text-3xl font-bold tracking-tight mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-xl leading-relaxed text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full px-8 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Learn more
                  </Button>
                </Card>
              </div>

              <motion.div
                className="w-full lg:w-7/12"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-gradient-to-br from-background to-muted rounded-2xl shadow-lg border border-border/50 overflow-hidden">
                  <feature.component />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
