"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Upload,
  ShoppingCart,
  Car,
  Film,
  Zap,
  MoreHorizontal,
} from "lucide-react";

export function SmartReceiptScanningForm() {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Smart Receipt Scanning</h2>
        <form className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="receiptImage"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-white/80 hover:bg-white/90"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-2 text-gray-500" />
                <p className="text-sm text-gray-500">
                  Click to upload or drag and drop
                </p>
              </div>
              <Input
                id="receiptImage"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="merchantName">Merchant</Label>
              <Input id="merchantName" placeholder="Enter merchant name" />
            </div>
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                placeholder="Enter amount"
                type="number"
                step="0.01"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">
                  <div className="flex items-center">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Food & Dining
                  </div>
                </SelectItem>
                <SelectItem value="transportation">
                  <div className="flex items-center">
                    <Car className="w-4 h-4 mr-2" />
                    Transportation
                  </div>
                </SelectItem>
                <SelectItem value="entertainment">
                  <div className="flex items-center">
                    <Film className="w-4 h-4 mr-2" />
                    Entertainment
                  </div>
                </SelectItem>
                <SelectItem value="utilities">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Utilities
                  </div>
                </SelectItem>
                <SelectItem value="other">
                  <div className="flex items-center">
                    <MoreHorizontal className="w-4 h-4 mr-2" />
                    Other
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Scan and Process Receipt
          </Button>
        </form>
      </div>
    </div>
  );
}
