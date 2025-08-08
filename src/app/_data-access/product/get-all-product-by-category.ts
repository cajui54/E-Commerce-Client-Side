'use server';

import prisma from '@/app/_libs/prisma';

export const getAllProductByCategory = async (slug: string) => {
  return prisma.product.findMany({
    where: {
      category: {
        slug,
      },
    },
    include: {
      category: true,
    },
  });
};
