import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { useTodos } from './hooks/useTodos';
import { useState } from 'react';
import { SyntheticEvent } from 'react';
import todoService from './services/todo.service';

const App = () => {
  // ! refetch - позволяет без перезагрузки приложения отправить повторный запрос
  const { data, isLoading, refetch } = useTodos();
  // ! более удобный способ это использовать контекст нашего query client и достать оттуда метод invalidateQueries
  // ! invalidateQueries - принимает в себя ключ, который мы указывали в useQuery - ['todos']
  // const queryClient = useQueryClient();
  // queryClient.invalidateQueries(['todos']);

  const [title, setTitle] = useState('');

  const { mutate } = useMutation(['create todo'], (title: string) => todoService.create(title), {
    async onSuccess() {
      setTitle('');
      alert('Todo was created!');

      // await refetch()
    },
  });

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();

    mutate(title);

    console.log(title);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
      <div>
        <h2>Create</h2>
        <form onSubmit={(e) => submitHandler(e)}>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
          <br />
          <button>Create</button>
        </form>
      </div>

      <div>
        <h1 style={{ marginBottom: 20 }}>React Query tutorial</h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : data?.length ? (
          data.map((todo) => {
            return (
              <div key={todo.id}>
                <b>{todo.id}</b>: {todo.title}
              </div>
            );
          })
        ) : (
          <h1>There is no data</h1>
        )}
      </div>
    </div>
  );
};

export { App };
