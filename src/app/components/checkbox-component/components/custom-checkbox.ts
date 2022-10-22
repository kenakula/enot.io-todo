import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  ...theme.typography.body1,
  '&.MuiCheckbox-root': {
    padding: 0,
    color: theme.palette.text.primary,
    marginRight: 10,
  },
  '& .MuiSvgIcon-root': {
    width: '23px',
    height: '23px',
  },
}));
