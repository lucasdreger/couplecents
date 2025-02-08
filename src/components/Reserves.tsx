import { Card } from "@/components/ui/card";

const Reserves = () => {
  // Logic to fetch and display reserves
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">Reserves</h3>
      <p>Emergency: $0.00</p>
      <p>Travel: $0.00</p>
    </Card>
  );
};

export default Reserves; 