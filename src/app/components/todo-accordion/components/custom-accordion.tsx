import Accordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';

export const CustomAccordion = styled(Accordion)(({ theme }) => ({
  ...theme.typography.body1,
  marginTop: 32,
  '&.MuiPaper-root': {
    padding: '16px 25px 16px 17px',
    borderRadius: '40px',
    boxShadow:
      '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
    transition: theme.transitions.create('box-shadow', { duration: 200 }),
    '&.Mui-expanded': {
      margin: '32px 0',
    },
  },
  '& > .MuiButtonBase-root': {
    paddingLeft: 18,
    minHeight: 51,
    '&.Mui-expanded': {
      minHeight: 51,
    },
  },
  '& .MuiAccordionSummary-content': {
    position: 'relative',
    minHeight: 40,
    margin: 0,
    '&::before': {
      content: '""',
      position: 'absolute',
      left: -18,
      top: 0,
      width: 5,
      height: '100%',
      backgroundColor: '#A9A9A9',
      borderRadius: 3,
    },
    '&.Mui-expanded': {
      margin: 0,
    },
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: theme.palette.text.primary,
    '& svg': {
      width: 21,
      heigth: 21,
    },
  },
  '& .MuiTypography-h6': {
    fontSize: 26,
  },
  '& .MuiAccordionDetails-root': {
    padding: '20px 0',
  },
}));
