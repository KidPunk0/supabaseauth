import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../src/components/AuthProvider';
import { ProtectedRoute } from '../src/components/ProtectedRoute';
import AuthPage from '../src/pages/AuthPage';

// Example Dashboard component
const Dashboard = () => {
  const { user, signOut } = useAuth();
  
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome, {user.email}!</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/auth" element={<AuthPage />} />
          
          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          
          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
