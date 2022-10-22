import React, { useState } from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import moment from 'moment';
import { CustomAccordion, ExpandMoreIcon } from './components';
import { TodoType } from 'app/types';
import { Todo } from '../todo/todo';

interface Props {
  todos: TodoType[];
  date?: Date;
}

export const TodoAccordion = ({ todos, date }: Props): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  let accordionTitle = '';

  if (date) {
    accordionTitle = `${moment(date).format('DD/MM')} Tasks`;
  } else {
    accordionTitle = 'Tomorrow Tasks';
  }

  const handleChange = (): void => {
    setExpanded(prev => !prev);
  };

  return (
    <CustomAccordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" component="h3">
          {accordionTitle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </Stack>
      </AccordionDetails>
    </CustomAccordion>
  );
};
