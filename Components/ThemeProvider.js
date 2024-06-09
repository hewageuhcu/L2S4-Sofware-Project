// ThemeProvider.js
import React, { useState, createContext, useContext } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

// Define your themes
const lightTheme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    background: {
      default: '#333333',
    },
  },
});

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;

