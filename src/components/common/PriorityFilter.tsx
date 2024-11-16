import React from "react";
import { FiFilter } from "react-icons/fi"; // Import the filter icon

interface PriorityFilterProps {
  selectedPriority: string;
  onPriorityChange: (priority: string) => void;
}

const PriorityFilter: React.FC<PriorityFilterProps> = ({ selectedPriority, onPriorityChange }) => {
  return (
    <div className="relative flex items-center space-x-2">
       <FiFilter className="text-gray-500 dark:text-white" />
      <select
        value={selectedPriority}
        onChange={(e) => onPriorityChange(e.target.value)}
        className="border rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
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
