import React from 'react';
import Menu from '@mui/material/Menu';
import { CheckboxComponent } from 'app/components/checkbox-component/checkbox-component';

interface Props {
  anchor: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
  handleCheckbox: () => void;
  checkboxChecked: boolean;
}

export const MenuComponent = ({
  anchor,
  open,
  handleClose,
  handleCheckbox,
  checkboxChecked,
}: Props): JSX.Element => {
  return (
    <Menu
      PaperProps={{ sx: { width: '300px', padding: '10px 20px' } }}
      anchorEl={anchor}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <CheckboxComponent
        handler={handleCheckbox}
        isChecked={checkboxChecked}
        label="Показывать новости"
      />
    </Menu>
  );
};
