'use server';

import { prismaClient } from '@/lib/prisma';

export const getAllByDeals = async () => {
  return await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
  });
};
