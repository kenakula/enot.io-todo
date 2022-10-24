import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useThemeStore } from 'app/store';
import { TodoType } from 'app/types';
import { MapTodoSeveretyToColor } from 'app/utils';
import { TodoSwitch } from './components';
import { grey } from '@mui/material/colors';
import { useUpdateTodo } from 'app/store/queries';

interface Props {
  todo: TodoType;
}

export const Todo = ({ todo }: Props): JSX.Element => {
  const [todoChecked, setTodoChecked] = useState(todo.isDone);
  const { theme } = useThemeStore();
  const { mutate, isLoading } = useUpdateTodo();
  const severetyColor = MapTodoSeveretyToColor[todo.severety];

  const onSwitchChange = (): void => {
    setTodoChecked(prev => {
      mutate({ ...todo, isDone: !prev });
      return !prev;
    });
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          position: 'relative',
          paddingLeft: '20px',
          maxWidth: '80%',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            display: 'block',
            width: '5px',
            height: '100%',
            borderRadius: '3px',
            backgroundColor: theme?.palette[severetyColor].main,
          },
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          fontSize={26}
          lineHeight="28px"
          fontWeight={600}
          noWrap
          sx={{
            textDecoration: todoChecked ? 'line-through;' : 'none',
          }}
        >
          {todo.title}
        </Typography>
        <Typography
          sx={{ maxWidth: '65%' }}
          fontSize={14}
          lineHeight="16px"
          variant="body1"
          noWrap
          color={grey[400]}
        >
          {todo.description}
        </Typography>
      </Box>
      <TodoSwitch
        sx={{ marginLeft: 'auto' }}
        checked={todoChecked}
        onChange={onSwitchChange}
        disabled={isLoading}
      />
    </Box>
  );
};
