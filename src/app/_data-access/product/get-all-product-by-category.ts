'use server';

import { prismaClient } from '@/lib/prisma';

export const getAllProductByCategory = async (slug: string) => {
  return prismaClient.product.findMany({
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
