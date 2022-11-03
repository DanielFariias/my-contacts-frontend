import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from '../../Routes';
import { Header } from '../Header';
import { ToastContainer } from './Toast/ToastContainer';

import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import { Container } from './styles';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />

        <Container>
          <Header />
          <Routes />
        </Container>

      </ThemeProvider>
    </BrowserRouter>
  );
}
