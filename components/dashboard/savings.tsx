"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { PiggyBank, ArrowUpCircle } from "lucide-react";
import { useExpense } from "@/context/ExpenseContext";

export function Savings() {
  const { savings, allocateToSavings } = useExpense();
  const [amount, setAmount] = useState("");
  const [isAddingOpen, setIsAddingOpen] = useState(false);

  const handleAddSavings = () => {
    if (amount) {
      allocateToSavings(parseFloat(amount));
      setAmount("");
      setIsAddingOpen(false);
    }
  };

  const progress = (savings.total / 10000) * 100; // Assuming a goal of 10000

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Savings</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-2 rounded-full bg-blue-500 bg-opacity-10">
              <PiggyBank className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="font-medium">Total Savings</p>
              <p className="text-2xl font-bold">
                ${savings.total.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to Goal</span>
              <span>$10,000</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-4">
            <div className="flex space-x-2">
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Dialog open={isAddingOpen} onOpenChange={setIsAddingOpen}>
                <DialogTrigger asChild>
                  <Button className="whitespace-nowrap">
                    <ArrowUpCircle className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add to Savings</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <p>
                      Are you sure you want to add ${amount} to your savings?
                    </p>
                    <Button onClick={handleAddSavings}>Confirm</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
