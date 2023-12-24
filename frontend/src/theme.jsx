import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#007aff',
    },
    background: {
      default: '#f4f4f4',
    },
    text: {
      primary: '#333',
      secondary: '#555',
    },
  },
  // Define typography and other properties for the light theme
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#007aff',
    },
    background: {
      default: '#121212', // Dark background color
    },
    text: {
      primary: '#ffffff', // Light text color
      secondary: '#cccccc', // Gray text color
    },
  },
  // Define typography and other properties for the dark theme
});

export { lightTheme, darkTheme };
