import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative mx-auto flex h-[200px] w-[95%] flex-col items-start justify-center gap-y-5 overflow-hidden rounded-md bg-gradient-to-b from-gray-300 via-gray-200 to-gray-50 px-4 shadow-sm sm:w-4/5 lg:ml-4">
      <div className="w-fit">
        <h1 className="text-brand-primary text-center text-5xl font-black">
          PetsShop
        </h1>
        <p className="-mt-2 ml-2 font-bold text-neutral-900">
          Tudo para seus Pets
        </p>
      </div>
      <Image
        src={'/dog-pug.png'}
        alt="dog pug"
        height={0}
        width={0}
        sizes="100vw"
        className="absolute -top-10 -right-36 h-[400px] w-[500px]"
      />
    </div>
  );
};

export default Hero;
