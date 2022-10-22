export type TodoSeveretyType = 'default' | 'significant' | 'urgent';

export interface TodoType {
  id: number;
  title: string;
  description: string;
  severety: TodoSeveretyType;
  isDone: boolean;
  date: Date;
}
