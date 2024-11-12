// src/components/App.tsx
import React from 'react';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { useSearchStore } from '../store/searchStore';

export const App: React.FC = () => {
  const { results, isLoading, error, search } = useSearchStore();

  const handleSearch = (keyword: string) => {
    search(keyword);
  };

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      <SearchResults results={results} isLoading={isLoading} error={error} />
    </div>
  );
};
