import React from 'react';
import { LinkLogo, LogoImage } from './logo-image-link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { SlHandbag } from 'react-icons/sl';
import NavbarMobile from './navbar-mobile';
import NavbarDesktop from './navbar-desktop';

const HeaderMain = () => {
  return (
    <header className="flex h-16 w-full items-center justify-between px-2 shadow-lg">
      <div className="w-fit">
        <LinkLogo path="/">
          <LogoImage
            src={'/android-chrome-192x192.png'}
            alt="Logo de um petshop ecommerce"
          />
        </LinkLogo>
      </div>

      <div className="flex items-center gap-2.5 pr-5 text-neutral-500">
        <NavbarDesktop />

        <SlHandbag />
        <Sheet>
          <SheetTrigger className="cursor-pointer lg:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <div className="flex items-center gap-1">
                <LogoImage
                  src={'/android-chrome-192x192.png'}
                  alt="logo fish"
                />
                <SheetTitle className="font-brand-roboto text-xl font-bold text-neutral-500">
                  Tudo para seu Pet
                </SheetTitle>
              </div>
              <SheetDescription>
                <span className="text-brand-primary font-semibold">
                  E-Petshop
                </span>{' '}
                | O Melhor Para o Seu Pet — Tudo que o seu pet precisa, desde
              </SheetDescription>
            </SheetHeader>
            <NavbarMobile />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default HeaderMain;
