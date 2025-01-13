import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const useAuthRedirect = (redirectUrl = '/dashboard') => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(redirectUrl);
    }
  }, [user, navigate, redirectUrl]);
};

export const getRedirectUrl = () => {
  // Get the redirect URL from the URL parameters
  const params = new URLSearchParams(window.location.search);
  return params.get('redirectTo') || '/dashboard';
};
