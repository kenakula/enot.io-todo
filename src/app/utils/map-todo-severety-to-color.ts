import { ColorType, TodoSeveretyType } from 'app/types';

export const MapTodoSeveretyToColor: Record<TodoSeveretyType, ColorType> = {
  default: 'primary',
  significant: 'warning',
  urgent: 'error',
};
