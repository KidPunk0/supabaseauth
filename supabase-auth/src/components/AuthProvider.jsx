import React from 'react';
import { AuthProvider as SupabaseAuthProvider } from '../context/AuthContext';

const AuthProvider = ({ children }) => {
  return <SupabaseAuthProvider>{children}</SupabaseAuthProvider>;
};

export default AuthProvider;
