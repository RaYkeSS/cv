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
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          light: '#98e3db',
          main: '#1d9589',
          dark: '#3ce5d5',
          contrastText: '#def0ee',
        },
      },
    },
    light: {
      palette: {
        primary: {
          light: '#1d6861',
          main: '#6ae2d6',
          dark: '#1ac1b0',
          contrastText: '#0e1f1d',
        },
      },
    },
  }
});

export default theme;
