"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  PieChart,
  Wallet,
  LineChart,
  DollarSign,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { StatCard } from "./hero/StatCard";
import { FeaturePoint } from "./hero/FeaturePoint";
import { BudgetProgress } from "./hero/BudgetProgress";
import { Logo } from "./hero/Logo";
import { useRouter } from "next/navigation";

export function UniqueHero() {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-muted min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-primary/5" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-primary/5" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Logo className="mb-8" />
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block"
              >
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Smart Finance Management
                </span>
              </motion.div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Take Control of Your{" "}
                <span className="text-primary">Financial Future</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform your financial journey with intelligent expense
                tracking, real-time insights, and smart budgeting tools.
              </p>
            </div>

            <div className="space-y-3">
              <FeaturePoint>Real-time expense categorization</FeaturePoint>
              <FeaturePoint>Smart budget recommendations</FeaturePoint>
              <FeaturePoint>Secure data encryption</FeaturePoint>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="group px-6 py-2 text-sm font-semibold hover:bg-primary/90 transition-all duration-300 ease-in-out"
                  onClick={() => {
                    router.push("/dashboard");
                  }}
                >
                  Start Tracking
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Bank-grade security
                </span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <StatCard icon={Wallet} label="Average Savings" value="+ 32.5%" />
              <StatCard icon={PieChart} label="Budget Accuracy" value="98.2%" />
              <StatCard
                icon={LineChart}
                label="Spending Insights"
                value="Real-time"
              />
              <StatCard icon={DollarSign} label="Money Saved" value="$2,450" />
            </div>

            <BudgetProgress />
          </div>
        </div>
      </div>
    </div>
  );
}
