import { Category } from "@/types";
import { CarIcon, CoffeeIcon, HeartIcon, HomeIcon, PlaneIcon, ShoppingBagIcon, SmartphoneIcon, UtensilsIcon } from "lucide-react";

export const defaultCategories: Category[] = [
    {
        id: "shopping",
        name: "Shopping",
        budget: 500,
        color: "pink",
        icon: "ShoppingBag"
    },
    {
        id: "housing",
        name: "Housing",
        budget: 1500,
        color: "blue",
        icon: "Home"
    },
    {
        id: "transport",
        name: "Transport",
        budget: 300,
        color: "yellow",
        icon: "Car"
    },
    {
        id: "food",
        name: "Food & Dining",
        budget: 400,
        color: "green",
        icon: "Utensils"
    },
    {
        id: "travel",
        name: "Travel",
        budget: 200,
        color: "purple",
        icon: "Plane"
    },
    {
        id: "healthcare",
        name: "Healthcare",
        budget: 200,
        color: "red",
        icon: "Heart"
    },
    {
        id: "utilities",
        name: "Utilities",
        budget: 300,
        color: "orange",
        icon: "Smartphone"
    },
    {
        id: "entertainment",
        name: "Entertainment",
        budget: 200,
        color: "cyan",
        icon: "Coffee"
    }
];

export const icons = {
    ShoppingBagIcon,
    HomeIcon,
    CarIcon,
    UtensilsIcon,
    PlaneIcon,
    HeartIcon,
    SmartphoneIcon,
    CoffeeIcon
};