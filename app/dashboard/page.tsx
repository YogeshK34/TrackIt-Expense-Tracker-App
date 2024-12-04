"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Overview } from "@/components/dashboard/overview";
import { Budget } from "@/components/dashboard/budget";
import { Savings } from "@/components/dashboard/savings";
import { BankAccounts } from "@/components/dashboard/bank-accounts";
import ReceiptSharingComponent from "@/components/dashboard/receipt-sharing";
import { ExpenseProvider } from "@/context/ExpenseContext";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <ExpenseProvider>
      <div className="flex h-screen">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-y-auto p-8">
          <ExpenseProvider>
            {activeTab === "overview" && <Overview />}
          </ExpenseProvider>
          {activeTab === "budget" && <Budget />}
          {activeTab === "savings" && <Savings />}
          {activeTab === "bank-accounts" && <BankAccounts />}
          {activeTab === "receipt-sharing" && <ReceiptSharingComponent />}
        </main>
      </div>
    </ExpenseProvider>
  );
}
