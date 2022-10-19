import React from 'react';
import { Typography } from '@mui/material';
import { ContainerComponent } from 'app/components';

const HomePage = (): JSX.Element => {
  return (
    <ContainerComponent>
      <span>HomePage</span>
      <Typography variant="h1">page title</Typography>
    </ContainerComponent>
  );
};

export default HomePage;
