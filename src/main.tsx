import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Container } from './components/container/Container';
import './styles/main.scss';

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <Container>
      <App />
    </Container>

    {/* </QueryClientProvider> */}
  </React.StrictMode>,
);
