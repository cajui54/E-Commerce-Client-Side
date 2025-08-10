'use server';

import { prismaClient } from '@/lib/prisma';

export const getProductBySlug = async (slug: string) => {
  const product = await prismaClient.product.findFirst({
    where: { slug },
    include: {
      category: true,
    },
  });
  return product;
};
