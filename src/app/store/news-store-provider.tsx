/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useMemo, useCallback } from 'react';
import { NewsType } from 'app/types';

export type NewsContextType = {
  newsList: NewsType[];
  saveNews: (list: NewsType[]) => void;
  showNews: boolean;
  toggleNewsVisibility: () => void;
};

export const NewsContext = createContext<NewsContextType | null>(null);

interface ProviderProps {
  children: React.ReactNode;
}

export const NewsStoreProvider: React.FC<ProviderProps> = ({ children }) => {
  const [newsList, setNewsList] = useState<NewsType[]>([]);
  const [showNews, setShowNews] = useState(true);

  const toggleNewsVisibility = (): void => {
    setShowNews(!showNews);
  };

  const saveNews = useCallback((list: NewsType[]) => {
    setNewsList(list);
  }, []);

  const value = useMemo(() => {
    return {
      newsList,
      saveNews,
      showNews,
      toggleNewsVisibility,
    };
  }, [newsList, showNews]);

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export const useNewsStoreContext = (): NewsContextType =>
  React.useContext(NewsContext)!;
