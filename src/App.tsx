import React from 'react';
import { MainPage } from './components/mainPage/MainPage';
import { Navbar } from './components/navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainPage />
    </div>
  );
};

export { App };
