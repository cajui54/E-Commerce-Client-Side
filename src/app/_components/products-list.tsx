import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Product } from '@/generated/prisma';

import ProductItem from './product-item';

interface ProductListProps {
  products: Product[];
}

const ProductsList = ({ products }: ProductListProps) => {
  return (
    <div className="w-full lg:w-[880px]">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="mx-auto"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <ProductItem {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={`${products.length < 6 && 'lg:hidden'} ml-[30px]`}
        />
        <CarouselNext
          className={`${products.length < 6 && 'lg:hidden'} mr-[30px]`}
        />
      </Carousel>
    </div>
  );
};

export default ProductsList;
