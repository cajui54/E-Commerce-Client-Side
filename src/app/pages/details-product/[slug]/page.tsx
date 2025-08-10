import { notFound } from 'next/navigation';
import React from 'react';

import AsideBanner from '@/app/_components/aside-banner';
import BadgeDiscountPercentage from '@/app/_components/badge-discount-percentage';
import PanelPrice from '@/app/_components/panel-price';
import ProductsList from '@/app/_components/products-list';
import { getAllProductByCategory } from '@/app/_data-access/product/get-all-product-by-category';
import { getProductBySlug } from '@/app/_data-access/product/get-product-by-slug';

import ManagerAmount from './_components/manger-amout';
import SlideImage from './_components/slide-image';
interface DetailsPageProps {
  params: Promise<{ slug: string }>;
}

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  const productsCategory = await getAllProductByCategory(product.category.slug);
  return (
    <div className="h-full w-full p-5">
      <div className="w-full lg:flex lg:items-start lg:justify-between">
        <SlideImage
          images={product.imagesUrl}
          name={product.name}
          discountPercentage={product.discountPercentage}
        />

        <div className="mx-auto my-11 w-full lg:w-[40%] lg:border-l-2 lg:border-neutral-200 lg:pl-6">
          <h2 className="font-brand-roboto text-brand-primary text-3xl font-bold">
            {product.name}
          </h2>
          <h3 className="font-brand-poppins -mt-2 text-sm font-medium text-neutral-600 italic">
            {product.brand}
          </h3>

          <div className="my-1 w-fit">
            <PanelPrice
              discountPercentage={product.discountPercentage}
              basePrice={Number(product.basePrice)}
            />
          </div>
          <ManagerAmount idProduct={product.id} />
        </div>
      </div>

      <div className="mt-11 space-y-3 sm:w-[500px]">
        <h3 className="text-2xl font-bold text-neutral-600">
          Descrição do Produto
        </h3>
        <p className="text-base tracking-wider text-neutral-600 italic">
          {product.description}
        </p>
      </div>

      <div className="mt-8 lg:flex">
        <div>
          <h3 className="text-2xl font-medium text-neutral-500">
            Recomendações
          </h3>
          <ProductsList products={productsCategory} />
        </div>
        <div className="mt-5 ml-8">
          <AsideBanner
            title="Banho e Tosa"
            subtitle="Agende já!"
            slug={product.category.slug}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
