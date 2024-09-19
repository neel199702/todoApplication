import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Custom primary color (blue)
    },
    secondary: {
      main: '#dc004e', // Custom secondary color (pink/red)
    },
    error: {
      main: '#f44336', // Custom error color (red)
    },
    background: {
      default: '#f5f5f5', // Light background color for the app
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Set default font
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Disable uppercase text in buttons
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '10px', // Set padding for table cells
          fontSize: '0.875rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '20px', // Default padding
        },
      },
    },
  },
});

export default theme;
