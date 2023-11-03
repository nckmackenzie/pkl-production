import Logo from '../ui/Logo';
import { getMenuItems } from './constant';
// import { useUser } from '@/features/authentication/useUser';
import NavItem from './NavItem';
// import { useQueryClient } from '@tanstack/react-query';

export default function Aside() {
  // const { user } = useUser();
  // const role = user?.user_metadata || 'user';
  const navItems = getMenuItems('admin');
  return (
    <aside>
      <header className="h-20 border-b flex flex-col items-center justify-center">
        <Logo />
      </header>
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map(item => (
            <NavItem
              key={item.href}
              text={item.text}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
