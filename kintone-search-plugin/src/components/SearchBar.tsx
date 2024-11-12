import React from 'react';

interface SearchBarProps {
  onSearch: (keyword: string) => void;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  isLoading,
}) => {
  const [keyword, setKeyword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>
        Search
      </button>
    </form>
  );
};
