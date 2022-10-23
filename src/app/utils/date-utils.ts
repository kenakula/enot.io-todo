import { DatesMapType, TodoType } from 'app/types';
import moment from 'moment';

export const sortTodosByDate = (todos: TodoType[]): TodoType[] => {
  const sorted = todos.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return sorted;
};

export const getTodosMap = (
  todos: TodoType[],
  map: DatesMapType,
): DatesMapType => {
  const datesMap = map;

  if (todos.length) {
    todos.forEach(todo => {
      const isToday = moment(todo.date).isSame(moment(), 'day');
      const isTomorrow = moment(todo.date).isSame(
        moment().add(1, 'day'),
        'day',
      );

      if (isToday) {
        datesMap.today.push(todo);
        return;
      }

      if (isTomorrow) {
        datesMap.tomorrow.push(todo);
        return;
      }

      const todoRecord = datesMap.datesRecords.find(item =>
        moment(item.date).isSame(todo.date, 'day'),
      );

      if (!todoRecord) {
        datesMap.datesRecords.push({
          date: todo.date,
          list: [todo],
        });
      } else {
        const list = todoRecord.list;
        list.push(todo);
        todoRecord.list = list;
      }
    });
  }

  return datesMap;
};
