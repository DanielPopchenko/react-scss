import axios from 'axios';
import { ICreateTodo, ITodo } from '../app.interfaces';

class TodoService {
  // private variable in js
  //!   #URL = '';

  // ! using ts we can use private

  private URL = 'https://jsonplaceholder.typicode.com/todos';

  async getAll() {
    return await axios.get<ITodo[]>(`${this.URL}?_start=0&_limit=5`);
  }

  async getById(id: string) {
    return await axios.get<ITodo>(`${this.URL}/${id}`);
  }

  async create(title: string) {
    return await axios.post<any, any, ICreateTodo>(this.URL, {
      title,
      id: 1,
      completed: false,
    });
  }
}

export default new TodoService();
