import { Paper, styled } from '@mui/material';

export const TodayListElement = styled(Paper)(({ theme }) => ({
  padding: '16px 25px 16px 17px',
  borderRadius: '40px',
  boxShadow:
    '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
  transition: theme.transitions.create('box-shadow', { duration: 200 }),
}));
