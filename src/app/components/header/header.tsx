import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { ContainerComponent } from '../container-component/container-component';
import { SettingsIcon } from './components';

export const Header = (): JSX.Element => {
  return (
    <Box
      component="header"
      sx={{
        zIndex: 10,
        position: 'sticky',
        top: 0,
        left: 0,
      }}
    >
      <ContainerComponent
        sx={{
          backgroundColor: '#222222',
          padding: '13px 37px',
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h1">To Do</Typography>
          <IconButton color="inherit" sx={{ mr: -1 }}>
            <SettingsIcon />
          </IconButton>
        </Box>
      </ContainerComponent>
    </Box>
  );
};
