import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";
import { Card } from "@/components/ui/card";

const TotalBudget = () => {
  const { data: incomes } = useQuery("incomes", async () => {
    const { data } = await supabase.from("monthly_incomes").select("*");
    return data;
  });

  const { data: fixedExpenses } = useQuery("fixedExpenses", async () => {
    const { data } = await supabase.from("fixed_expenses").select("*");
    return data;
  });

  const { data: variableExpenses } = useQuery("variableExpenses", async () => {
    const { data } = await supabase.from("variable_expenses").select("*");
    return data;
  });

  const totalIncome = incomes?.reduce((acc, curr) => acc + curr.income_amount, 0) || 0;
  const totalFixedExpenses = fixedExpenses?.reduce((acc, curr) => acc + curr.amount, 0) || 0;
  const totalVariableExpenses = variableExpenses?.reduce((acc, curr) => acc + curr.amount, 0) || 0;

  const totalBudget = totalIncome - (totalFixedExpenses + totalVariableExpenses);

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">Total Budget</h3>
      <p className="text-2xl font-bold">${totalBudget.toFixed(2)}</p>
    </Card>
  );
};

export default TotalBudget; 