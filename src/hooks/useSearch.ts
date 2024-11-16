import { useState } from "react";

export const useSearch = (initialQuery = "") => {
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  return { query, handleSearch };
};
