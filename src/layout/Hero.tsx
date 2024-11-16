import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="p-6 flex items-center justify-between flex-col md:flex-row space-y-4 md:space-y-0">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Task List</h1>
    </div>
  );
};

export default Hero;
