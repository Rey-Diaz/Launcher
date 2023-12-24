import { useState } from 'react';
import { Button, FormGroup, FormControlLabel, Switch } from '@mui/material';
import { lightTheme, darkTheme } from '../theme'; // Import your light and dark themes

const ThemeSwitcher = ({ onThemeChange }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
    onThemeChange(!darkMode);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={handleThemeChange} />}
        label="Dark Mode"
      />
    </FormGroup>
  );
};

export default ThemeSwitcher;
