
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import SignIn from './pages/SignInPage/SignIn';
import Register from './pages/RegisterPage/Register';
import NavBar from './components/NavBar';
import AccountPage from './pages/Account/AccountPage';
import HomePage from './pages/Home/home';

function App() {


  return (
    <div>
      <CssBaseline />
      <NavBar/>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/account" component={AccountPage} />
            {/* Define other routes here */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
