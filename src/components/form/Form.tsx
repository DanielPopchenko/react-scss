import React, { SyntheticEvent } from 'react';
// import '../../styles/components/Form.scss';

const Form = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log(e);
  };

  return (
    <>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" className="input" placeholder="Text" />
        <br />
        <button className="red-btn">Red</button>
        <button className="green-btn">Green</button>
        <button className="blue-btn">Blue</button>
      </form>

      <div className="box">
        <div className="blue"></div>
        <div className="yellow"></div>
      </div>
    </>
  );
};

export default Form;
