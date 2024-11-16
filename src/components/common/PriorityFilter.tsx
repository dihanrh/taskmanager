import React from "react";

interface PriorityFilterProps {
  selectedPriority: string;
  onPriorityChange: (priority: string) => void;
}

const PriorityFilter: React.FC<PriorityFilterProps> = ({ selectedPriority, onPriorityChange }) => {
  return (
    <div className="my-4">
      <label className="block text-sm dark:text-gray-300">Filter by Priority</label>
      <select
        value={selectedPriority}
        onChange={(e) => onPriorityChange(e.target.value)}
        className=" border rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
      >
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
};

export default PriorityFilter;
