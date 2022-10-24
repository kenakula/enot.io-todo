import { TodoType } from 'app/types';
import axios, { AxiosResponse } from 'axios';
import { useMutation, UseMutationResult } from 'react-query';

export const getPaginatedTodos = async (
  page: number,
  limit: number = 20,
): Promise<TodoType[]> => {
  return axios
    .get<TodoType[]>(
      `http://localhost:4000/todos?_page=${page}&_limit=${limit}&_sort=date&_order_asc`,
    )
    .then(res => res.data);
};

export const useUpdateTodo = (): UseMutationResult<
  AxiosResponse<TodoType, any>,
  unknown,
  TodoType,
  unknown
> =>
  useMutation((todo: TodoType) =>
    axios.put(`http://localhost:4000/todos/${todo.id}`, todo),
  );
