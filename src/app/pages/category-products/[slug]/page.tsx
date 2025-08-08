import React from 'react';

import cat from '@/_assets/images/cat.png';
import dogPug from '@/_assets/images/dog-pug02.png';
import AsideBanner from '@/app/_components/aside-banner';
import ProductItem from '@/app/_components/product-item';
import { getAllProductByCategory } from '@/app/_data-access/product/get-all-product-by-category';

import HeroProductCategory from './_components/hero-product-category';
interface CategoryProductPageProps {
  params: Promise<{ slug: string }>;
}
const CategoryProductPage = async ({ params }: CategoryProductPageProps) => {
  const { slug } = await params;
  const products = await getAllProductByCategory(slug);

  return (
    <div className="mt-3 min-h-[100vh] w-full space-y-6 py-5">
      <HeroProductCategory
        title={products[0].category.name}
        image={products[0].imagesUrl[0]}
      />

      <div className="pb-3 lg:flex lg:pl-4">
        <div className="mx-auto grid min-h-[500px] w-11/12 grid-cols-2 gap-x-18 gap-y-3 overflow-auto sm:w-[630px] sm:grid-cols-3 sm:gap-x-0 sm:overflow-visible lg:ml-0 lg:w-fit lg:grid-cols-4 lg:gap-4">
          {products.map((product) => (
            <div key={product.id} className="mx-auto">
              <ProductItem {...product} />
            </div>
          ))}
        </div>
        <AsideBanner
          title="Banho e Tosa"
          subtitle="50% off"
          image={products[0].category.slug === 'cat' ? cat : dogPug}
        />
      </div>
    </div>
  );
};

export default CategoryProductPage;
