import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ErrorIcon, PaperElement } from './components';

interface Props {
  code?: string;
  header?: string;
  message?: string;
}

export const TechnicalIssues = ({
  code = '',
  header = 'Произошла ошибка',
  message = 'Попробуйте позже',
}: Props): JSX.Element => {
  return (
    <PaperElement elevation={3}>
      <ErrorIcon />
      <Stack spacing={1} alignItems="center" sx={{ position: 'relative' }}>
        {code && code.length ? (
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            {code}
          </Typography>
        ) : null}
        <Typography variant="h5" component="p" textAlign="center">
          {header}
        </Typography>
        {message ? (
          <Typography variant="body1" textAlign="center">
            {message}
          </Typography>
        ) : null}
      </Stack>
    </PaperElement>
  );
};
