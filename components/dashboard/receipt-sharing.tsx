"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle, Receipt, Users } from "lucide-react";

interface Participant {
  name: string;
  amount: number;
}

interface ReceiptShare {
  id: string;
  title: string;
  total: number;
  date: string;
  image?: string;
  participants: Participant[];
}

export default function ReceiptSharingComponent(): JSX.Element {
  const [receipts, setReceipts] = useState<ReceiptShare[]>([
    {
      id: "default-1",
      title: "Team Lunch at Bistro",
      total: 156.75,
      date: new Date("2024-02-15").toISOString(),
      image:
        "https://img.freepik.com/free-photo/restaurant-bill-with-cash-credit-card_23-2147784473.jpg",
      participants: [
        { name: "Alice", amount: 52.25 },
        { name: "Bob", amount: 52.25 },
        { name: "Charlie", amount: 52.25 },
      ],
    },
  ]);
  const [newReceipt, setNewReceipt] = useState({
    title: "Shared Expense",
    total: "100",
    image: null as File | null,
    participants: [
      { name: "Participant 1", amount: 50 },
      { name: "Participant 2", amount: 50 },
    ],
  });
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleAddParticipant = () => {
    setNewReceipt({
      ...newReceipt,
      participants: [...newReceipt.participants, { name: "", amount: 0 }],
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setNewReceipt({
        ...newReceipt,
        image: event.target.files[0],
      });
    }
  };

  const handleSubmit = () => {
    if (newReceipt.title && newReceipt.total) {
      const receiptImageURL = newReceipt.image
        ? URL.createObjectURL(newReceipt.image)
        : undefined;

      setReceipts([
        ...receipts,
        {
          id: Date.now().toString(),
          title: newReceipt.title,
          total: parseFloat(newReceipt.total),
          date: new Date().toISOString(),
          image: receiptImageURL,
          participants: newReceipt.participants,
        },
      ]);

      // Reset to default values
      setNewReceipt({
        title: "Shared Expense",
        total: "100",
        image: null,
        participants: [
          { name: "Participant 1", amount: 50 },
          { name: "Participant 2", amount: 50 },
        ],
      });

      setDialogOpen(false); // Close the dialog
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setDialogOpen(true)}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Receipt
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Receipt</DialogTitle>
            </DialogHeader>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <input
                  type="text"
                  value={newReceipt.title}
                  onChange={(e) =>
                    setNewReceipt({ ...newReceipt, title: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Total Amount</label>
                <input
                  type="number"
                  value={newReceipt.total}
                  onChange={(e) =>
                    setNewReceipt({ ...newReceipt, total: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Participants</label>
                {newReceipt.participants.map((participant, index) => (
                  <div key={index} className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      placeholder="Name"
                      value={participant.name}
                      onChange={(e) => {
                        const participants = [...newReceipt.participants];
                        participants[index].name = e.target.value;
                        setNewReceipt({ ...newReceipt, participants });
                      }}
                      className="w-1/2 p-2 border rounded"
                    />
                    <input
                      type="number"
                      placeholder="Amount"
                      value={participant.amount}
                      onChange={(e) => {
                        const participants = [...newReceipt.participants];
                        participants[index].amount = parseFloat(e.target.value);
                        setNewReceipt({ ...newReceipt, participants });
                      }}
                      className="w-1/2 p-2 border rounded"
                    />
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAddParticipant}
                  className="w-full"
                >
                  Add Participant
                </Button>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="button" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Rest of the component remains the same */}
      {receipts.length === 0 ? (
        <Card className="p-6">
          <div className="text-center space-y-4">
            <Receipt className="mx-auto h-12 w-12 text-muted-foreground" />
            <div className="space-y-2">
              <h3 className="font-semibold">No receipts shared yet</h3>
              <p className="text-sm text-muted-foreground">
                Add your first receipt to start sharing expenses with others.
              </p>
            </div>
          </div>
        </Card>
      ) : (
        <div className="grid gap-4">
          {receipts.map((receipt) => (
            <Card key={receipt.id} className="p-6">
              {/* Receipt card content remains the same as in previous version */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{receipt.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(receipt.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${receipt.total.toFixed(2)}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-1 h-4 w-4" />
                    {receipt.participants.length} participants
                  </div>
                </div>
              </div>
              {receipt.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={receipt.image}
                  alt={`${receipt.title} receipt`}
                  className="mt-4 rounded shadow max-h-64 w-full object-cover"
                />
              )}
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Participants</h4>
                <div className="grid grid-cols-3 gap-2">
                  {receipt.participants.map((participant, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 p-2 rounded text-sm text-center"
                    >
                      <p className="font-semibold">{participant.name}</p>
                      <p className="text-muted-foreground">
                        ${participant.amount.toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
