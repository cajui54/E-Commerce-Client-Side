import { Suspense } from 'react';

import HeaderMain from '../_components/header-main';
import Hero from '../_components/hero';
import NavbarCategory from '../_components/navbar-category';
import ProductsList from '../_components/products-list';
import SkeletonNavbarCategory from '../_components/skeleton-navbar-category';
import prisma from '../_libs/prisma';

export default async function Home() {
  const products = await prisma.product.findMany({});
  return (
    <div className="h-full w-full space-y-2">
      <HeaderMain />
      <Hero />
      <Suspense fallback={<SkeletonNavbarCategory />}>
        <NavbarCategory />
      </Suspense>

      <div className="mx-auto my-2.5 w-[90%] space-y-7">
        <h3 className="font-brand-poppins text-brand-primary text-4xl font-bold">
          Ofertas Pet da Semana
        </h3>
        <ProductsList products={products} />
      </div>
    </div>
  );
}
