import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNewsStoreContext } from 'app/store';
import { getTrendingNews } from 'app/store/queries';
import { useQuery } from 'react-query';
import { ContainerComponent } from '../container-component/container-component';
import { MarqueeComponent } from './components/marque-component';

export const Footer = (): JSX.Element => {
  const { data, isLoading, isError } = useQuery(
    ['news'],
    () => getTrendingNews(),
    { refetchOnWindowFocus: false },
  );
  const { showNews } = useNewsStoreContext();

  const renderNews = (): JSX.Element | null => {
    if (isLoading) {
      return (
        <Typography variant="body1" color="primary">
          loading ...
        </Typography>
      );
    }

    if (isError) {
      return (
        <Typography variant="body1" color="error">
          some error occured, try later
        </Typography>
      );
    }

    return <MarqueeComponent list={data?.results} />;
  };

  return (
    <Box
      component="footer"
      sx={{
        zIndex: 10,
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
      }}
    >
      {showNews ? (
        <ContainerComponent
          sx={{
            backgroundColor: '#222222',
            padding: '13px 37px',
            boxShadow:
              '16px -16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ flexShrink: 0, mr: 2 }}>Top news:</Typography>
          {renderNews()}
        </ContainerComponent>
      ) : null}
    </Box>
  );
};
