"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Transaction, Category, Savings } from "@/types/index";
import { defaultCategories } from "@/config/categories";

interface ExpenseContextType {
  transactions: Transaction[];
  categories: Category[];
  savings: Savings;
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: string) => void;
  updateCategory: (category: Category) => void;
  allocateToSavings: (amount: number) => void;
  useSavings: (amount: number) => void;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export function ExpenseProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("transactions");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [categories, setCategories] = useState<Category[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("categories");
      return saved ? JSON.parse(saved) : defaultCategories;
    }
    return defaultCategories;
  });

  const [savings, setSavings] = useState<Savings>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("savings");
      return saved
        ? JSON.parse(saved)
        : { total: 0, available: 0, allocated: 0 };
    }
    return { total: 0, available: 0, allocated: 0 };
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("categories", JSON.stringify(categories));
    localStorage.setItem("savings", JSON.stringify(savings));
  }, [transactions, categories, savings]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [transaction, ...prev]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const updateCategory = (updatedCategory: Category) => {
    setCategories((prev) =>
      prev.map((cat) => (cat.id === updatedCategory.id ? updatedCategory : cat))
    );
  };

  const allocateToSavings = (amount: number) => {
    setSavings((prev : any) => ({
      ...prev,
      total: prev.total + amount,
      available: prev.available + amount,
    }));
  };

  const useSavings = (amount: number) => {
    setSavings((prev : any) => ({
      ...prev,
      available: prev.available - amount,
      allocated: prev.allocated + amount,
    }));
  };

  return (
    <ExpenseContext.Provider
      value={{
        transactions,
        categories,
        savings,
        addTransaction,
        deleteTransaction,
        updateCategory,
        allocateToSavings,
        useSavings,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpense() {
  const context = useContext(ExpenseContext);
  if (context === undefined) {
    throw new Error("useExpense must be used within an ExpenseProvider");
  }
  return context;
}
