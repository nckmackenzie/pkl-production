import { useNavigate } from 'react-router-dom';
import { useUser } from '@/features/authentication/useUser';
import { useEffect } from 'react';
import TaskAction from '@/features/tasks/TaskAction';
import TasksList from '@/features/tasks/TasksList';

export default function Tasks() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(
    function () {
      if (user?.role === 'User') {
        navigate('/tasks/' + user?.userId);
      }
    },
    [navigate, user?.role, user?.userId]
  );
  return (
    <div className="space-y-12">
      <TaskAction />
      <TasksList />
    </div>
  );
}
