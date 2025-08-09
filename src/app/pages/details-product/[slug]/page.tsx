import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { GiDogBowl } from 'react-icons/gi';
import { TiShoppingCart } from 'react-icons/ti';

import PanelPrice from '@/app/_components/panel-price';
import { getProductBySlug } from '@/app/_data-access/product/get-product-by-slug';
import { Button } from '@/components/ui/button';

import ManagerAmount from './_components/manger-amout';
import SlideImage from './_components/slide-image';

interface DetailsPageProps {
  params: Promise<{ slug: string }>;
}

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  return (
    <div className="h-full w-full p-5">
      <div className="w-full lg:flex lg:items-start lg:justify-between">
        <SlideImage images={product.imagesUrl} name={product.name} />
        <div className="mx-auto my-11 w-full lg:w-[40%]">
          <h2 className="font-brand-roboto text-brand-primary text-3xl font-bold">
            {product.name}
          </h2>
          <h3 className="font-brand-poppins -mt-2 text-sm font-medium text-neutral-600 italic">
            {product.brand}
          </h3>

          <div className="my-1">
            <PanelPrice
              discountPercentage={product.discountPercentage}
              basePrice={Number(product.basePrice)}
            />
          </div>
          <ManagerAmount />
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
    </div>
  );
};

export default DetailsPage;
