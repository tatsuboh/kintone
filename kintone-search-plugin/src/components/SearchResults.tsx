import React from 'react';

interface SearchResultsProps {
  results: any[];
  isLoading: boolean;
  error: string | null;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  isLoading,
  error,
}) => {
  return (
    <div>
      {/* Basic implementation */}
      {error && <div>{error}</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {results.map((result, index) => (
            <div key={index}>{JSON.stringify(result)}</div>
          ))}
        </div>
      )}
    </div>
  );
};
