import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Loader from '@/components/ui/loader';
import { useUser } from '@/features/authentication/useUser';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoading, isAuthenticated } = useUser();

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) navigate('/login');
    },
    [isAuthenticated, isLoading, navigate]
  );
  if (isLoading) return <Loader />;

  return children;
}
