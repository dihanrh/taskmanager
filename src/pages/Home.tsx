import React, { useState } from "react";
import TaskList from "../components/task/TaskList";
import SearchComponent from "../components/common/SearchComponent";
import PriorityFilter from "../components/common/PriorityFilter";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPriority, setSelectedPriority] = useState<string>("");

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <SearchComponent onSearch={setSearchQuery} placeholder="Search tasks..." />
        <PriorityFilter
          selectedPriority={selectedPriority}
          onPriorityChange={setSelectedPriority}
        />
      </div>
      <TaskList searchQuery={searchQuery} priority={selectedPriority} />
    </div>
  );
};

export default Home;
