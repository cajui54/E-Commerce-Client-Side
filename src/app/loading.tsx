import Image from 'next/image';
import React from 'react';
import { ImSpinner9 } from 'react-icons/im';

const LoadingPage = () => {
  return (
    <div className="flex h-[100vw] w-full flex-col-reverse items-center justify-center lg:h-full">
      <div className="flex w-fit items-center justify-center gap-5 rounded-md">
        <ImSpinner9 className="animate-spin text-2xl text-emerald-200" />
        <span className="font-brand-poppins">Carregando...</span>
      </div>
      <Image
        src={'/dog_cat_etc-removebg.png'}
        width={0}
        height={0}
        alt="animals together"
        sizes="100vw"
        className="h-[250px] w-[250px] lg:h-[500px] lg:w-[500px]"
      />
    </div>
  );
};

export default LoadingPage;
