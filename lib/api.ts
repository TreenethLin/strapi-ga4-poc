import axios from 'axios';
import { Article, ArticleResponse } from '@/types/article';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getArticles = async (): Promise<Article[]> => {
  const response = await api.get<ArticleResponse>('/articles?populate=*');
  return response.data.data;
};

export const getArticle = async (id: string): Promise<Article> => {
  const response = await api.get<{ data: Article }>(`/articles/${id}?populate=*`);
  return response.data.data;
};

export default api;