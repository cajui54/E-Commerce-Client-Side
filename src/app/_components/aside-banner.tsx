import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
interface AsideBannerProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
}

const AsideBanner = ({ image, title, subtitle }: AsideBannerProps) => {
  return (
    <aside className="relative mx-auto mt-12 mr-5 flex h-[200px] w-11/12 justify-end overflow-hidden rounded-2xl bg-red-300 drop-shadow-lg lg:h-[500px] lg:w-[300px] lg:flex-col">
      <div className="absolute -left-7 h-full w-4/5 lg:left-0 lg:w-full">
        <Image
          src={image}
          alt="dog pug and girl"
          height={0}
          width={0}
          sizes="100vw"
          className="h-[200px] w-full lg:h-[280px]"
        />
      </div>
      <div className="z-20 flex h-full w-[250px] flex-col items-end justify-center bg-linear-to-r from-transparent via-emerald-300 to-emerald-400 pr-2 lg:w-full lg:items-center lg:bg-linear-to-b lg:via-60%">
        <h2 className="font-brand-roboto text-2xl font-bold tracking-wider text-white lg:mt-[200px]">
          {title}
        </h2>
        <h3 className="-mt-3 text-lg font-medium text-gray-900 lg:-mt-3 lg:text-5xl">
          {subtitle}
        </h3>

        <Button
          variant={'default'}
          className="mt-2 w-[150px] px-6 lg:mt-6"
          asChild
        >
          <Link href={'https://petshop-app-flax.vercel.app/'} target="_blank">
            Agendamentos
          </Link>
        </Button>
      </div>
    </aside>
  );
};

export default AsideBanner;
