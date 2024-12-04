"use client";
import { Button } from "@/components/ui/button";
import {
  Wallet,
  PieChart,
  Banknote,
  PiggyBank,
  Building2,
  Receipt,
  LogOut,
  PieChartIcon,
  HomeIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/hero/Logo";
import { ThemeToggle } from "../theme-toggle";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: PieChart },
    { id: "budget", label: "Budget", icon: Wallet },
    { id: "savings", label: "Savings", icon: PiggyBank },
    { id: "bank-accounts", label: "Bank Accounts", icon: Building2 },
    { id: "receipt-sharing", label: "Receipt Sharing", icon: Receipt },
  ];

  const router = useRouter();

  return (
    <div className="flex h-full w-64 flex-col border-r bg-background">
      <div className="flex h-16 items-center border-b px-6">
        <div className="flex items-center space-x-2">
          <Logo />
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab(item.id)}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          );
        })}
      </div>
      <div className="border-t p-4">
        <div className="flex items-center justify-between">
          <ThemeToggle />
          <Button
            onClick={() => {
              router.push("/");
            }}
            variant="ghost"
            size="icon"
          >
            <HomeIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
