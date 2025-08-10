'use server';

import prisma from '@/app/_libs/prisma';

export const getProductBySlug = async (slug: string) => {
  const product = await prisma.product.findFirst({
    where: { slug },
    include: {
      category: true,
    },
  });
  return product;
};
