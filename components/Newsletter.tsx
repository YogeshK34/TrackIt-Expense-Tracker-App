"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { MailIcon, Sparkles, CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container relative mx-auto px-4"
      >
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-background to-muted border border-border/50 rounded-2xl p-8 md:p-12 shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center space-y-4"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MailIcon className="w-8 h-8 text-primary" />
              </div>

              <h2 className="text-3xl font-bold">Stay Updated with TrackIt</h2>

              <p className="text-muted-foreground text-lg">
                Get exclusive tips, updates on new features, and financial
                insights delivered straight to your inbox.
              </p>

              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 mt-8"
              >
                <div className="flex-1 relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pr-10"
                    required
                  />
                  <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  {isSubmitted ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Subscribed!
                    </motion.span>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </motion.form>

              <p className="text-sm text-muted-foreground mt-4">
                Join over 10,000+ users who are already managing their finances
                smarter.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
