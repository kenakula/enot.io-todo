import { TodoType } from 'app/types';
import { AxiosResponse } from 'axios';
import apiClient from './axios';

export interface ITodosResponse {
  status: string;
  data: {
    todos: TodoType[];
  };
}

export const getLimitedTodos = async (
  page: number,
  limit: number,
): Promise<AxiosResponse<TodoType[], any>> => {
  const response = await apiClient.get<TodoType[]>(
    `http://localhost:4000/todos?_page=${page}&_limit=${limit}&_sort=date&_order_asc`,
  );

  return response;
};

export const updateTodo = async (
  data: TodoType,
): Promise<AxiosResponse<TodoType>> => {
  return apiClient.put(`http://localhost:4000/todos/${data.id}`, data);
};
