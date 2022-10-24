import { getNews } from 'app/api';
import { NewsResponseModel } from 'app/models';

export const getTrendingNews = async (): Promise<NewsResponseModel> => {
  return getNews('home').then(res => res.data);
};
