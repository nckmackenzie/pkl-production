import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import AppLayout from './components/layout/AppLayout';
import JobCards from './pages/JobCards';
import CreateTask from './pages/CreateTask';
import Tasks from './pages/Tasks';
import TasksIndividual from './pages/TasksIndividual';
import OngoingJobs from './pages/OngoingJobs';
import PeformanceByStaff from './pages/PeformanceByStaff';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/jobcards" element={<JobCards />} />
            <Route path="/assign-task" element={<CreateTask />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/:staffid" element={<TasksIndividual />} />
            <Route path="/ongoing-jobs" element={<OngoingJobs />} />
            <Route path="/performances" element={<PeformanceByStaff />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'bg-background',
            color: 'text-foreground',
          },
        }}
      />
    </>
  );
}

export default App;
