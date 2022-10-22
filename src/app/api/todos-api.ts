import { TodoType } from 'app/types';
import { AxiosResponse } from 'axios';
import apiClient from './axios';

export interface ITodosResponse {
  status: string;
  data: {
    todos: TodoType[];
  };
}

export const getAllTodos = async (): Promise<
  AxiosResponse<TodoType[], any>
> => {
  const response = await apiClient.get<TodoType[]>('todos');

  return response;
};

export const updateTodo = async (
  data: TodoType,
): Promise<AxiosResponse<TodoType>> => {
  return apiClient.put(`todos/${data.id}`, data);
};
