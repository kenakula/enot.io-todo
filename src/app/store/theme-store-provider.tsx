import React, { useContext, useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { Theme } from '@mui/system';

type ContextProps = {
  theme: Theme;
};

interface Props {
  children: JSX.Element;
}

export const ThemeStoreContext = React.createContext<Partial<ContextProps>>({});

export function useThemeStore(): Partial<ContextProps> {
  return useContext(ThemeStoreContext);
}

export const ThemeStoreProvider = ({ children }: Props): JSX.Element => {
  const theme = createTheme({
    typography: {
      fontFamily: '"AbhayaLibreSemiBold", "Roboto", sans-serif',
      h1: {
        fontFamily: '"ActorRegular", "Arial", sans-serif',
        fontSize: 50,
      },
    },
  });

  const value = useMemo(
    () => ({
      theme,
    }),
    [theme],
  );

  return (
    <ThemeStoreContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeStoreContext.Provider>
  );
};
