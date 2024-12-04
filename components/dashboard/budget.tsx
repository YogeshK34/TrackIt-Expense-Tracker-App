"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import { useExpense } from "@/context/ExpenseContext";
import { icons } from "@/config/categories";
import { Category } from "@/types";

export function Budget() {
  const { categories, updateCategory } = useExpense();
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryBudget, setNewCategoryBudget] = useState("");
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [newBudget, setNewBudget] = useState("");

  const handleUpdateBudget = () => {
    if (editingCategory && newBudget) {
      const category = categories.find((cat) => cat.id === editingCategory);
      if (category) {
        updateCategory({ ...category, budget: parseFloat(newBudget) });
      }
      setEditingCategory(null);
      setNewBudget("");
    }
  };

  const handleAddCategory = () => {
    if (newCategoryName && newCategoryBudget) {
      const newCategory: Category = {
        id: Date.now().toString(),
        name: newCategoryName,
        budget: parseFloat(newCategoryBudget),
        color: `bg-${
          ["red", "blue", "green", "yellow", "purple", "pink"][
            Math.floor(Math.random() * 6)
          ]
        }-500`,
        icon: "ShoppingBag", // Default icon
      };
      updateCategory(newCategory);
      setIsAddingCategory(false);
      setNewCategoryName("");
      setNewCategoryBudget("");
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Budget</h2>
        <Button onClick={() => setIsAddingCategory(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = icons[category.icon as keyof typeof icons];
          const spent = 0; // You need to calculate this based on transactions
          const progress = (spent / category.budget) * 100;

          return (
            <Card key={category.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-2 rounded-full bg-${category.color}-500 bg-opacity-10`}
                  >
                    <Icon className={`h-5 w-5 text-${category.color}-500`} />
                  </div>
                  <div>
                    <p className="font-medium">{category.name}</p>
                    <p className="text-sm text-muted-foreground">
                      ${spent.toFixed(2)} of ${category.budget.toFixed(2)}
                    </p>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditingCategory(category.id)}
                    >
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Budget</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Input
                          type="number"
                          placeholder="Enter new budget"
                          value={newBudget}
                          onChange={(e) => setNewBudget(e.target.value)}
                        />
                      </div>
                      <Button onClick={handleUpdateBudget}>Save</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <Progress
                value={progress}
                className={`h-2 ${progress > 100 ? "bg-red-500" : ""}`}
              />
            </Card>
          );
        })}
      </div>

      <Dialog open={isAddingCategory} onOpenChange={setIsAddingCategory}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Category</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Input
                placeholder="Category Name"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Budget"
                value={newCategoryBudget}
                onChange={(e) => setNewCategoryBudget(e.target.value)}
              />
            </div>
            <Button onClick={handleAddCategory}>Add Category</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
