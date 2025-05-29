export * from './movies.type.ts'
export interface ITMDBApiResponse<T = any> {
  page?: number;
  total_pages?: number;
  total_results?: number;
  results: T[];
}
