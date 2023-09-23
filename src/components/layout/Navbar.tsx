import MenuButton from './MenuButton';
import UserMenu from './UserMenu';

export default function Navbar() {
  return (
    <div className="flex items-center p-4 bg-gray-100 dark:bg-slate-900 border-b h-20">
      <MenuButton />
      {/* <Button variant="outline" size="icon" className="md:hidden">
        <MenuIcon />
      </Button> */}
      <div className="ml-auto flex gap-1 items-center">
        <UserMenu />
      </div>
    </div>
  );
}
