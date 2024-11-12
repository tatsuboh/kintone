// src/store/searchStore.ts
import { create } from 'zustand';
import { SearchState, SearchResult } from '../types';
import { searchRecords } from '../utils/kintoneApi';

interface SearchStore extends SearchState {
  search: (keyword: string) => Promise<void>;
  clearResults: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  results: [],
  isLoading: false,
  error: undefined,

  search: async (keyword: string) => {
    set({ isLoading: true, error: undefined });
    try {
      const response = await searchRecords(keyword);
      set({ results: response.records, isLoading: false });
    } catch (error) {
      set({
        error:
          error instanceof Error
            ? error.message
            : '検索中にエラーが発生しました',
        isLoading: false,
      });
    }
  },

  clearResults: () => {
    set({ results: [], error: undefined });
  },
}));
