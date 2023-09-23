import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from '@/context/theme-context';
import userAvatar from '@/assets/default-user.jpg';

import { useUser } from '@/features/authentication/useUser';

export default function UserMenu() {
  const { setTheme } = useTheme();
  const { user, isAuthenticated } = useUser();

  if (!isAuthenticated) return null;

  return (
    <Menubar className="bg-transparent w-max border-0 cursor-pointer">
      <MenubarMenu>
        <MenubarTrigger>
          <div className="flex items-center gap-1">
            <Avatar>
              <AvatarImage src={userAvatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              {user?.userName.toUpperCase() || 'ADMIN'}
            </div>
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Change Theme</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem onClick={() => setTheme('light')}>Light</MenubarItem>
              <MenubarItem onClick={() => setTheme('dark')}>Dark</MenubarItem>
              <MenubarItem onClick={() => setTheme('system')}>
                System
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Logout</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}