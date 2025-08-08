import Image, { StaticImageData } from 'next/image';
import React from 'react';
interface HeroProductProps {
  title: string;
  image: string;
}

const HeroProductCategory = ({ title, image }: HeroProductProps) => {
  return (
    <div className="mx-auto flex h-[200px] w-11/12 items-center justify-between overflow-hidden rounded-2xl bg-emerald-200 shadow-sm shadow-neutral-400 lg:ml-5 lg:w-[50%] lg:justify-start">
      <div className="flex h-full w-2/3 flex-col justify-center bg-gradient-to-l from-transparent via-emerald-300 to-emerald-400 pl-3 lg:w-[400px]">
        <h2 className="text-lg font-medium text-neutral-900 italic">
          Novidades para seu
        </h2>
        <h3 className="-mt-2 text-4xl font-black text-neutral-100 lg:text-5xl">
          {title}
        </h3>
      </div>

      <div className="rounded-full bg-emerald-300 p-3 shadow-sm shadow-neutral-400">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes={'100vw'}
          className="drop-sm h-[150px] w-[150px] drop-shadow-neutral-950"
        />
      </div>
    </div>
  );
};

export default HeroProductCategory;
