import { Card } from "@/components/ui/card";

const MonthlyTasksSummary = ({ completedTasks, totalTasks }) => {
  const message = `${completedTasks} out of ${totalTasks} required transfers completed.`;
  const backgroundColor = completedTasks === totalTasks ? "bg-green-500" : "bg-yellow-500";

  return (
    <Card className={`p-6 ${backgroundColor}`}>
      <h3 className="text-lg font-semibold">Monthly Tasks Summary</h3>
      <p>{message}</p>
    </Card>
  );
};

export default MonthlyTasksSummary; 