import { getLimitedTodos, updateTodo } from 'app/api';
import { TodoType } from 'app/types';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationResult } from 'react-query';

export const getPaginatedTodos = async (
  page: number,
  limit: number = 20,
): Promise<TodoType[]> => {
  return getLimitedTodos(page, limit).then(res => res.data);
};

export const useUpdateTodo = (): UseMutationResult<
  AxiosResponse<TodoType, any>,
  unknown,
  TodoType,
  unknown
> => useMutation((todo: TodoType) => updateTodo(todo));
