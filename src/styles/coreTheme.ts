import { createTheme } from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';

export const appTheme = createTheme({
  white: '#FF0000',
  black: '#181818',
  fontFamily: 'serif',
  primaryColor: 'cyan',
});

export const vars = themeToVars(appTheme);