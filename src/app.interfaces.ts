export interface ITodo {
  id: number;
  userId: number;
  completed: boolean;
  title: string;
}

export interface ICreateTodo extends Omit<ITodo, 'id'> {}
