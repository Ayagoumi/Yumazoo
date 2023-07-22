import { CssBaseline } from '@mui/material';
import type { ThemeOptions } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';
import * as React from 'react';

import componentsOverride from './overrides/index';
import palette from './palette';
import shape from './shape';
import typography from './typography';

type ThemeConfigProps = {
  children: ReactNode;
};

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const themeOptions: ThemeOptions = {
    shape,
    palette: { ...palette.dark, mode: 'light' },
    typography,
  };

  const theme = createTheme(themeOptions);
  // @ts-ignore
  theme.components = componentsOverride(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
