import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    padding: '2rem',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#555',
    fontSize: '0.875rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  buttonHover: {
    backgroundColor: '#2563eb',
  },
  message: {
    textAlign: 'center',
    marginTop: '1rem',
    padding: '0.75rem',
    borderRadius: '4px',
  },
  success: {
    backgroundColor: '#dcfce7',
    color: '#166534',
  },
  error: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
  },
};

const AuthPage = ({ redirectUrl = '/' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const { signInWithMagicLink } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending magic link...' });

    try {
      const { error } = await signInWithMagicLink(email);
      if (error) {
        setStatus({ type: 'error', message: error.message });
      } else {
        setStatus({
          type: 'success',
          message: `Magic link sent to ${email}! Check your email inbox.`,
        });
      }
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Sign In / Sign Up</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div>
            <label htmlFor="email" style={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={styles.input}
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = styles.button.backgroundColor;
            }}
          >
            Send Magic Link
          </button>
          {status.message && (
            <div
              style={{
                ...styles.message,
                ...(status.type === 'error' ? styles.error : styles.success),
              }}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
