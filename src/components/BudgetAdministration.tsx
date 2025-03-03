
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

interface Household {
  id: string;
  name: string;
  share_code: string;
}

const BudgetAdministration = () => {
  const [householdName, setHouseholdName] = useState("");
  const [householdCode, setHouseholdCode] = useState("");

  const { data: householdData } = useQuery<Household[]>({
    queryKey: ["households"],
    queryFn: async () => {
      const { data } = await supabase.from("households").select("*");
      return data as Household[];
    }
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.from("households").insert({
        name: householdName,
        share_code: householdCode,
      });
      if (error) throw error;
      return data;
    }
  });

  const handleAddHousehold = () => {
    mutation.mutate();
    setHouseholdName("");
    setHouseholdCode("");
  };

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(householdCode);
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">Budget Administration</h3>
      <input
        type="text"
        value={householdName}
        onChange={(e) => setHouseholdName(e.target.value)}
        placeholder="Household Name"
        className="border rounded p-2"
      />
      <div className="flex items-center">
        <input
          type="text"
          value={householdCode}
          onChange={(e) => setHouseholdCode(e.target.value)}
          placeholder="Household Code"
          className="border rounded p-2 ml-2"
        />
        <button 
          onClick={handleCopyCode}
          className="p-1 hover:bg-gray-100 rounded"
        >
          ⎘
        </button>
      </div>
      <button onClick={handleAddHousehold} className="mt-4 bg-blue-500 text-white p-2 rounded">
        Add Household
      </button>
      <ul className="mt-4">
        {householdData?.map((household) => (
          <li key={household.id} className="border-b py-2">
            {household.name} (Code: {household.share_code})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default BudgetAdministration;
