import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { lightTheme, darkTheme } from './theme'; // Import your light and dark themes
import SignIn from './pages/SignInPage/SignIn';
import Layout from './layout/Layout';
import ThemeSwitcher from './components/ThemeSwitcher';
import Register from './pages/RegisterPage/Register';

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const handleThemeChange = (darkMode) => {
    setCurrentTheme(darkMode ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Router>
        <Layout>
          <ThemeSwitcher onThemeChange={handleThemeChange} />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            {/* Define other routes here */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
