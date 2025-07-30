import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative mx-auto flex h-[200px] w-[95%] items-center justify-between overflow-hidden rounded-md bg-gray-200 shadow-2xs sm:w-[600px] lg:mx-auto lg:w-4/5 lg:justify-start">
      <div className="relative z-30 flex h-full w-4/5 flex-col items-center justify-center bg-gradient-to-l from-transparent via-emerald-200 to-emerald-300 shadow-2xs">
        <h1 className="text-center text-5xl font-black text-neutral-800 text-shadow-2xs lg:text-6xl">
          PetsShop
        </h1>
        <p className="-mt-2 font-bold text-white text-shadow-lg">
          Tudo para seus Pets
        </p>
      </div>
      <div className="absolute w-full">
        <Image
          src={'/petshop.png'}
          alt="dog pug"
          height={0}
          width={0}
          sizes="100vw"
          className="h-[500px] w-full"
        />
        <Image
          src={'/dog_cat_etc-removebg.png'}
          alt="dog pug"
          height={0}
          width={0}
          sizes="100vw"
          className="absolute -right-23 -bottom-1 z-20 h-[400px] w-[300px]"
        />
      </div>
    </div>
  );
};

export default Hero;
