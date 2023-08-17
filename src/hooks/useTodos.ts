import { useQuery } from '@tanstack/react-query';
import todoService from '../services/todo.service';

export const useTodos = () => {
  return useQuery(['todos'], () => todoService.getAll(), {
    select: ({ data }) => data,
    //   ! что если успешный запрос
    // onSuccess(data) {
    //   alert(data[0].title);
    // },
    //   ! что если Не успешный запрос
    // onError(err) {
    //   alert(err);
    // },
    // ! закрывает запрос
    // ? На этом месте модет быть любое выражение которое возвращает true/false
    // enabled: false,
    enabled: true, // по умолчанию
  });

  //  ! -- пример
  //   const todoId = 1;
  //   return useQuery(['todos', todoId], () => todoService.getById(todoId.toString()), {
  //     select: ({ data }) => data,
  //     // ! закрывает запрос - если false
  //     // ? На этом месте модет быть любое выражение которое возвращает true/false
  //     // enabled: false,
  //     //   ! !! todoId - возвращет true елси он есть и false если его нету.
  //     enabled: !!todoId, // по умолчанию
  //   });
};
