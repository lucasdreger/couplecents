import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

const MonthlyDetails = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [income, setIncome] = useState<number | null>(null);
  const [otherIncome, setOtherIncome] = useState<number | null>(null);

  const { data: monthlyIncomeData } = useQuery(["monthlyIncome", year, month], async () => {
    const { data } = await supabase
      .from("monthly_incomes")
      .select("*")
      .eq("house_id", "your_house_id") // Replace with actual house ID
      .eq("year", year)
      .eq("month", month);
    return data;
  });

  const mutation = useMutation(async () => {
    await supabase
      .from("monthly_incomes")
      .upsert({
        house_id: "your_house_id", // Replace with actual house ID
        year,
        month,
        income_amount: income,
        other_income: otherIncome,
      });
  });

  const handleSave = () => {
    mutation.mutate();
  };

  return (
    <motion.div
      className="p-6 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Monthly Details</h1>
        <p className="mt-2 text-gray-600">Manage your monthly income and expenses</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div>
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
        </motion.div>

        <motion.div>
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Credit Card Bill</h3>
            <input
              type="number"
              placeholder="Credit Card Bill"
              className="border rounded p-2"
            />
            <button className="mt-4 bg-blue-500 text-white p-2 rounded">
              Save Credit Card Bill
            </button>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MonthlyDetails;
