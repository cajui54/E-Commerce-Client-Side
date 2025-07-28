import React from 'react';
import { LinkLogo, LogoImage } from './logo-image-link';

const HeaderMain = () => {
  return (
    <header className="h-16 w-full px-2 shadow-lg">
      <div className="w-fit">
        <LinkLogo path="/">
          <LogoImage
            src={'/android-chrome-192x192.png'}
            alt="Logo de um petshop ecommerce"
          />
        </LinkLogo>
      </div>
    </header>
  );
};

export default HeaderMain;
