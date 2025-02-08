import { Card } from "@/components/ui/card";

const FixedExpensesStatus = () => {
  // Logic to fetch and display fixed expenses status
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">Fixed Expenses Status</h3>
      <p>0 out of 4 required transfers have been completed for this month.</p>
    </Card>
  );
};

export default FixedExpensesStatus; 