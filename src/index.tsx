import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ThemeProvider from './app/ui-theme';
import { Loader } from './app/ui-components';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './pages/ErrorPage';
import { getProductsAsync } from './redux/slices';

const container = document.getElementById('root')!;
const root = createRoot(container);

store.dispatch(getProductsAsync(0));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ErrorBoundary
        fallback={<ErrorPage />}
        onError={console.error}
      >
        <Provider store={store}>
          <BrowserRouter>
            <Suspense
              fallback={
                <Loader style={{ height: '100vh' }} />
              }
            >
              <AppRouter />
            </Suspense>
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
