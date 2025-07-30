import React from 'react';

import { navbarItems } from '../constants/options-navbar';
import NavbarLinkItem from './navbar-link-item';

const NavbarMobile = () => {
  return (
    <nav className="mx-auto flex w-[90%] flex-col gap-y-2.5">
      {navbarItems.map((link, index) => (
        <NavbarLinkItem key={index} {...link} />
      ))}
    </nav>
  );
};

export default NavbarMobile;
