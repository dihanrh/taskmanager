import React from "react";
import { useSearch } from "../../hooks/useSearch";

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
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="p-2 border rounded w-full"
      />
    </div>
  );
};

export default SearchComponent;
