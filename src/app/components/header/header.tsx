import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { ContainerComponent } from '../container-component/container-component';
import { MenuComponent, SettingsIcon } from './components';
import { useNewsStoreContext } from 'app/store';

export const Header = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { showNews, toggleNewsVisibility } = useNewsStoreContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleCheckboxChange = (): void => {
    toggleNewsVisibility();
    handleClose();
  };

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
          <IconButton onClick={handleClick} color="inherit" sx={{ mr: -1 }}>
            <SettingsIcon />
          </IconButton>
        </Box>
        <MenuComponent
          open={open}
          handleClose={handleClose}
          anchor={anchorEl}
          handleCheckbox={handleCheckboxChange}
          checkboxChecked={showNews}
        />
      </ContainerComponent>
    </Box>
  );
};
