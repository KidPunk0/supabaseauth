import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const MagicLinkForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const { signInWithMagicLink } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending magic link...');
    try {
      const { error } = await signInWithMagicLink(email);
      if (error) {
        setStatus(`Error: ${error.message}`);
      } else {
        setStatus(`Magic link sent to ${email}`);
      }
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Send Magic Link</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default MagicLinkForm;
