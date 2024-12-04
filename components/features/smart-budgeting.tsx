"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  PieChart,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

export function SmartBudgeting() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    {
      name: "All",
      icon: <PieChart className="w-4 h-4" />,
      spent: 2030,
      budget: 2600,
    },
    {
      name: "Housing",
      icon: <DollarSign className="w-4 h-4" />,
      spent: 1200,
      budget: 1500,
    },
    {
      name: "Food",
      icon: <DollarSign className="w-4 h-4" />,
      spent: 450,
      budget: 600,
    },
    {
      name: "Transportation",
      icon: <DollarSign className="w-4 h-4" />,
      spent: 200,
      budget: 300,
    },
    {
      name: "Entertainment",
      icon: <DollarSign className="w-4 h-4" />,
      spent: 180,
      budget: 200,
    },
  ];

  const selectedCategoryData =
    categories.find((c) => c.name.toLowerCase() === selectedCategory) ||
    categories[0];

  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Smart Budget</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${selectedCategoryData.spent}
              </div>
              <div className="flex items-center text-sm text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +12% from last month
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Remaining Budget
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${selectedCategoryData.budget - selectedCategoryData.spent}
              </div>
              <div className="flex items-center text-sm text-red-500">
                <ArrowDownRight className="h-4 w-4 mr-1" />
                {Math.round(
                  ((selectedCategoryData.budget - selectedCategoryData.spent) /
                    selectedCategoryData.budget) *
                    100
                )}
                % remaining
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Spending Trend
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">On Track</div>
              <Progress value={75} className="mt-2" />
              <p className="text-sm text-muted-foreground mt-2">
                75% of month completed
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name.toLowerCase())}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedCategory === category.name.toLowerCase()
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center space-x-1">
                  {category.icon}
                  <span>{category.name}</span>
                </div>
              </button>
            ))}
          </div>
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {selectedCategoryData.name} Budget
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Spent: ${selectedCategoryData.spent}
                </span>
                <span className="text-sm text-muted-foreground">
                  Budget: ${selectedCategoryData.budget}
                </span>
              </div>
              <Progress
                value={Math.round(
                  (selectedCategoryData.spent / selectedCategoryData.budget) *
                    100
                )}
                className="h-2"
              />
              <p className="text-sm text-muted-foreground mt-2">
                {Math.round(
                  (selectedCategoryData.spent / selectedCategoryData.budget) *
                    100
                )}
                % of budget used
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
