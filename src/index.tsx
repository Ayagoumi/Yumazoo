import { CssBaseline } from '@mui/material';
import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOMClient.createRoot(MOUNT_NODE!).render(
  <ThemeConfig>
    <BrowserRouter>
      <HelmetProvider>
        <CssBaseline />
        <GlobalStyles />
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </ThemeConfig>,
);
