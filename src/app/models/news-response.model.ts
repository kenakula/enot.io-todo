import { NewsType } from 'app/types';

export interface NewsResponseModel {
  status: string;
  copyright: string;
  section: string;
  last_updated: Date;
  num_results: number;
  results: NewsType[];
}
