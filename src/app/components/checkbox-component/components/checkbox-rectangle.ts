import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const CustomCheckboxRectangle = styled(Box)(({ theme }) => ({
  width: '23px',
  height: '23px',
  backgroundColor: theme.palette.text.primary,
  borderRadius: '6px',
}));
