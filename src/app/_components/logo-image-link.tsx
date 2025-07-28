import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { tv } from 'tailwind-variants';
interface LinkLogoProps {
  children: ReactNode;
  path: string;
}
interface ImageLogoProps {
  alt: string;
  src: string | StaticImport;
  size?: 'sm' | 'md' | 'lg';
}

const image = tv({
  variants: {
    size: {
      sm: 'w-16',
      md: 'w-28',
      lg: 'w-52',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});
export const LogoImage = ({ alt, src, size = 'sm' }: ImageLogoProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className={image({ size })}
    />
  );
};
export const LinkLogo = ({ children, path }: LinkLogoProps) => {
  return <Link href={path}>{children}</Link>;
};
