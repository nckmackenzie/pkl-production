import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Aside from './Aside';
import { Button } from '@/components/ui/button';

export default function MenuButton() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Aside />
      </SheetContent>
    </Sheet>
  );
}
