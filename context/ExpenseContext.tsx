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
  // Start with default values
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [savings, setSavings] = useState<Savings>({
    total: 0,
    available: 0,
    allocated: 0,
  });

  // Sync with localStorage after the component mounts
  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    const savedCategories = localStorage.getItem("categories");
    const savedSavings = localStorage.getItem("savings");

    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }
    if (savedSavings) {
      setSavings(JSON.parse(savedSavings));
    }
  }, []);

  // Save to localStorage whenever the state changes
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
    setSavings((prev) => ({
      ...prev,
      total: prev.total + amount,
      available: prev.available + amount,
    }));
  };

  const useSavings = (amount: number) => {
    setSavings((prev) => ({
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
