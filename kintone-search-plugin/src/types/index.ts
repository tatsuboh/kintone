// src/types/index.ts
export interface SearchResult {
  $id: { value: string };
  title: { value: string };
  content: { value: string };
  created_at: { value: string };
}

export interface SearchResponse {
  records: SearchResult[];
  totalCount: number;
}

export interface SearchState {
  results: SearchResult[];
  isLoading: boolean;
  error?: string;
}
