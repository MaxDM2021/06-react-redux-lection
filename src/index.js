import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { theme } from 'constants/theme'
import './index.css';
import { store } from './redux/store'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <App />
    </Provider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);