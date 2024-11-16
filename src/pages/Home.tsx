import React, { useState } from "react";
import TaskList from "../components/task/TaskList";
import SearchComponent from "../components/common/SearchComponent";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-6">
      <SearchComponent onSearch={setSearchQuery} placeholder="Search tasks..." />
      <TaskList searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
