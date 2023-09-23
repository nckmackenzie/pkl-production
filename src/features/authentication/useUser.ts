import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  function login(user: User): void {
    setIsLoading(true);
    setUser(user);
    setIsLoading(false);
    navigate('/', { replace: true });
  }

  function logout() {
    setUser(null);
    navigate('/login', { replace: true });
  }

  return { isAuthenticated: !!user, user, login, logout, isLoading };
}
