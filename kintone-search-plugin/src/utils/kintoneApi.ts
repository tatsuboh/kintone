// src/utils/kintoneApi.ts
import { SearchResponse, SearchResult } from '../types';

export const searchRecords = async (
  keyword: string,
): Promise<SearchResponse> => {
  try {
    const response = await kintone.api(
      kintone.api.url('/k/v1/records', true),
      'GET',
      {
        app: kintone.app.getId(),
        query: `title like "${keyword}" or content like "${keyword}"`,
      },
    );

    return {
      records: response.records as SearchResult[],
      totalCount: response.totalRecords,
    };
  } catch (error) {
    console.error('Search error:', error);
    throw new Error('検索中にエラーが発生しました');
  }
};
