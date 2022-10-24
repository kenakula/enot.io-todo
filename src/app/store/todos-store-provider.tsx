/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useMemo, useCallback } from 'react';
import { DatesMapType, TodoType } from 'app/types';
import { getTodosMap } from 'app/utils';

const DEFAULT_DATES_MAP: DatesMapType = {
  today: [],
  tomorrow: [],
  datesRecords: [],
};

export type TodoContextType = {
  todosMap: DatesMapType;
  saveTodos: (list: TodoType[]) => void;
  mapBuild: boolean;
};

export const TodosContext = createContext<TodoContextType | null>(null);

interface ProviderProps {
  children: React.ReactNode;
}

export const TodosStoreProvider: React.FC<ProviderProps> = ({ children }) => {
  const [todosMap, setTodosMap] = useState<DatesMapType>(DEFAULT_DATES_MAP);
  const [mapBuild, setMapBuild] = useState(false);

  const saveTodos = useCallback((list: TodoType[]): void => {
    const newMap = { ...todosMap };
    const map = getTodosMap(list, newMap);
    setTodosMap(map);
    setMapBuild(true);
  }, []);

  const value = useMemo(() => {
    return {
      todosMap,
      saveTodos,
      mapBuild,
    };
  }, [todosMap]);

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export const useTodosStoreContext = (): TodoContextType =>
  React.useContext(TodosContext)!;
