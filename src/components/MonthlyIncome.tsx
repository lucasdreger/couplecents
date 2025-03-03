
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

interface MonthlyIncome {
  house_id: string;
  year: number;
  month: number;
  income_amount: number | null;
  other_income: number | null;
}

const DEFAULT_HOUSE_ID = "d37ab557-e957-4357-a360-cf1677c2dd5f";

const MonthlyIncome = () => {
  const [income, setIncome] = useState<number | null>(null);
  const [otherIncome, setOtherIncome] = useState<number | null>(null);

  const mutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.from("monthly_incomes").upsert({
        house_id: DEFAULT_HOUSE_ID,
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        income_amount: income,
        other_income: otherIncome,
      } as MonthlyIncome);
      if (error) throw error;
      return data;
    }
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
