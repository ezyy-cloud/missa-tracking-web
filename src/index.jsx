import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import store from './store';
import { LocalizationProvider } from './common/components/LocalizationProvider';
import ErrorHandler from './common/components/ErrorHandler';
import Navigation from './Navigation';
import preloadImages from './map/core/preloadImages';
import NativeInterface from './common/components/NativeInterface';
import ServerProvider from './ServerProvider';
import ErrorBoundary from './ErrorBoundary';
import AppThemeProvider from './AppThemeProvider';

// Defer image preloading to non-blocking - load after initial render
if (typeof window !== 'undefined') {
  // Use requestIdleCallback if available, otherwise setTimeout
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      preloadImages().catch(() => {
        // Silently fail if preloading doesn't complete
      });
    }, { timeout: 2000 });
  } else {
    setTimeout(() => {
      preloadImages().catch(() => {
        // Silently fail if preloading doesn't complete
      });
    }, 100);
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <LocalizationProvider>
        <StyledEngineProvider injectFirst>
          <AppThemeProvider>
            <CssBaseline />
            <ServerProvider>
              <BrowserRouter>
                <Navigation />
              </BrowserRouter>
              <ErrorHandler />
              <NativeInterface />
            </ServerProvider>
          </AppThemeProvider>
        </StyledEngineProvider>
      </LocalizationProvider>
    </Provider>
  </ErrorBoundary>,
);
