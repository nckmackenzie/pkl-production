import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Aside from './Aside';

export default function AppLayout() {
  return (
    <div className="h-dvh relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-100 dark:bg-slate-900 w-72 border-r">
        <Aside />
      </div>
      <main className="md:pl-72 h-full overflow-scroll">
        <Navbar />
        <div className="h-[calc(100dvh-5rem)] p-4 md:p-6 lg:px-8 lg:py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
