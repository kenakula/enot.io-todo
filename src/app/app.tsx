import React from 'react';
import { RouterComponent } from './router';
import { ThemeStoreProvider } from './store/theme-store-provider';

export const App = (): JSX.Element => {
  return (
    <ThemeStoreProvider>
      <RouterComponent />
    </ThemeStoreProvider>
  );
};
