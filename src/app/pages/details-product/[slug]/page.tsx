import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

import { getProductBySlug } from '@/app/_data-access/product/get-product-by-slug';

import SlideImage from './_components/slide-image';

interface DetailsPageProps {
  params: Promise<{ slug: string }>;
}

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  return (
    <div className="h-full w-full">
      <SlideImage images={product.imagesUrl} name={product.name} />
    </div>
  );
};

export default DetailsPage;
