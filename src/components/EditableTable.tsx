import React, { useState } from 'react';

const EditableTable = ({ data, columns }) => {
  const [editingId, setEditingId] = useState(null);
  
  const handleEdit = (id) => {
    setEditingId(id);
  };

  return (
    <table className="w-full">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="text-left p-2 border-b">{col.title}</th>
          ))}
          <th className="p-2 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50">
            {columns.map((col) => (
              <td key={col.key} className="p-2 border-b">
                {editingId === item.id ? (
                  <input
                    value={item[col.key]}
                    className="border rounded p-1"
                    onChange={(e) => /* Update logic */}
                  />
                ) : (
                  item[col.key]
                )}
              </td>
            ))}
            <td className="p-2 border-b">
              <button 
                onClick={() => handleEdit(item.id)}
                className="text-blue-500 hover:text-blue-700"
              >
                ✏️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditableTable; 