import { CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

type PageContextType = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export const PageContext = React.createContext<PageContextType>({
  page: 'HOME',
  setPage: () => {},
});

function Index() {
  const [page, setPage] = useState('HOME');

  return (
    <ThemeConfig>
      <PageContext.Provider value={{ page, setPage }}>
        <HelmetProvider>
          <CssBaseline />
          <GlobalStyles />
          <App />
        </HelmetProvider>
      </PageContext.Provider>
    </ThemeConfig>
  );
}

render(<Index />, document.getElementById('root'));
