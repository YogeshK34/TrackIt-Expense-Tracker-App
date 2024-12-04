"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard } from "lucide-react";

const banks = [
  { name: "Kotak Mahindra Bank", icon: "🏦" },
  { name: "Bank of India", icon: "🏛️" },
  { name: "ICICI Bank", icon: "💰" },
  { name: "Indian Overseas Bank", icon: "🏢" },
  { name: "Axis Bank", icon: "🏪" },
];

export function BankSyncForm() {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Real-time Bank Sync</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div>
            <Label htmlFor="number">Phone Number</Label>
            <Input id="number" type="number" placeholder="Enter your number" />
          </div>
          <div>
            <Label htmlFor="bank">Your bank</Label>
            <Select>
              <SelectTrigger id="bank">
                <SelectValue placeholder="Select your bank" />
              </SelectTrigger>
              <SelectContent>
                {banks.map((bank) => (
                  <SelectItem key={bank.name} value={bank.name.toLowerCase()}>
                    <div className="flex items-center">
                      <span className="mr-2">{bank.icon}</span>
                      {bank.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full" size="lg">
            <CreditCard className="w-4 h-4 mr-2" />
            Connect Securely
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-2">
            Your data is encrypted and secure. We never store your banking
            credentials.
          </p>
        </form>
      </div>
    </div>
  );
}
