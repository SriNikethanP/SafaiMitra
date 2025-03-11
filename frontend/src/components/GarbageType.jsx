import React, { useState } from "react";

const GarbageTypeSelect = ({ onSelectType }) => {
  const [selectedType, setSelectedType] = useState("");

  const handleChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    onSelectType(type); // Pass selected type to parent component
  };

  return (
    <div className="mb-4">
      <label className="block text-lg font-medium mb-2">Select Garbage Type:</label>
      <select
        value={selectedType}
        onChange={handleChange}
        className="p-2 border rounded w-full"
      >
        <option value="">Choose Type</option>
        <option value="Wet">Wet Waste</option>
        <option value="Dry">Dry Waste</option>
        <option value="Recycle">Recyclable Waste</option>
      </select>
    </div>
  );
};

export default GarbageTypeSelect;
