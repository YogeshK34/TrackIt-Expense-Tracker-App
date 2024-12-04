"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PlusCircle, Users, CreditCard, Wallet } from "lucide-react";
import { Label } from "@/components/ui/label";
import { FaUniversity } from "react-icons/fa";

interface BankAccount {
  id: string;
  name: string;
  accountNumber: string;
  balance: number;
}

interface UPIAccount {
  id: string;
  name: string;
  upiId: string;
}

export function BankAccounts() {
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([
    {
      id: "1",
      name: "Main Checking",
      accountNumber: "****1234",
      balance: 5000,
    },
    {
      id: "2",
      name: "Savings",
      accountNumber: "****5678",
      balance: 10000,
    },
  ]);
  const [upiAccounts, setUpiAccounts] = useState<UPIAccount[]>([
    { id: "1", name: "Personal UPI", upiId: "user@upi" },
  ]);
  const [isLinkingBank, setIsLinkingBank] = useState(false);
  const [isLinkingUPI, setIsLinkingUPI] = useState(false);

  const handleLinkBank = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newAccount: BankAccount = {
      id: Date.now().toString(),
      name: formData.get("bankName") as string,
      accountNumber: formData.get("accountNumber") as string,
      balance: 0,
    };
    setBankAccounts([...bankAccounts, newAccount]);
    setIsLinkingBank(false);
  };

  const handleLinkUPI = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newUPI: UPIAccount = {
      id: Date.now().toString(),
      name: formData.get("upiName") as string,
      upiId: formData.get("upiId") as string,
    };
    setUpiAccounts([...upiAccounts, newUPI]);
    setIsLinkingUPI(false);
  };

  return (
    <div className="space-y-8">
      {/* Bank Accounts Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Bank Accounts</h2>
        <Dialog open={isLinkingBank} onOpenChange={setIsLinkingBank}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Link Bank Account
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Link Bank Account</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleLinkBank} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bankName">Bank Name</Label>
                <Input
                  id="bankName"
                  name="bankName"
                  placeholder="Enter bank name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input
                  id="accountNumber"
                  name="accountNumber"
                  placeholder="Enter account number"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Link Account
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bankAccounts.map((account) => (
          <Card key={account.id} className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div className="p-3 rounded-full bg-blue-500 bg-opacity-10">
                <FaUniversity className="h-6 w-6 text-blue-500" />
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <CreditCard className="h-4 w-4" />
                <span className="text-sm">{account.accountNumber}</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">{account.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-2xl font-bold text-green-600">
                  ${account.balance.toLocaleString()}
                </p>
                <div className="text-sm text-muted-foreground">
                  Available Balance
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* UPI Accounts Section */}
      <div className="flex justify-between items-center mt-8">
        <h2 className="text-3xl font-bold tracking-tight">UPI Accounts</h2>
        <Dialog open={isLinkingUPI} onOpenChange={setIsLinkingUPI}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Link UPI Account
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Link UPI Account</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleLinkUPI} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="upiName">UPI Name</Label>
                <Input
                  id="upiName"
                  name="upiName"
                  placeholder="Enter UPI name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="upiId">UPI ID</Label>
                <Input
                  id="upiId"
                  name="upiId"
                  placeholder="Enter UPI Id"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Link UPI
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {upiAccounts.map((upi) => (
          <Card key={upi.id} className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div className="p-3 rounded-full bg-purple-500 bg-opacity-10">
                <Wallet className="h-6 w-6 text-purple-500" />
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span className="text-sm">UPI Account</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">{upi.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-muted-foreground">{upi.upiId}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
