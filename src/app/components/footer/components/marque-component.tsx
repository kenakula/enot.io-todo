import React from 'react';
import { NewsType } from 'app/types';
import Box from '@mui/system/Box';
import Marquee from 'react-fast-marquee';
import { styled, Typography } from '@mui/material';

interface Props {
  list: NewsType[] | undefined;
}

const NewsContainer = styled(Typography)(({ theme }) => ({
  marginRight: '20px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    right: '-12px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 5,
    height: 5,
    borderRadius: '50%',
    background: theme.palette.text.primary,
  },
}));

export const MarqueeComponent = ({ list }: Props): JSX.Element => {
  return (
    <Box sx={{ overflowX: 'hidden', marginRight: '-32px' }}>
      <Marquee gradient={false} loop={0} speed={40}>
        {list &&
          list.map(item => (
            <NewsContainer key={item.url} variant="body1">
              {item.title}
            </NewsContainer>
          ))}
      </Marquee>
    </Box>
  );
};
