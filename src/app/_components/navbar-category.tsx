import Link from 'next/link';
import React from 'react';

import { icons, navbarItems } from '../constants/options-navbar';

const NavbarCategory = () => {
  return (
    <div className="mx-auto flex h-[100px] w-4/5 items-center justify-center gap-5 overflow-auto">
      {navbarItems
        .filter((link) => link.label !== 'Home')
        .map((link) => {
          const Icon = icons[link.iconName];

          return (
            <Link
              key={link.label}
              href={link.label}
              className="text-center text-neutral-600 transition-all duration-300 ease-in-out hover:scale-125 hover:text-emerald-400"
            >
              <div className="flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-neutral-100 drop-shadow-sm drop-shadow-gray-300">
                <Icon />
              </div>
              <span className="text-xs">{link.label}</span>
            </Link>
          );
        })}
    </div>
  );
};

export default NavbarCategory;
