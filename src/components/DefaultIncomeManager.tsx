
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

interface DefaultIncome {
  income_amount: number;
  other_income: number;
}

const DefaultIncomeManager = () => {
  const [defaultIncome, setDefaultIncome] = useState<number | null>(null);
  const [otherIncome, setOtherIncome] = useState<number | null>(null);

  const { data: incomeData } = useQuery<DefaultIncome[]>({
    queryKey: ["defaultIncome"],
    queryFn: async () => {
      const { data } = await supabase
        .from("default_incomes")
        .select("*")
        .eq("house_id", "your_house_id");
      return data as DefaultIncome[];
    }
  });

  useEffect(() => {
    if (incomeData && incomeData.length > 0) {
      setDefaultIncome(incomeData[0].income_amount);
      setOtherIncome(incomeData[0].other_income);
    }
  }, [incomeData]);

  const mutation = useMutation({
    mutationFn: async () => {
      await supabase
        .from("default_incomes")
        .upsert({
          house_id: "your_house_id",
          income_amount: defaultIncome,
          other_income: otherIncome,
        });
    }
  });

  const handleSave = () => {
    mutation.mutate();
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">Default Income</h3>
      <div className="mt-4">
        <label>
          Income:
          <input
            type="number"
            value={defaultIncome || ""}
            onChange={(e) => setDefaultIncome(Number(e.target.value))}
            className="border rounded p-2"
          />
        </label>
        <label className="ml-4">
          Other Income:
          <input
            type="number"
            value={otherIncome || ""}
            onChange={(e) => setOtherIncome(Number(e.target.value))}
            className="border rounded p-2"
          />
        </label>
      </div>
      <button onClick={handleSave} className="mt-4 bg-blue-500 text-white p-2 rounded">
        Save Default Income
      </button>
    </Card>
  );
};

export default DefaultIncomeManager;
