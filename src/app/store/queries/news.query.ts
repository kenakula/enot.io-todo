import { NewsResponseModel } from 'app/models';
import axios from 'axios';

export const getTrendingNews = async (): Promise<NewsResponseModel> => {
  return axios
    .get(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NEWS_API}`,
    )
    .then(res => res.data);
};
