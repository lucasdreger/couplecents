import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

const CategoryManager = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryType, setCategoryType] = useState("Expense");

  const { data: categories } = useQuery("categories", async () => {
    const { data } = await supabase.from("categories").select("*");
    return data;
  });

  const mutation = useMutation(async () => {
    await supabase.from("categories").insert({
      name: categoryName,
      type: categoryType,
    });
  });

  const handleAddCategory = () => {
    mutation.mutate();
    setCategoryName("");
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">Categories</h3>
      <div className="mt-4">
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Category Name"
          className="border rounded p-2"
        />
        <select
          value={categoryType}
          onChange={(e) => setCategoryType(e.target.value)}
          className="border rounded p-2 ml-2"
        >
          <option value="Expense">Expense</option>
          <option value="Investment">Investment</option>
          <option value="Reserve">Reserve</option>
        </select>
        <button onClick={handleAddCategory} className="ml-2 bg-blue-500 text-white p-2 rounded">
          Add Category
        </button>
      </div>
      <ul className="mt-4">
        {categories?.map((category) => (
          <li key={category.id} className="border-b py-2">
            {category.name} ({category.type})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default CategoryManager; 