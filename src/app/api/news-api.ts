import apiClient from './axios';
import { AxiosResponse } from 'axios';
import { NewsResponseModel } from 'app/models';

const API_KEY = '8AM3uKN0CUNHlPsYnDFcp0cqBh42YS5Y';

export const getNews = async (
  section: string,
): Promise<AxiosResponse<NewsResponseModel, any>> => {
  const response = await apiClient.get(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`,
  );

  return response;
};
