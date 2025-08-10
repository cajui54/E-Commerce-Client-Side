import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsCart4 } from 'react-icons/bs';

import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/generated/prisma';

import BadgeDiscountPercentage from './badge-discount-percentage';
import PanelPrice from './panel-price';

const ProductItem = (product: Product) => {
  return (
    <Link href={`/pages/details-product/${product.slug}`}>
      <Card className="bg-neutral-200 p-0 shadow-lg shadow-neutral-300">
        <CardContent className="relative flex h-[300px] w-[190px] flex-col justify-between px-3 py-2 sm:w-[200px]">
          {product.discountPercentage > 0 && (
            <BadgeDiscountPercentage
              discountPercentage={product.discountPercentage}
            />
          )}
          <div className="mt-2 flex h-[150px] items-center justify-center">
            <Image
              src={`${product.imagesUrl[0]}`}
              alt={`${product.name}`}
              width={0}
              height={0}
              sizes="100wv"
              className="h-[150px] w-fit drop-shadow-lg drop-shadow-neutral-900 transition-all duration-100 ease-linear hover:scale-110"
            />
          </div>

          <div>
            <h3 className="text-brand-primary truncate text-base font-bold">
              {product.name}
            </h3>
            <span className="-mt-1 block text-xs font-semibold text-neutral-400">
              {product.brand}
            </span>
          </div>

          <PanelPrice
            discountPercentage={product.discountPercentage}
            basePrice={Number(product.basePrice)}
          />
          <div className="flex items-center justify-center gap-3 rounded-md bg-emerald-500 py-1 text-center text-neutral-100 transition-all duration-700 ease-linear hover:bg-emerald-600">
            <BsCart4 />
            Comprar
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductItem;
