import React from 'react';
import { ReactElement, useMemo } from 'react';
import { ukUA } from '@mui/x-data-grid';
import { ukUA as coreUkUA } from '@mui/material/locale';
import { CssBaseline } from '@mui/material';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';

import {
  palette,
  breakpoints,
  typography,
  overrides,
} from './theme/index';

type Args = {
  children: ReactElement;
};

const ThemeProvider = (args: Args) => {
  const { children } = args;
  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
      breakpoints,
      ukUA,
      coreUkUA,
    }),
    []
  );

  const theme = createTheme(themeOptions as any);
  theme.components = overrides as any;

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
