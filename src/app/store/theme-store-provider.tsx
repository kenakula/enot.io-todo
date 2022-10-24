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
      fontFamily: '"AbhayaLibreSemiBold", "Roboto", serif',
      fontSize: 16,
      h1: {
        fontFamily: '"ActorRegular", "Arial", sans-serif',
        fontSize: '2.25rem',
        fontWeight: 700,
      },
    },
    palette: {
      background: {
        default: '#121212',
        paper: '#282828',
      },
      common: {
        black: '#222222',
      },
      primary: {
        main: '#366EFF',
      },
      error: {
        main: '#FF0000',
      },
      warning: {
        main: '#FFEB33',
      },
      success: {
        main: '#10C200',
      },
      text: {
        primary: '#F4F4F4',
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
