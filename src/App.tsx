import React from 'react';
import Form from './components/form/Form';
// import Gallery from './components/gallery/Gallery';
import { MainPage } from './components/mainPage/MainPage';
import { Navbar } from './components/navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainPage />

      <Form />

      <p>Color of the text is aqua</p>

      {/* <Gallery /> */}
    </div>
  );
};

export { App };
