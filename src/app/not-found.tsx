import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';

import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[100vh] w-full items-center justify-center">
      <div className="relative flex h-[500px] w-11/12 flex-col items-center justify-between overflow-hidden rounded-2xl bg-emerald-300 px-10 pt-7 shadow-lg shadow-neutral-300 lg:h-[300px] lg:w-[600px] lg:flex-row lg:justify-center">
        <div>
          <p className="text-center text-3xl">Error 404</p>
          <h2 className="text-4xl font-bold text-neutral-700">Not Found!</h2>
          <Button asChild className="mt-3 w-[200px]">
            <Link href={'/'}>
              {' '}
              <TiArrowBackOutline />
              Voltar
            </Link>
          </Button>
        </div>
        <Image
          src={'/dog-pug.png'}
          alt="dog pug"
          height={0}
          width={0}
          sizes="100wv"
          className="h-[300px] w-[300px]"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
