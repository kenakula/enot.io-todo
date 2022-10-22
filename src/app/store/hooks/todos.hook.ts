import { getAllTodos, updateTodo } from 'app/api';
import { TodoType } from 'app/types';
import { AxiosResponse } from 'axios';
import {
  useQuery,
  UseQueryResult,
  useMutation,
  UseMutationResult,
} from 'react-query';

export const getTodos = async (): Promise<TodoType[]> => {
  return getAllTodos().then(res => {
    return res.data;
  });
};

export const useTodos = (): UseQueryResult<TodoType[], unknown> =>
  useQuery(['todos'], getTodos, { refetchOnWindowFocus: false });

export const useUpdateTodo = (): UseMutationResult<
  AxiosResponse<TodoType, any>,
  unknown,
  TodoType,
  unknown
> => useMutation((todo: TodoType) => updateTodo(todo));
