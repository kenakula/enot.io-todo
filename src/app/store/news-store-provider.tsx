/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useMemo } from 'react';

export type NewsContextType = {
  showNews: boolean;
  toggleNewsVisibility: () => void;
};

export const NewsContext = createContext<NewsContextType | null>(null);

interface ProviderProps {
  children: React.ReactNode;
}

export const NewsStoreProvider: React.FC<ProviderProps> = ({ children }) => {
  const [showNews, setShowNews] = useState(true);

  const toggleNewsVisibility = (): void => {
    setShowNews(!showNews);
  };

  const value = useMemo(() => {
    return {
      showNews,
      toggleNewsVisibility,
    };
  }, [showNews]);

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export const useNewsStoreContext = (): NewsContextType =>
  React.useContext(NewsContext)!;
