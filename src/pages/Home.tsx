import React, { useState } from "react";
import TaskList from "../components/task/TaskList";
import SearchComponent from "../components/common/SearchComponent";
import PriorityFilter from "../components/common/PriorityFilter";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPriority, setSelectedPriority] = useState<string>("");

  return (
    <div className="p-6">
      <SearchComponent onSearch={setSearchQuery} placeholder="Search tasks..." />
      <PriorityFilter
        selectedPriority={selectedPriority}
        onPriorityChange={setSelectedPriority}
      />
      <TaskList searchQuery={searchQuery} priority={selectedPriority} />
    </div>
  );
};

export default Home;
