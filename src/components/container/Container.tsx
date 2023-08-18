import React from 'react';
// import '../../styles/components/Container.scss';

const Container = ({ children }: React.PropsWithChildren) => {
  return <div className="container">{children}</div>;
};

export { Container };
