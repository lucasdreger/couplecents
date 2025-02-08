
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

interface CreditCardBill {
  house_id: string;
  year: number;
  month: number;
  amount: number;
}

const DEFAULT_HOUSE_ID = "d37ab557-e957-4357-a360-cf1677c2dd5f";

const CreditCardBill = () => {
  const [amount, setAmount] = useState<number | null>(null);

  const mutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.from("credit_card_bills").insert({
        house_id: DEFAULT_HOUSE_ID,
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        amount,
      } as CreditCardBill);
      if (error) throw error;
      return data;
    }
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
