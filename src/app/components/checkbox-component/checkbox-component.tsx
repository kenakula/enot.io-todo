import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  CheckIcon,
  CustomCheckbox,
  CustomCheckboxRectangle,
} from './components';

interface Props {
  label?: string;
  handler: () => void;
  isChecked: boolean;
}

export const CheckboxComponent = ({
  label,
  handler,
  isChecked = false,
}: Props): JSX.Element => {
  return (
    <FormControlLabel
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: 0,
        '& .MuiFormControlLabel-label': {
          fontSize: 24,
        },
      }}
      color="inherit"
      control={
        <CustomCheckbox
          disableRipple
          checkedIcon={<CheckIcon />}
          icon={<CustomCheckboxRectangle />}
          onChange={handler}
          checked={isChecked}
        />
      }
      label={label}
    />
  );
};
