'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      light: '#98e3db',
      main: '#1d9589',
      dark: '#3ce5d5',
      contrastText: '#def0ee',
    },
    secondary: {
      light: '#1d6760',
      main: '#6ae2d6',
      dark: '#1ac1b0',
      contrastText: '#0e201e',
    },
  }
});

export default theme;
