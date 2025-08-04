import Image from 'next/image';
import { Suspense } from 'react';

import imgCatPug from '@/_assets/images/cat.png';
import imgDogAndChildren from '@/_assets/images/children_and_pug.png';
import imgDogPug from '@/_assets/images/dog-pug02.png';

import AsideBanner from '../_components/aside-banner';
import Banner from '../_components/banner';
import HeaderMain from '../_components/header-main';
import Hero from '../_components/hero';
import NavbarCategory from '../_components/navbar-category';
import ProductsList from '../_components/products-list';
import SkeletonNavbarCategory from '../_components/skeleton-navbar-category';
import { getAllByDeals } from '../_data-access/product/get-All-by-deals';
import { getProductsByCategoryAndDeal } from '../_data-access/product/get-by-category-and-deal';
import prisma from '../_libs/prisma';

export default async function Home() {
  const productsDeals = await getAllByDeals();
  const dogDeals = await getProductsByCategoryAndDeal('dog');
  const catDeals = await getProductsByCategoryAndDeal('cat');
  return (
    <div className="h-full w-full space-y-2">
      <HeaderMain />
      <Hero />
      <Suspense fallback={<SkeletonNavbarCategory />}>
        <NavbarCategory />
      </Suspense>

      <div className="mb-9 lg:flex lg:justify-between">
        <div>
          <div className="mx-auto my-2.5 w-[90%] space-y-7">
            <h3 className="font-brand-poppins text-brand-primary text-4xl font-bold">
              Ofertas Pet da Semana
            </h3>
            <ProductsList products={productsDeals} />
          </div>

          <Banner title="Cachorro" image={imgDogPug} />

          <div className="mx-auto my-2.5 w-[90%] space-y-7">
            <h3 className="font-brand-poppins text-brand-primary text-4xl font-bold">
              Ofertas para seu Gato
            </h3>
            <ProductsList products={dogDeals} />
          </div>

          <Banner title="Gato" image={imgCatPug} />

          <div className="mx-auto my-2.5 w-[90%] space-y-7">
            <h3 className="font-brand-poppins text-brand-primary text-4xl font-bold">
              Ofertas para seu Gato
            </h3>
            <ProductsList products={catDeals} />
          </div>
        </div>

        <div className="flex w-fit flex-col justify-between">
          <AsideBanner
            image={imgDogAndChildren}
            title="Banho & Tosa"
            subtitle="20% off"
          />

          <Image
            src={'/dog_cat_etc-removebg.png'}
            alt="animals"
            width={0}
            height={0}
            sizes="100wv"
            className="h-[600px] w-[400px] drop-shadow-lg drop-shadow-neutral-400"
          />
        </div>
      </div>
    </div>
  );
}
