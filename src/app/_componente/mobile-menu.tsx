'use client';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-3 mt-4">
          <a
            href="#features"
            className="text-muted-foreground hover:text-orange-400 transition"
          >
            Recursos
          </a>
          <a
            href="#restaurants"
            className="text-muted-foreground hover:text-orange-400 transition"
          >
            Restaurantes
          </a>
          <a
            href="#pricing"
            className="text-muted-foreground hover:text-orange-400 transition"
          >
            Preços
          </a>
          <Button
            variant="default"
            className="bg-orange-500 hover:bg-orange-600"
          >
            Login Restaurante
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
