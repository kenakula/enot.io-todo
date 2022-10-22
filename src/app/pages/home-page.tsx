import React, { useEffect, useState } from 'react';
import {
  CheckboxComponent,
  ContainerComponent,
  Loader,
  TechnicalIssues,
  TodayList,
  TodoAccordion,
} from 'app/components';
import Box from '@mui/material/Box';
import { useTodos } from 'app/store/hooks';
import { useTodosStoreContext } from 'app/store/todos-store-provider';
import Stack from '@mui/material/Stack';

const HomePage = (): JSX.Element => {
  const [showTodayTodos, setShowTodayTodos] = useState(true);
  const { todosMap, writeTodos } = useTodosStoreContext();

  const { data, isError, isLoading } = useTodos();

  const handleCheckBoxChange = (): void => {
    setShowTodayTodos(prev => !prev);
  };

  useEffect(() => {
    if (!data) {
      return;
    }

    writeTodos(data);
  }, [data, writeTodos]);

  const renderDates = (): JSX.Element => {
    console.log(todosMap);
    return (
      <Stack spacing={4}>
        {todosMap.datesRecords.map(({ date, list }) => (
          <TodoAccordion key={date.toLocaleString()} date={date} todos={list} />
        ))}
      </Stack>
    );
  };

  const renderContent = (): JSX.Element => {
    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <TechnicalIssues />;
    }

    return (
      <Box>
        <Box sx={{ padding: '0 21px', marginBottom: '15px' }}>
          <CheckboxComponent
            label="Today Tasks:"
            handler={handleCheckBoxChange}
            isChecked={showTodayTodos}
          />
        </Box>
        {showTodayTodos && <TodayList list={todosMap.today} />}
        <TodoAccordion todos={todosMap.tomorrow} />
        {renderDates()}
      </Box>
    );
  };

  return (
    <main style={{ display: 'flex' }}>
      <ContainerComponent
        sx={{
          backgroundColor: '#222222',
          borderBottomLeftRadius: '40px',
          borderBottomRightRadius: '40px',
        }}
      >
        {renderContent()}
      </ContainerComponent>
    </main>
  );
};

export default HomePage;
