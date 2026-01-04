"use client";

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "ravi, sans-serif",
  },

  direction: 'rtl',

  palette: {
    primary: { main: '#444' },
    secondary: {main: '#555'}
  },

  components: {
     MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '9.6px',
      },
    },
  },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "13px",  
          fontFamily: "ravi",
          transformOrigin: 'right',
          left: 'auto !important',
          right: 20,
          textAlign: 'right',
        },
        shrink: {
          fontSize: "13px",   
          transform: "translate(12px, 4px) scale(1) !important",
          fontFamily: "ravi",
        }
      }
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          '&:hover': { backgroundColor: '#ddd' },
          '&.Mui-focused': { backgroundColor: '#ddd' },
        },
        input: {
          fontFamily: "ravi",
        }
      },
    },
  },
});

export default theme;
