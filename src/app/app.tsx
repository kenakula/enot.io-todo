import React from 'react';
import { RouterComponent } from './router';
import { NewsStoreProvider, ThemeStoreProvider } from './store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { TodosStoreProvider } from './store/todos-store-provider';

export const App = (): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <ThemeStoreProvider>
      <TodosStoreProvider>
        <NewsStoreProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <RouterComponent />
          </QueryClientProvider>
        </NewsStoreProvider>
      </TodosStoreProvider>
    </ThemeStoreProvider>
  );
};
