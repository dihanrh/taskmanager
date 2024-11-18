import React from "react";
import { useSearch } from "../../hooks/useSearch";
import { FiSearch } from "react-icons/fi";

interface SearchComponentProps {
  onSearch: (value: string) => void;
  placeholder?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  onSearch,
  placeholder = "Search...",
}) => {
  const { query, handleSearch } = useSearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="relative flex items-center space-x-2 ">
      <FiSearch className="absolute left-3 text-gray-500" />
      
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="pl-10 p-2 border rounded dark:bg-gray-500" 
      />
    </div>
  );
};

export default SearchComponent;
