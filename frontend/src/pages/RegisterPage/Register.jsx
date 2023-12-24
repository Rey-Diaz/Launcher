import { auth } from '../../config/firebase-config';
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Container, TextField, Button, Typography } from '@mui/material';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const registerWithEmailPassword = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registered with:', userCredential.user.email);
      // Handle the successful registration
    } catch (error) {
      setError(error.message);
      console.error("Error in user registration: ", error);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google Sign-In successful, user:', result.user);
      // Handle the successful Google Sign-In
    } catch (error) {
      setError(error.message);
      console.error('Google sign-in error', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      
      {/* Email/Password Registration Form */}
      <form onSubmit={registerWithEmailPassword}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up with Email
        </Button>
      </form>

      {/* Google Sign-In Button */}
      <Button
        onClick={signInWithGoogle}
        variant="contained"
        color="secondary"
        style={{ marginTop: '20px' }}
      >
        Sign in with Google
      </Button>
    </Container>
  );
}
