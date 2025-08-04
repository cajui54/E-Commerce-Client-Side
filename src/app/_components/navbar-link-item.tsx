'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { tv } from 'tailwind-variants';

import { icons, NavbarItem } from '../_constants/options-navbar';

const iconVariantes = tv({
  base: 'w-3.5 rounded-3xl',
  variants: {
    color: {
      isActive: 'text-emerald-500 w-6',
      isNotActive: 'text-neutral-500',
    },
  },
  defaultVariants: {
    color: 'isNotActive',
  },
});
const linkVariantes = tv({
  base: 'font-brand-roboto text-xs flex items-center gap-2 py-1 tracking-widest transition duration-700 ease-in-out',
  variants: {
    color: {
      isActive: 'text-emerald-500 font-bold  hover:text-neutral-800',
      isNotActive:
        'text-neutral-500 hover:font-semibold hover:text-emerald-500',
    },
  },
  defaultVariants: {
    color: 'isNotActive',
  },
});
const NavbarLinkItem = ({ href, label, iconName }: NavbarItem) => {
  const pathname = usePathname();
  const Icon = icons[iconName];

  const isActive = () => {
    return pathname === href;
  };

  return (
    <Link
      href={href}
      className={linkVariantes({
        color: isActive() ? 'isActive' : 'isNotActive',
      })}
    >
      <Icon
        className={iconVariantes({
          color: isActive() ? 'isActive' : 'isNotActive',
        })}
      />
      {label}
    </Link>
  );
};

export default NavbarLinkItem;
