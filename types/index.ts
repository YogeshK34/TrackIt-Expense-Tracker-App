import { ForwardRefExoticComponent } from "react";
import { LucideProps } from "lucide-react";

export interface Transaction {
    id: string;
    description: string;
    amount: number;
    type: "income" | "expense";
    date: string;
    category?: string;
}

export interface Category {
    id: string;
    name: string;
    budget: number;
    color: string;
    icon: string;
}

export interface Budget {
    categoryId: string;
    spent: number;
    remaining: number;
    total: number;
}

export interface Savings {
    total: number;
    available: number;
    allocated: number;
}

