
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

interface VariableExpense {
  house_id: string;
  description: string;
  category_id: string;
  amount: number;
  date: string;
}

const VariableExpenses = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState<number | null>(null);

  const mutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.from("variable_expenses").insert({
        house_id: "your_house_id", // Replace with actual house ID
        description,
        category_id: category,
        amount,
        date: new Date().toISOString(),
      } as VariableExpense);
      if (error) throw error;
      return data;
    }
  });

  const handleAdd = () => {
    mutation.mutate();
    setDescription("");
    setCategory("");
    setAmount(null);
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">Variable Expenses</h3>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border rounded p-2"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="border rounded p-2 ml-2"
      />
      <input
        type="number"
        value={amount || ""}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Amount"
        className="border rounded p-2 ml-2"
      />
      <button onClick={handleAdd} className="mt-4 bg-blue-500 text-white p-2 rounded">
        Add Expense
      </button>
    </Card>
  );
};

export default VariableExpenses;
