"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowUpCircle,
  ArrowDownCircle,
  PlusCircle,
  Trash2,
} from "lucide-react";
import { LineChartComponent } from "./charts/line-chart";
import { PieChart } from "./charts/pie-chart";
import { TransactionForm } from "./transactions/transaction-form";
import { useExpense } from "@/context/ExpenseContext";
import { useState } from "react";

export function Overview() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { transactions, addTransaction, deleteTransaction, categories } =
    useExpense();

  const handleAddTransaction = (transaction: any) => {
    addTransaction(transaction);
    setDialogOpen(false); // Close the dialog after adding the transaction
  };

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const monthlyData = transactions.reduce(
    (
      acc: {
        [key: string]: { month: string; income: number; expenses: number };
      },
      t
    ) => {
      const month = new Date(t.date).toLocaleString("default", {
        month: "short",
      });
      if (!acc[month]) {
        acc[month] = { month, income: 0, expenses: 0 };
      }
      if (t.type === "income") {
        acc[month].income += t.amount;
      } else {
        acc[month].expenses += t.amount;
      }
      return acc;
    },
    {}
  );

  const lineChartData = Object.values(monthlyData);

  const expensesByCategory = categories.map((cat) => ({
    category: cat.name,
    value: cat.budget,
  }));

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Transaction
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Transaction</DialogTitle>
            </DialogHeader>
            <TransactionForm
              onSubmit={handleAddTransaction}
              onCancel={() => setDialogOpen(false)} // Close the dialog on cancel
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Total Balance</p>
            <ArrowUpCircle
              className={`h-4 w-4 ${
                balance >= 0 ? "text-green-500" : "text-red-500"
              }`}
            />
          </div>
          <p className="text-2xl font-bold">${balance.toFixed(2)}</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Total Income</p>
              <p className="text-2xl font-bold">${totalIncome.toFixed(2)}</p>
            </div>
            <ArrowUpCircle className="h-4 w-4 text-green-500" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Total Expenses</p>
              <p className="text-2xl font-bold">${totalExpenses.toFixed(2)}</p>
            </div>
            <ArrowDownCircle className="h-4 w-4 text-red-500" />
          </div>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="distribution">Distribution</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Income vs Expenses</h3>
              <div className="h-[300px]">
                <LineChartComponent data={lineChartData} />
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Recent Transactions
              </h3>
              <div className="space-y-4 max-h-[300px] overflow-y-auto">
                {transactions.slice(0, 5).map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <h4 className="font-medium">{transaction.description}</h4>
                      <p className="text-sm text-muted-foreground">
                        {transaction.category && `${transaction.category} • `}
                        {new Date(transaction.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p
                        className={`font-semibold ${
                          transaction.type === "income"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {transaction.type === "income" ? "+" : "-"}$
                        {transaction.amount.toFixed(2)}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteTransaction(transaction.id)}
                        className="ml-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="distribution" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Expense Distribution
              </h3>
              <div className="h-[300px]">
                <PieChart data={expensesByCategory} />
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Expense Categories</h3>
              <div className="space-y-4 max-h-[300px] overflow-y-auto">
                {expensesByCategory.map((category, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span>{category.category}</span>
                    <span className="font-semibold">
                      ${category.value.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
