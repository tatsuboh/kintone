// src/components/App.tsx
import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';

interface SearchResult {
  $id: { value: string };
  title: { value: string };
  content: { value: string };
  created_at: { value: string };
}

export const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleSearch = async (keyword: string) => {
    setIsLoading(true);
    setError(undefined);

    try {
      // TODO: kintone APIを使用した検索処理を実装
      const response = await kintone.api(
        kintone.api.url('/k/v1/records', true),
        'GET',
        {
          app: kintone.app.getId(),
          query: `title like "${keyword}" or content like "${keyword}"`,
        },
      );

      setSearchResults(response.records);
    } catch (err) {
      setError('検索中にエラーが発生しました。');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      <SearchResults
        results={searchResults}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};
