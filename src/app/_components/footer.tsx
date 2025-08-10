import Link from 'next/link';
import React from 'react';
import { CiLinkedin } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center border-t border-neutral-200 py-3">
      <div>
        <Link
          href={''}
          target="_blank"
          className="flex items-center gap-1 italic transition-all duration-200 ease-in hover:font-bold"
        >
          <CiLinkedin className="text-lg" />
          Create by J. Tiago
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
