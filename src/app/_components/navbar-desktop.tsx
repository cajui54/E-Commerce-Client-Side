import React from 'react';

import { navbarItems } from '../constants/options-navbar';
import NavbarLinkItem from './navbar-link-item';

const NavbarDesktop = () => {
  return (
    <div className="mr-28 hidden w-fit lg:flex lg:gap-5">
      {navbarItems.map((link, index) => (
        <NavbarLinkItem key={index} {...link} />
      ))}
    </div>
  );
};

export default NavbarDesktop;
