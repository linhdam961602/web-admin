import { useMemo, ReactNode } from 'react';
import type {} from '@mui/lab/themeAugmentation';
// material

import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import shape from './shape';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

type ThemeConfigProps = {
  children: ReactNode;
};

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      typography,
      shape,
      palette: { ...palette.light, mode: 'light' },
      breakpoints,
      shadows: shadows.light,
      customShadows: customShadows.light,
    }),
    [],
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />

        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
