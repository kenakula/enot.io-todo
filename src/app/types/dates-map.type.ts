import { TodoType } from './todo.type';

export interface DatesRecord {
  date: Date;
  list: TodoType[];
}

export interface DatesMapType {
  today: TodoType[];
  tomorrow: TodoType[];
  datesRecords: DatesRecord[];
}
