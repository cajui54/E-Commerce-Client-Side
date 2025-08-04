import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface BannerProps {
  title: string;
  image: StaticImageData;
}
const Banner = ({ title, image }: BannerProps) => {
  return (
    <div>
      <div className="mx-auto my-8 flex h-[200px] w-[95%] items-center overflow-hidden rounded-3xl bg-linear-to-r from-emerald-300 via-emerald-200 to-transparent drop-shadow-sm lg:ml-10 lg:max-w-[800px] lg:justify-between">
        <div className="flex h-full flex-col items-start justify-center pl-5">
          <h3 className="ml-2 w-[170px] text-lg font-medium text-gray-600 italic">
            Descontos para seu
          </h3>
          <h2 className="-mt-2 text-4xl font-bold text-gray-700">{title}</h2>
        </div>
        <Image
          src={image}
          alt="Dog"
          height={0}
          width={0}
          sizes="100vw"
          className="h-[300px] w-[350px]"
        />
      </div>
    </div>
  );
};

export default Banner;
