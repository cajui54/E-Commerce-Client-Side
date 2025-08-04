'use server';

import prisma from '@/app/_libs/prisma';

export const getAllByDeals = async () => {
  return await prisma.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
  });
};
