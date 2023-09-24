import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

type NavItemProps = {
  text: string;
  icon: LucideIcon;
  href: string;
};

export default function NavItem({ text, icon: Icon, href }: NavItemProps) {
  const { pathname } = useLocation();
  return (
    <li
      className={cn(
        'rounded transition-colors p-2 hover:bg-background/60 hover:text-primary',
        pathname === href && 'text-primary bg-background/60'
      )}
    >
      <Link to={href} className="flex items-center gap-2">
        <Icon className="w-4 h-4" />
        {text}
      </Link>
    </li>
  );
}
