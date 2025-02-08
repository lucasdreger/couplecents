import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

const CreditCardBill = () => {
  const [amount, setAmount] = useState<number | null>(null);

  const mutation = useMutation(async () => {
    await supabase.from("credit_card_bills").insert({
      house_id: "your_house_id", // Replace with actual house ID
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      amount,
    });
  });

  const handleSave = () => {
    mutation.mutate();
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">Credit Card Bill</h3>
      <input
        type="number"
        value={amount || ""}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Credit Card Bill"
        className="border rounded p-2"
      />
      <button onClick={handleSave} className="mt-4 bg-blue-500 text-white p-2 rounded">
        Save Credit Card Bill
      </button>
    </Card>
  );
};

export default CreditCardBill; 