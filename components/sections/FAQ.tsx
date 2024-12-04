"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How secure is TrackIt?",
    answer:
      "TrackIt uses bank-level 256-bit encryption to protect your data. We never store your banking credentials and use secure APIs to connect with financial institutions.",
  },
  {
    question: "Can I connect multiple bank accounts?",
    answer:
      "Yes! You can connect multiple bank accounts, credit cards, and investment accounts to get a complete view of your finances in one place.",
  },
  {
    question: "Is my data shared with third parties?",
    answer:
      "No, we never share your personal or financial data with third parties. Your privacy and security are our top priorities.",
  },
  {
    question: "How accurate is the expense categorization?",
    answer:
      "Our AI-powered system accurately categorizes over 95% of transactions automatically. You can also manually adjust categories and create custom rules.",
  },
  {
    question: "Can I export my financial data?",
    answer:
      "Yes, you can export your data in various formats including CSV and PDF for your records or analysis.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about TrackIt
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
