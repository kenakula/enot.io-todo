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
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { getPaginatedTodos } from 'app/store/queries';
import { useTodosStoreContext } from 'app/store/todos-store-provider';
import { useQuery } from 'react-query';

const HomePage = (): JSX.Element => {
  const [showTodayTodos, setShowTodayTodos] = useState(true);
  const {
    todosMap: { today, tomorrow, datesRecords },
    saveTodos,
    mapBuild,
  } = useTodosStoreContext();
  const [cursor, setCursor] = useState(1);

  const { data, isError, isLoading, isFetching } = useQuery(
    ['todos', cursor],
    () => getPaginatedTodos(cursor),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  );

  const handleCheckBoxChange = (): void => {
    setShowTodayTodos(prev => !prev);
  };

  const handleShowMore = (): void => {
    setCursor(prev => prev + 1);
  };

  useEffect(() => {
    if (!data) {
      return;
    }

    saveTodos(data);
  }, [data, saveTodos]);

  const renderContent = (): JSX.Element => {
    if (isLoading || !mapBuild) {
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
        <TodayList list={today} />
        <TodoAccordion todos={tomorrow} />
        <Stack spacing={4}>
          {datesRecords.map(({ date, list }) => (
            <TodoAccordion
              key={date.toLocaleString()}
              date={date}
              todos={list}
            />
          ))}
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
          <Button
            onClick={handleShowMore}
            variant="outlined"
            color="inherit"
            disabled={isFetching}
          >
            {isFetching ? 'Loading...' : 'Show more'}
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <main style={{ display: 'flex' }}>
      <ContainerComponent
        sx={{
          backgroundColor: '#222222',
          paddingBottom: '70px',
        }}
      >
        {renderContent()}
      </ContainerComponent>
    </main>
  );
};

export default HomePage;
