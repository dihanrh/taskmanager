import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="p-6 flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search tasks"
        className="p-2 border rounded w-1/3"
      />
      <button className="p-2 border bg-gray-200 rounded">Filter</button>
    </div>
  );
};

export default Hero;
