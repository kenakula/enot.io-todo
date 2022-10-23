import React from 'react';
import Stack from '@mui/material/Stack';
import { TodoType } from 'app/types';
import { TodayListElement } from './components';
import { Todo } from '../todo/todo';

interface Props {
  list: TodoType[];
}

export const TodayList = ({ list }: Props): JSX.Element => {
  return (
    <TodayListElement>
      <Stack spacing={2}>
        {list.map(item => (
          <Todo todo={item} key={item.id} />
        ))}
      </Stack>
    </TodayListElement>
  );
};
