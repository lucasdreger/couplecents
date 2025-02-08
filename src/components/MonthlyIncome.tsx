import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

const MonthlyIncome = () => {
  const [income, setIncome] = useState<number | null>(null);
  const [otherIncome, setOtherIncome] = useState<number | null>(null);

  const mutation = useMutation(async () => {
    await supabase.from("monthly_incomes").upsert({
      house_id: "your_house_id", // Replace with actual house ID
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      income_amount: income,
      other_income: otherIncome,
    });
  });

  const handleSave = () => {
    mutation.mutate();
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">Monthly Income</h3>
      <input
        type="number"
        value={income || ""}
        onChange={(e) => setIncome(Number(e.target.value))}
        placeholder="Income"
        className="border rounded p-2"
      />
      <input
        type="number"
        value={otherIncome || ""}
        onChange={(e) => setOtherIncome(Number(e.target.value))}
        placeholder="Other Income"
        className="border rounded p-2 ml-2"
      />
      <button onClick={handleSave} className="mt-4 bg-blue-500 text-white p-2 rounded">
        Save Monthly Income
      </button>
    </Card>
  );
};

export default MonthlyIncome; 