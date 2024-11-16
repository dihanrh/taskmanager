import React, { useState } from "react";
import TaskList from "../components/task/TaskList";
import SearchComponent from "../components/common/SearchComponent";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-6">
      {/* Search Bar */}
      <SearchComponent onSearch={setSearchQuery} placeholder="Search tasks..." />

      {/* Task List */}
      <TaskList searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
