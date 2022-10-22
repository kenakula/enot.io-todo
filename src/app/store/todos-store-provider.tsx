import React, { createContext, useState, useMemo, useEffect } from 'react';
import { DatesMapType, TodoType } from 'app/types';
import { getTodosMap } from 'app/utils';
import { DEFAULT_DATES_MAP } from 'app/shared';

export type TodoContextType = {
  todosMap: DatesMapType;
  writeTodos: (list: TodoType[]) => void;
};

export const TodosContext = createContext<TodoContextType | null>(null);

interface ProviderProps {
  children: React.ReactNode;
}

export const TodosStoreProvider: React.FC<ProviderProps> = ({ children }) => {
  const [todosMap, setTodosMap] = useState<DatesMapType>(DEFAULT_DATES_MAP);
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    if (todos.length) {
      const map = getTodosMap(todos);
      setTodosMap(map);
    }
  }, [todos]);

  const value = useMemo(() => {
    const writeTodos = (list: TodoType[]): void => {
      setTodos(list);
    };

    return {
      todosMap,
      writeTodos,
    };
  }, [todosMap]);

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export const useTodosStoreContext = (): TodoContextType =>
  React.useContext(TodosContext)!;
